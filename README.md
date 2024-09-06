# Shanghai Blockchain

Create a new account
```
geth account new --datadir account1
```

Switch Between Kubernetes Environments
```
kubectl config get-contexts
```

Install Chart
```
helm install genesiscipherlabs-shanghai-blockchain charts/blockchain-private-network-shanghai
```

Get Pods
```
kubectl get pods
```

Get Node Info:
```
kubectl describe node node-pool-1-b1x4t
```

Get Logs
```
kubectl logs blockchain-shanghai-7cfd6b9658-btmcf -c create-beacon-chain-genesis -n default
```

```
kubectl logs blockchain-shanghai-7cfd6b9658-btmcf -c geth-remove-db -n default
```

```
kubectl logs blockchain-shanghai-7cfd6b9658-btmcf -c geth-genesis -n default
```

Create a ConfigMap
```
kubectl create configmap consensus-config --from-file=config.yml=config.yml -n default --dry-run=client -o yaml | kubectl apply -f -
```

Delete a ConfigMap
```
kubectl delete configmap consensus-config -n default
```

Describe a ConfigMap
```
kubectl describe configmap consensus-config -n default
```

Describe a Pod
```
kubectl describe pod blockchain-shanghai-7cfd6b9658-btmcf -n default
```

Get BeaconChain Logs
```
kubectl logs blockchain-shanghai-7cfd6b9658-btmcf -c beacon-chain -n default
```

Get Geth Logs
```
kubectl logs blockchain-shanghai-7cfd6b9658-btmcf -c geth -n default
```

Get Validator Logs
```
kubectl logs blockchain-shanghai-7cfd6b9658-btmcf -c validator -n default
```

Check the External IP of the LoadBalancer:
```
kubectl get svc
```

Check the Connection:
```
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' http://64.225.85.236:8545
```

Please also, remember to create configmaps for:
1. genesis.json file (execution-genesis)
2. config.yml file (consensus-config)
3. The keystore file (geth-keystore)
4. The keystore password (geth-password)

Create ConfigMaps:

```kubectl create configmap consensus-config --from-file=config.yml=config.yml -n default --dry-run=client -o yaml | kubectl apply -f -```

```kubectl create configmap execution-genesis --from-file=genesis.json=genesis.json -n default --dry-run=client -o yaml | kubectl apply -f -```

```kubectl create configmap geth-keystore --from-file=UTC--2024-08-18T06-48-35.810191000Z--7d441d18b79898449be8b05d1077308bc563669c=UTC--2024-08-18T06-48-35.810191000Z--7d441d18b79898449be8b05d1077308bc563669c -n default --dry-run=client -o yaml | kubectl apply -f -```

```kubectl create configmap geth-password --from-file=geth_password.txt=geth_password.txt -n default --dry-run=client -o yaml | kubectl apply -f -```

```
export KUBECONFIG=/Users/vidhanmangla/Downloads/k8s-1-30-4-do-0-blr1-1725619310681-kubeconfig.yaml
```
