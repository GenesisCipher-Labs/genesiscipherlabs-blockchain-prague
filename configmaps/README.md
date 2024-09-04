# Note

```UTC--2024-08-18T06-48-35.810191000Z--7d441d18b79898449be8b05d1077308bc563669c```

This file not not to be used as a configmap, it is a secret. Basically, this is MQube account. When setting up a new private blockchain, there should be an MQube account which will do the validating of transactions. Same with the "geth_password.txt" file.

"geth_password.txt" file is a password of the MQube account. Note, password and private key are two different things, do not confuse them to be the same. Password is used to unlock the account, private key is used to sign transactions.

So, create an mqube account and add it as a secret. Then, add the mube account's address to the genesis file.

All the other accounts created (for example mikelear), should not be added as secrets, those files should remain with the respective persons and they should not share anything more than their account address with anyone else.
