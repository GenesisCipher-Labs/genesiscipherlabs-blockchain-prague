# Blockchain Private Network - Prague

## Note
We plan to keep this repository up to date with the Ethereum protocol-thus maintaining a mainnet‐fork environment to test DApps and protocols.

## Overview

This project sets up a private blockchain network for the Prague environment using Kubernetes and Helm. It leverages Ethereum's Geth client along with Prysm's beacon chain, validator, and genesis generation tools to create a blockchain network that is easy to deploy, manage, and troubleshoot in a containerized environment.

## Architecture

The deployment is managed via a Helm chart and consists of several key components:

- **Genesis Initialization:**
  - **`create-beacon-chain-genesis` container:** Uses Prysm's CLI tool (`prysmctl`) to generate the genesis state.

- **Geth Initialization:**
  - **`geth-remove-db` container:** Removes any pre-existing Geth database to ensure a clean state.
  - **`geth-genesis` container:** Initializes Geth using the generated genesis file.

- **Execution & Consensus Layers:**
  - **`geth` container:** Runs the Ethereum client for executing transactions.
  - **`beacon-chain` container:** Runs Prysm's beacon chain, responsible for consensus and network synchronization.
  - **`validator` container:** Runs the Prysm validator to participate in block validation.

Configuration is managed via Kubernetes ConfigMaps that store critical files such as the genesis state, chain configuration, keystore, and password files.

## Prerequisites

- A Kubernetes cluster (local or remote)
- Helm installed
- kubectl installed and configured
- Docker or another container runtime
- Basic understanding of Ethereum and blockchain concepts

## Setup and Deployment

1. **Create and Configure ConfigMaps**
   - Navigate to the `configmaps` directory and run the commands to create ConfigMaps for the genesis file, chain configuration, keystore, geth password, and deposit contract. 

2. **Deploy the Blockchain Network**
   - Install the Helm chart:
     ```bash
     helm install genesiscipherlabs-prague-blockchain charts/blockchain-private-network-prague
     ```
   - Monitor the deployment with:
     ```bash
     kubectl get pods
     ```

3. **Troubleshooting and Logs**
   - To debug issues, use commands such as:
     ```bash
     kubectl describe pod <pod-name>
     kubectl logs <pod-name> -c <container-name>
     ```

4. **Interacting with the Network**
   - Create new Ethereum accounts using Geth.
   - Switch between Kubernetes contexts as needed.
   - Use the provided endpoints and services to interact with the network.

## Project Structure

- **charts/**: Contains the Helm chart for deploying the blockchain network.
- **configmaps/**: Contains configuration files and keys needed for initialization.
- **README.md**: This documentation file.
- **Other Files**: Utility scripts (e.g., for key decryption) and source code supporting the setup.

---

## Cheats

### Create a New Account
- `geth account new --datadir account1`

### Switch Between Kubernetes Environments
- `kubectl config get-contexts`

### Create ConfigMaps:
- `cd configmaps && kubectl create configmap execution-genesis --from-file=genesis.json=genesis.json -n default --dry-run=client -o yaml | kubectl apply -f - && cd ..`
- `cd configmaps && kubectl create configmap consensus-config --from-file=config.yml=config.yml -n default --dry-run=client -o yaml | kubectl apply -f - && cd ..`
- `cd configmaps && kubectl create configmap shanghai-deposit-contract --from-file=DepositContract.sol=DepositContract.sol -n default --dry-run=client -o yaml | kubectl apply -f - && cd ..`

# Create Secrets:
```
cd secrets && kubectl create secret generic geth-password \
  --from-file=geth_password.txt=geth_password.txt  && cd ..
```
```
cd secrets && kubectl create secret generic geth-keystore \
  --from-file=UTC--2024-08-18T06-48-35.810191000Z--7d441d18b79898449be8b05d1077308bc563669c=UTC--2024-08-18T06-48-35.810191000Z--7d441d18b79898449be8b05d1077308bc563669c && cd ..
```

### Delete a ConfigMap
- `kubectl delete configmap execution-genesis -n default`
- `kubectl delete configmap consensus-config -n default`
- `kubectl delete configmap shanghai-deposit-contract -n default`

### Delete a Secret
- `kubectl delete secret geth-password`
- `kubectl delete secret geth-keystore`

### Describe a ConfigMap
- `kubectl describe configmap consensus-config -n default`

### Use Linter
- `helm lint charts/blockchain-private-network-prague`

### Install Chart
- `helm install genesiscipherlabs-prague-blockchain charts/blockchain-private-network-prague`

### Watch the rollout
- `kubectl rollout status deployment/blockchain-prague --namespace default`

### Uninstall Chart
- `helm uninstall genesiscipherlabs-prague-blockchain`

### Get Pods
- `kubectl get pods`

### Get Node Info
- `kubectl describe node pool-paid-215di`

### Get Logs
- `kubectl logs blockchain-prague-6bb7dcddbf-7vszb -c create-beacon-chain-genesis -n default`
- `kubectl logs blockchain-prague-6bb7dcddbf-7vszb -c geth-genesis -n default`

### Describe a Pod
- `kubectl describe pod blockchain-prague-6bb7dcddbf-7vszb -n default`

### Get BeaconChain Logs
- `kubectl logs blockchain-prague-6bb7dcddbf-7vszb -c beacon-chain -n default`

### Get Geth Logs
- `kubectl logs blockchain-prague-6bb7dcddbf-7vszb -c geth -n default`

### Get Validator Logs
- `kubectl logs blockchain-prague-6bb7dcddbf-7vszb -c validator -n default`

### Check the External IP of the LoadBalancer
- `kubectl get svc`

### Check the Connection
- `curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' http://174.138.121.228:8545`
