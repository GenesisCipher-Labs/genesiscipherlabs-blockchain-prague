# Shanghai Blockchain

## Create a new account
geth account new --datadir account1

## Switch Between Kubernetes Environments
kubectl config get-contexts

## Create ConfigMaps:
1. kubectl create configmap execution-genesis --from-file=genesis.json=genesis.json -n default --dry-run=client -o yaml | kubectl apply -f -
2. kubectl create configmap consensus-config --from-file=config.yml=config.yml -n default --dry-run=client -o yaml | kubectl apply -f -
3. kubectl create configmap geth-keystore --from-file=UTC--2024-08-18T06-48-35.810191000Z--7d441d18b79898449be8b05d1077308bc563669c=UTC--2024-08-18T06-48-35.810191000Z--7d441d18b79898449be8b05d1077308bc563669c -n default --dry-run=client -o yaml | kubectl apply -f -
4. kubectl create configmap geth-password --from-file=geth_password.txt=geth_password.txt -n default --dry-run=client -o yaml | kubectl apply -f -
5. kubectl create configmap shanghai-deposit-contract --from-file=DepositContract.sol=DepositContract.sol -n default --dry-run=client -o yaml | kubectl apply -f -

## Delete a ConfigMap
1. kubectl delete configmap execution-genesis -n default
2. kubectl delete configmap consensus-config -n default
3. kubectl delete configmap geth-keystore -n default
4. kubectl delete configmap geth-password -n default
5. kubectl delete configmap shanghai-deposit-contract -n default

## Describe a ConfigMap
kubectl describe configmap consensus-config -n default

## Install Chart
helm install genesiscipherlabs-shanghai-blockchain charts/blockchain-private-network-shanghai

## Uninstall Chart
helm uninstall genesiscipherlabs-shanghai-blockchain

## Get Pods
kubectl get pods

## Get Node Info:
kubectl describe node node-pool-1-b1x4t

## Get Logs
1. kubectl logs blockchain-shanghai-69f754d8c4-r4tc6 -c create-beacon-chain-genesis -n default
2. kubectl logs blockchain-shanghai-69f754d8c4-r4tc6 -c geth-remove-db -n default
3. kubectl logs blockchain-shanghai-69f754d8c4-r4tc6 -c geth-genesis -n default

## Describe a Pod
kubectl describe pod blockchain-shanghai-69f754d8c4-r4tc6 -n default

## Get BeaconChain Logs
kubectl logs blockchain-shanghai-69f754d8c4-r4tc6 -c beacon-chain -n default

## Get Geth Logs
kubectl logs blockchain-shanghai-69f754d8c4-r4tc6 -c geth -n default

## Get Validator Logs
kubectl logs blockchain-shanghai-69f754d8c4-r4tc6 -c validator -n default

## Check the External IP of the LoadBalancer:
kubectl get svc

## Check the Connection:
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' http://174.138.120.108:8545
## Grafana Token
glc_eyJvIjoiMTIyNTg0MCIsIm4iOiJzdGFjay0xMDQxOTA1LWludGVncmF0aW9uLWs4cy10b2tlbi1rOHMtdG9rZW4iLCJrIjoiNGpQVjUyVjI4WDNnQXN2RnM0SUQzZjUzIiwibSI6eyJyIjoicHJvZC1hcC1zb3V0aC0xIn19
