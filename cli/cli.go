/*
Copyright 2022 Nethermind

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package cli

import (
	"errors"
	"fmt"
	"path/filepath"
	"strings"
	"time"

	eth2 "github.com/protolambda/zrnt/eth2/configs"

	"github.com/NethermindEth/sedge/internal/pkg/clients"
	"github.com/NethermindEth/sedge/internal/pkg/generate"
	"github.com/NethermindEth/sedge/internal/ui"

	"github.com/NethermindEth/sedge/cli/actions"
	"github.com/NethermindEth/sedge/configs"
	"github.com/NethermindEth/sedge/internal/pkg/keystores"
	"github.com/NethermindEth/sedge/internal/utils"
	log "github.com/sirupsen/logrus"
	"github.com/spf13/cobra"
)

const (
	NetworkMainnet = "mainnet"
	NetworkGoerli  = "goerli"
	NetworkSepolia = "sepolia"
	NetworkGnosis  = "gnosis"
	NetworkChiado  = "chiado"
	NetworkCustom  = "custom"

	NodeTypeFullNode  = "full-node"
	NodeTypeExecution = "execution"
	NodeTypeConsensus = "consensus"
	NodeTypeValidator = "validator"

	Randomize = "randomize"

	SourceTypeExisting = "existing"
	SourceTypeCreate   = "create"
	SourceTypeSkip     = "skip"
	SourceTypeRandom   = "random"
)

var ErrCancelled = errors.New("cancelled by the user")

type CliCmdOptions struct {
	genData                  generate.GenData
	generationPath           string
	nodeType                 string
	withValidator            bool
	importSlashingProtection bool
	slashingProtectionFrom   string
	jwtSourceType            string
	keystoreSourceType       string
	keystorePath             string
	keystoreMnemonicSource   string
	keystoreMnemonic         string
	keystoreMnemonicPath     string
	keystorePassphraseSource string
	keystorePassphrasePath   string
	keystorePassphrase       string
	withdrawalAddress        string
	numberOfValidators       int64
	existingValidators       int64
	installDependencies      bool
}

func CliCmd(p ui.Prompter, actions actions.SedgeActions) *cobra.Command {
	o := new(CliCmdOptions)
	cmd := &cobra.Command{
		Use:   "cli",
		Short: "generate a node setup interactively",
		Long: `
This command will guide you through the process of setting up one of these node types:

- Full Node (execution + consensus + validator)
- Full Node without Validator (execution + consensus)
- Execution Node
- Consensus Node
- Validator Node

Follow the prompts to select the options you want for your node. At the end of the process, you will
be asked to run the generated setup or not. If you chose to run the setup, it will be executed for you
using docker compose command behind the scenes.
`,
		RunE: func(cmd *cobra.Command, args []string) error {
			if err := selectNetwork(p, o); err != nil {
				return err
			}
			if err := selectNodeType(p, o); err != nil {
				return err
			}
			if err := inputGenerationPath(p, o); err != nil {
				return err
			}
			switch o.nodeType {
			case NodeTypeFullNode:
				return setupFullNode(p, o, actions)
			case NodeTypeExecution:
				return setupExecutionNode(p, o, actions)
			case NodeTypeConsensus:
				return setupConsensusNode(p, o, actions)
			case NodeTypeValidator:
				return setupValidatorNode(p, o, actions)
			}
			return nil
		},
	}
	return cmd
}

func setupFullNode(p ui.Prompter, o *CliCmdOptions, a actions.SedgeActions) error {
	o.genData.Services = []string{"execution", "consensus"}
	if err := confirmWithValidator(p, o); err != nil {
		return err
	}
	if o.genData.Network == NetworkCustom {
		if err := runPromptActions(p, o,
			inputCustomNetworkConfig,
			inputCustomChainSpec,
			inputCustomGenesis,
			inputCustomTTD,
			inputCustomDeployBlock,
			inputExecutionBootNodes,
			inputConsensusBootNodes,
		); err != nil {
			return err
		}
	}
	if o.withValidator {
		o.genData.Services = append(o.genData.Services, "validator")
		if configs.SupportsMEVBoost(o.genData.Network) {
			if err := runPromptActions(p, o,
				inputMevImage,
				inputRelayURL,
			); err != nil {
				return err
			}
		}
		if err := runPromptActions(p, o,
			selectExecutionClient,
			selectConsensusClient,
			selectValidatorClient,
			inputValidatorGracePeriod,
			inputGraffiti,
			inputCheckpointSyncURL,
			inputFeeRecipient,
		); err != nil {
			return err
		}
	} else {
		if err := runPromptActions(p, o,
			selectExecutionClient,
			selectConsensusClient,
			inputCheckpointSyncURL,
			inputFeeRecipient,
		); err != nil {
			return err
		}
	}
	if err := confirmExposeAllPorts(p, o); err != nil {
		return err
	}
	if err := setupJWT(p, o, false); err != nil {
		return err
	}
	// Set constant values
	o.genData.Mev = true
	// Call generate action
	if err := a.Generate(actions.GenerateOptions{
		GenerationData: o.genData,
		GenerationPath: o.generationPath,
	}); err != nil {
		return err
	}
	return postGenerate(p, o, a)
}

func setupExecutionNode(p ui.Prompter, o *CliCmdOptions, a actions.SedgeActions) error {
	o.genData.Services = []string{"execution"}
	if err := selectExecutionClient(p, o); err != nil {
		return err
	}
	if o.genData.Network == NetworkCustom {
		if err := runPromptActions(p, o,
			inputCustomChainSpec,
			inputCustomTTD,
			inputExecutionBootNodes,
		); err != nil {
			return err
		}
	}
	if err := confirmExposeAllPorts(p, o); err != nil {
		return err
	}
	if err := setupJWT(p, o, true); err != nil {
		return err
	}
	if err := a.Generate(actions.GenerateOptions{
		GenerationData: o.genData,
		GenerationPath: o.generationPath,
	}); err != nil {
		return err
	}
	return postGenerate(p, o, a)
}

func setupConsensusNode(p ui.Prompter, o *CliCmdOptions, a actions.SedgeActions) error {
	o.genData.Services = []string{"consensus"}
	if err := selectConsensusClient(p, o); err != nil {
		return err
	}
	if o.genData.Network == NetworkCustom {
		if err := runPromptActions(p, o,
			inputCustomNetworkConfig,
			inputCustomGenesis,
			inputCustomDeployBlock,
			inputConsensusBootNodes,
		); err != nil {
			return err
		}
	} else {
		if err := inputCheckpointSyncURL(p, o); err != nil {
			return err
		}
		if configs.SupportsMEVBoost(o.genData.Network) {
			if err := inputMevBoostEndpoint(p, o); err != nil {
				return err
			}
		}
	}
	if err := runPromptActions(p, o,
		inputExecutionAPIUrl,
		inputExecutionAuthUrl,
		inputFeeRecipient,
		confirmExposeAllPorts,
	); err != nil {
		return err
	}
	if err := setupJWT(p, o, true); err != nil {
		return err
	}
	if err := a.Generate(actions.GenerateOptions{
		GenerationData: o.genData,
		GenerationPath: o.generationPath,
	}); err != nil {
		return err
	}
	return postGenerate(p, o, a)
}

func setupValidatorNode(p ui.Prompter, o *CliCmdOptions, a actions.SedgeActions) error {
	o.genData.Services = []string{"validator"}
	if err := selectValidatorClient(p, o); err != nil {
		return err
	}
	if o.genData.Network == NetworkCustom {
		if err := runPromptActions(p, o,
			inputCustomNetworkConfig,
			inputCustomGenesis,
			inputCustomDeployBlock,
		); err != nil {
			return err
		}
	}
	if err := runPromptActions(p, o,
		inputConsensusAPIUrl,
		inputGraffiti,
		inputValidatorGracePeriod,
		inputFeeRecipient,
		confirmEnableMEVBoost,
	); err != nil {
		return err
	}
	if err := a.Generate(actions.GenerateOptions{
		GenerationData: o.genData,
		GenerationPath: o.generationPath,
	}); err != nil {
		return err
	}
	return postGenerate(p, o, a)
}

func setupJWT(p ui.Prompter, o *CliCmdOptions, skip bool) error {
	if skip {
		if err := selectJWTSourceOrSkip(p, o); err != nil {
			return err
		}
	} else {
		if err := selectJWTSource(p, o); err != nil {
			return err
		}
	}
	switch o.jwtSourceType {
	case SourceTypeCreate:
		jwtPath, err := generateJWTSecret("")
		o.genData.JWTSecretPath = jwtPath
		if err != nil {
			return err
		}
	case SourceTypeExisting:
		if err := inputJWTPath(p, o); err != nil {
			return err
		}
	case SourceTypeSkip:
		break
	default:
		return fmt.Errorf("unknown JWT source type %s", o.jwtSourceType)
	}
	return nil
}

func postGenerate(p ui.Prompter, o *CliCmdOptions, a actions.SedgeActions) error {
	if o.withValidator || o.nodeType == NodeTypeValidator {
		if err := generateKeystore(p, o, a); err != nil {
			return err
		}
	}
	pendingDependencies := utils.CheckDependencies([]string{"docker"})
	if len(pendingDependencies) > 0 {
		supported, unsupported := utils.DependenciesSupported(pendingDependencies)
		if len(unsupported) > 0 {
			log.Warnf("unsupported install dependencies %s", strings.Join(unsupported, " "))
			return nil
		}
		if err := confirmInstallDependencies(p, o); err != nil {
			return err
		}
		if !o.installDependencies {
			for _, s := range supported {
				if err := utils.ShowInstructions(a.GetCommandRunner(), s); err != nil {
					return err
				}
			}
			return nil
		}
		for _, s := range supported {
			if err := utils.InstallDependency(a.GetCommandRunner(), s); err != nil {
				return err
			}
		}
	}
	var services []string
	switch o.nodeType {
	case NodeTypeFullNode:
		services = []string{"execution", "consensus"}
		if o.withValidator {
			services = append(services, "validator")
		}
	case NodeTypeExecution:
		services = []string{"execution"}
	case NodeTypeConsensus:
		services = []string{"consensus"}
	case NodeTypeValidator:
		services = []string{"validator"}
	}
	run, err := p.Confirm("Run services now?", false)
	if err != nil {
		return err
	}
	if run {
		if err := a.SetupContainers(actions.SetupContainersOptions{
			GenerationPath: o.generationPath,
			Services:       services,
		}); err != nil {
			return err
		}
		if err := a.RunContainers(actions.RunContainersOptions{
			GenerationPath: o.generationPath,
			Services:       services,
		}); err != nil {
			return err
		}
		// TODO: Final tips
		log.Error("show final tips")
	}
	return nil
}

func generateKeystore(p ui.Prompter, o *CliCmdOptions, a actions.SedgeActions) error {
	if err := selectKeystoreSource(p, o); err != nil {
		return err
	}
	switch o.keystoreSourceType {
	case SourceTypeSkip:
		return nil
	case SourceTypeCreate:
		// Get the mnemonic
		if err := selectKeystoreMnemonicSource(p, o); err != nil {
			return err
		}
		switch o.keystoreMnemonicSource {
		case SourceTypeCreate:
			candidate, err := keystores.CreateMnemonic()
			if err != nil {
				return err
			}
			if err := saveMnemonic(a.GetCommandRunner(), candidate); err != nil {
				return err
			}
			o.keystoreMnemonic = candidate
		case SourceTypeExisting:
			if err := inputKeystoreMnemonicPath(p, o); err != nil {
				return err
			}
			if mnemonic, err := readFileContent(o.keystoreMnemonicPath); err != nil {
				return err
			} else {
				o.keystoreMnemonic = mnemonic
			}
		}
		// Get the passphrase
		if err := selectKeystorePassphraseSource(p, o); err != nil {
			return err
		}
		switch o.keystorePassphraseSource {
		case SourceTypeExisting:
			if err := inputKeystorePassphrasePath(p, o); err != nil {
				return err
			}
			if passphrase, err := readFileContent(o.keystorePassphrasePath); err != nil {
				return err
			} else {
				o.keystorePassphrase = passphrase
			}
		case SourceTypeCreate:
			if err := inputKeystorePassphrase(p, o); err != nil {
				return err
			}
		}
		if err := runPromptActions(p, o,
			inputWithdrawalAddress,
			inputNumberOfValidators,
			inputNumberOfExistingValidators,
		); err != nil {
			return err
		}
		o.keystorePath = filepath.Join(o.generationPath, "keystore")
		if err := keystores.CreateKeystores(keystores.ValidatorKeysGenData{
			Mnemonic:    o.keystoreMnemonic,
			Passphrase:  o.keystorePassphrase,
			OutputPath:  o.keystorePath,
			MinIndex:    uint64(o.existingValidators),
			MaxIndex:    uint64(o.existingValidators) + uint64(o.numberOfValidators),
			NetworkName: o.genData.Network,
			ForkVersion: configs.NetworksConfigs()[o.genData.Network].GenesisForkVersion,
			// Constants
			UseUniquePassphrase: true,
			Insecure:            false,
			AmountGwei:          uint64(eth2.Mainnet.MAX_EFFECTIVE_BALANCE),
			AsJsonList:          true,
		}); err != nil {
			return err
		}

	case SourceTypeExisting:
		if err := inputKeystorePath(p, o); err != nil {
			return err
		}
		validationErrors := keystores.ValidateKeystoreDir(o.keystorePath)
		if len(validationErrors) > 0 {
			log.Warnf("Keystore folder %s has %d validation errors. Check the following:", o.keystorePath, len(validationErrors))
			for index, e := range validationErrors {
				log.Warnf("%d. %s", index+1, e.Error())
			}
			cont, err := p.Confirm("Do you want to continue regardless the keystore folder validation warnings?", false)
			if err != nil {
				return err
			} else if !cont {
				return ErrCancelled
			}
		} else {
			log.Infof("Keystore folder %s is valid", o.keystorePath)
		}
	}
	log.Info("Importing validator keys into the validator client...")
	err := a.SetupContainers(actions.SetupContainersOptions{
		GenerationPath: o.generationPath,
		Services:       []string{validator},
	})
	if err != nil {
		return err
	}
	err = a.ImportValidatorKeys(actions.ImportValidatorKeysOptions{
		ValidatorClient: o.genData.ValidatorClient.Name,
		Network:         o.genData.Network,
		GenerationPath:  o.generationPath,
		From:            o.keystorePath,
		CustomConfig: actions.ImportValidatorKeysCustomOptions{
			NetworkConfigPath: o.genData.CustomNetworkConfigPath,
			GenesisPath:       o.genData.CustomGenesisPath,
			DeployBlockPath:   o.genData.CustomDeployBlockPath,
		},
	})
	if err != nil {
		return err
	}
	log.Info("Validator keys imported successfully")
	if err := confirmImportSlashingProtection(p, o); err != nil {
		return err
	}
	if o.importSlashingProtection {
		if err := inputImportSlashingProtectionFrom(p, o); err != nil {
			return err
		}
		err := a.ImportSlashingInterchangeData(actions.SlashingImportOptions{
			ValidatorClient: o.genData.ValidatorClient.Name,
			Network:         o.genData.Network,
			GenerationPath:  o.generationPath,
			From:            o.slashingProtectionFrom,
		})
		if err != nil {
			return err
		}
	}
	return nil
}

type promptAction func(ui.Prompter, *CliCmdOptions) error

func runPromptActions(p ui.Prompter, o *CliCmdOptions, actions ...promptAction) error {
	for _, action := range actions {
		if err := action(p, o); err != nil {
			return err
		}
	}
	return nil
}

func selectNetwork(p ui.Prompter, o *CliCmdOptions) error {
	options := []string{NetworkMainnet, NetworkGoerli, NetworkSepolia, NetworkGnosis, NetworkChiado, NetworkCustom}
	index, err := p.Select("Select network", "", options)
	if err != nil {
		return err
	}
	o.genData.Network = options[index]
	return nil
}

func selectNodeType(p ui.Prompter, o *CliCmdOptions) error {
	options := []string{NodeTypeFullNode, NodeTypeExecution, NodeTypeConsensus, NodeTypeValidator}
	index, err := p.Select("Select node type", "", options)
	if err != nil {
		return err
	}
	o.nodeType = options[index]
	return nil
}

func selectExecutionClient(p ui.Prompter, o *CliCmdOptions) (err error) {
	c := clients.ClientInfo{Network: o.genData.Network}
	supportedClients, err := c.SupportedClients(execution)
	if err != nil {
		return err
	}
	options := append(supportedClients, Randomize)
	index, err := p.Select("Select execution client", "", options)
	if err != nil {
		return err
	}
	selectedExecutionClient := options[index]
	// In case random is selected, select a random client
	if selectedExecutionClient == Randomize {
		randomName, err := clients.RandomClientName(supportedClients)
		if err != nil {
			return err
		}
		selectedExecutionClient = randomName
		log.Info("Random execution client selected: ", selectedExecutionClient)
	}
	o.genData.ExecutionClient = &clients.Client{
		Name: selectedExecutionClient,
		Type: "execution",
	}
	o.genData.ExecutionClient.SetImageOrDefault("")
	// Patch Geth image if network needs TTD to be set
	if o.genData.ExecutionClient.Name == "geth" && o.genData.Network == NetworkMainnet {
		o.genData.ExecutionClient.Image = "ethereum/client-go:v1.10.26"
	}
	// Patch Erigon image if network needs TTD to be set
	if o.genData.ExecutionClient.Name == "erigon" && o.genData.Network != "mainnet" {
		o.genData.ExecutionClient.Image = "thorax/erigon:v2.29.0"
	}
	return nil
}

func selectConsensusClient(p ui.Prompter, o *CliCmdOptions) (err error) {
	c := clients.ClientInfo{Network: o.genData.Network}
	supportedClients, err := c.SupportedClients(consensus)
	if err != nil {
		return err
	}
	options := append(supportedClients, Randomize)
	index, err := p.Select("Select consensus client", "", options)
	if err != nil {
		return err
	}
	selectedConsensusClient := options[index]
	// In case random is selected, select a random client
	if selectedConsensusClient == Randomize {
		randomName, err := clients.RandomClientName(supportedClients)
		if err != nil {
			return err
		}
		selectedConsensusClient = randomName
		log.Info("Random consensus client selected: ", selectedConsensusClient)
	}
	o.genData.ConsensusClient = &clients.Client{
		Name: selectedConsensusClient,
		Type: "consensus",
	}
	o.genData.ConsensusClient.SetImageOrDefault("")
	return nil
}

func selectValidatorClient(p ui.Prompter, o *CliCmdOptions) (err error) {
	c := clients.ClientInfo{Network: o.genData.Network}
	supportedClients, err := c.SupportedClients(validator)
	if err != nil {
		return err
	}
	options := append(supportedClients, Randomize)
	index, err := p.Select("Select validator client", "", options)
	if err != nil {
		return err
	}
	selectedValidatorClient := options[index]
	// In case random is selected, select a random client
	if selectedValidatorClient == Randomize {
		randomName, err := clients.RandomClientName(supportedClients)
		if err != nil {
			return err
		}
		selectedValidatorClient = randomName
		log.Info("Random validator client selected: ", selectedValidatorClient)
	}
	o.genData.ValidatorClient = &clients.Client{
		Name: selectedValidatorClient,
		Type: "validator",
	}
	o.genData.ValidatorClient.SetImageOrDefault("")
	return nil
}

func selectJWTSource(p ui.Prompter, o *CliCmdOptions) error {
	options := []string{SourceTypeCreate, SourceTypeExisting}
	index, err := p.Select("Select JWT source", "", options)
	if err != nil {
		return err
	}
	o.jwtSourceType = options[index]
	return nil
}

func selectJWTSourceOrSkip(p ui.Prompter, o *CliCmdOptions) error {
	options := []string{SourceTypeCreate, SourceTypeExisting, SourceTypeSkip}
	index, err := p.Select("Select JWT source", "", options)
	if err != nil {
		return err
	}
	o.jwtSourceType = options[index]
	return nil
}

func selectKeystoreSource(p ui.Prompter, o *CliCmdOptions) error {
	options := []string{SourceTypeCreate, SourceTypeExisting, SourceTypeSkip}
	index, err := p.Select("Select keystore source", "", options)
	if err != nil {
		return err
	}
	o.keystoreSourceType = options[index]
	return nil
}

func selectKeystoreMnemonicSource(p ui.Prompter, o *CliCmdOptions) error {
	options := []string{SourceTypeCreate, SourceTypeExisting}
	index, err := p.Select("Select mnemonic source", "", options)
	if err != nil {
		return err
	}
	o.keystoreMnemonicSource = options[index]
	return nil
}

func selectKeystorePassphraseSource(p ui.Prompter, o *CliCmdOptions) error {
	options := []string{SourceTypeRandom, SourceTypeExisting, SourceTypeCreate}
	index, err := p.Select("Select passphrase source", "", options)
	if err != nil {
		return err
	}
	o.keystorePassphraseSource = options[index]
	return nil
}

func confirmWithValidator(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.withValidator, err = p.Confirm("Do you want to set up a validator?", false)
	return
}

func confirmExposeAllPorts(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.genData.MapAllPorts, err = p.Confirm("Do you want to expose all ports?", false)
	return
}

func confirmImportSlashingProtection(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.importSlashingProtection, err = p.Confirm("Do you want to import slashing protection data?", false)
	return
}

func confirmInstallDependencies(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.installDependencies, err = p.Confirm("Install dependencies?", false)
	return
}

func confirmEnableMEVBoost(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.genData.MevBoostOnValidator, err = p.Confirm("Enable MEV Boost?", false)
	return
}

func inputCustomNetworkConfig(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.genData.CustomNetworkConfigPath, err = p.InputFilePath("Custom network config file path", "", true, ".yml", ".yaml")
	return
}

func inputCustomChainSpec(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.genData.CustomChainSpecPath, err = p.InputFilePath("File path or url to use as custom network chainSpec for execution client", "", true)
	return
}

func inputCustomGenesis(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.genData.CustomGenesisPath, err = p.InputFilePath("File path or URL to use as custom network genesis for consensus client", "", true)
	return
}

func inputCustomTTD(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.genData.CustomTTD, err = p.Input("Custom TTD (Terminal Total Difficulty)", "", false)
	return
}

func inputCustomDeployBlock(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.genData.CustomDeployBlock, err = p.Input("Custom deploy block", "", false)
	return
}

func inputExecutionBootNodes(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.genData.ECBootnodes, err = p.InputList("Execution boot nodes", []string{}, utils.ENodesValidator)
	return
}

func inputConsensusBootNodes(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.genData.CCBootnodes, err = p.InputList("Consensus boot nodes", []string{}, utils.ENRValidator)
	return
}

func inputMevImage(p ui.Prompter, o *CliCmdOptions) (err error) {
	// Default value is set in the template
	o.genData.MevImage, err = p.Input("Mev-Boost image", "flashbots/mev-boost:latest", false)
	return
}

func inputMevBoostEndpoint(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.genData.MevBoostEndpoint, err = p.Input("Mev-Boost endpoint", "", false)
	return
}

func inputRelayURL(p ui.Prompter, o *CliCmdOptions) (err error) {
	var defaultValue []string
	switch o.genData.Network {
	case NetworkMainnet:
		defaultValue = configs.MainnetRelayURLs()
	case NetworkGoerli:
		defaultValue = configs.GoerliRelayURLs()
	case NetworkSepolia:
		defaultValue = configs.SepoliaRelayURLs()
	}
	relayURLs, err := p.InputList("Relay URLs", defaultValue, func(list []string) error {
		badUri, ok := utils.UriValidator(list)
		if !ok {
			return fmt.Errorf(configs.InvalidUrlFlagError, "relay", badUri)
		}
		return nil
	})
	o.genData.RelayURLs = relayURLs
	return
}

func inputGraffiti(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.genData.Graffiti, err = p.Input("Graffiti to by used by the validator (press enter to skip it)", "", false)
	return
}

func inputCheckpointSyncURL(p ui.Prompter, o *CliCmdOptions) (err error) {
	// Default value is set in the template
	o.genData.CheckpointSyncUrl, err = p.Input("Checkpoint sync URL", "", false)
	return
}

func inputFeeRecipient(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.genData.FeeRecipient, err = p.EthAddress("Please enter the Fee Recipient address.", "", true)
	return
}

func inputValidatorGracePeriod(p ui.Prompter, o *CliCmdOptions) (err error) {
	epochs, err := p.InputInt64("Validator grace period. This is the number of epochs the validator will wait for security reasons before starting", 1)
	if err != nil {
		return err
	}
	o.genData.VLStartGracePeriod = uint((configs.NetworkEpochTime(o.genData.Network) * time.Duration(epochs)).Seconds())
	return nil
}

func inputGenerationPath(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.generationPath, err = p.Input("Generation path", configs.DefaultAbsSedgeDataPath, false)
	if o.generationPath == "" {
		o.generationPath = configs.DefaultAbsSedgeDataPath
	}
	return
}

func inputJWTPath(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.genData.JWTSecretPath, err = p.InputFilePath("JWT path", "", true)
	return
}

func inputKeystoreMnemonicPath(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.keystoreMnemonicPath, err = p.InputFilePath("Mnemonic path", "", true)
	return
}

func inputKeystorePassphrasePath(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.keystorePassphrasePath, err = p.InputFilePath("Passphrase path", "", true)
	return
}

func inputKeystorePassphrase(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.keystorePassphrase, err = p.InputSecret("Enter keystore passphrase (min 8 characters):")
	return
}

func inputWithdrawalAddress(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.withdrawalAddress, err = p.Input("Withdrawal address", "", false)
	return
}

func inputNumberOfValidators(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.numberOfValidators, err = p.InputInt64("Number of validators", 1)
	return
}

func inputNumberOfExistingValidators(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.existingValidators, err = p.InputInt64("Existing validators. This number will be used as the initial index for the generated keystores.", 0)
	return
}

func inputKeystorePath(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.keystorePath, err = p.Input("Keystore path", "", true)
	return
}

func inputImportSlashingProtectionFrom(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.slashingProtectionFrom, err = p.InputFilePath("Interchange slashing protection file", "", true)
	return
}

func inputExecutionAPIUrl(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.genData.ExecutionApiUrl, err = p.Input("Execution API URL", "", false)
	return
}

func inputExecutionAuthUrl(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.genData.ExecutionAuthUrl, err = p.Input("Execution Auth API URL", "", false)
	return
}

func inputConsensusAPIUrl(p ui.Prompter, o *CliCmdOptions) (err error) {
	o.genData.ConsensusApiUrl, err = p.InputURL("Consensus API URL", "", false)
	return
}
