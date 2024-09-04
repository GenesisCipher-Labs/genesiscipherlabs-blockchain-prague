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

Get Logs
```
kubectl logs blockchain-shanghai-7cb49d5dbd-xd8tc -c create-beacon-chain-genesis -n default
```

```
kubectl logs blockchain-shanghai-7cb49d5dbd-xd8tc -c geth-remove-db -n default
```

```
kubectl logs blockchain-shanghai-7cb49d5dbd-xd8tc -c geth-genesis -n default
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
kubectl describe pod blockchain-shanghai-7cb49d5dbd-xd8tc -n default
```

Get BeaconChain Logs
```
kubectl logs blockchain-shanghai-7cb49d5dbd-xd8tc -c beacon-chain -n default
```

Get Geth Logs
```
kubectl logs blockchain-shanghai-7cb49d5dbd-xd8tc -c geth -n default
```

Get Validator Logs
```
kubectl logs blockchain-shanghai-7cb49d5dbd-xd8tc -c validator -n default
```

Check the External IP of the LoadBalancer:
```
kubectl get svc
```

Check the Connection:
```
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' http://123.456.789.101:8545
```

Please also, remember to create configmaps for:
1. genesis.json file (execution-genesis)
2. config.yml file (consensus-config)
3. The keystore file (geth-keystore)
4. The keystore password (geth-password)
