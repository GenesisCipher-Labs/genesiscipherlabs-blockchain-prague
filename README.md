# Shanghai Blockchain

Note: "UTC--2024-08-18T06-48-35.810191000Z--7d441d18b79898449be8b05d1077308bc563669c" this is a secret file, it is not to be exposed. When deploying the blockchain on staging, prod cluster, create a new keystore file `geth account new --datadir account1` to replace this one and add it as a kubernetes secret. Find more details in "configmaps" folder's readme file and "mqube-blockchain-accounts" folder's readme file.


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
kubectl logs blockchain-shanghai-7d74f944fd-rps87 -c create-beacon-chain-genesis -n default
```

```
kubectl logs blockchain-shanghai-7d74f944fd-rps87 -c geth-remove-db -n default
```

```
kubectl logs blockchain-shanghai-7d74f944fd-rps87 -c geth-genesis -n default
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
kubectl describe pod blockchain-shanghai-7d74f944fd-rps87 -n default
```

Get BeaconChain Logs
```
kubectl logs blockchain-shanghai-7d74f944fd-rps87 -c beacon-chain -n default
```

Get Geth Logs
```
kubectl logs blockchain-shanghai-7d74f944fd-rps87 -c geth -n default
```

Get Validator Logs
```
kubectl logs blockchain-shanghai-7d74f944fd-rps87 -c validator -n default
```

Please also, remember to create configmaps for:
1. genesis.json file (execution-genesis)
2. config.yml file (consensus-config)
3. The keystore file (geth-keystore)
4. The keystore password (geth-password)
