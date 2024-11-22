// Add these details from the keystore file for the respective accounts
const keythereum = require('keythereum');

const keystore = {
  "address": "7d441d18b79898449be8b05d1077308bc563669c",
  "crypto": {
    "cipher": "aes-128-ctr",
    "ciphertext": "caaafe9edc40fcd39b7c4cd0b5652b0f4d74a9e633866c6891f7ddbe70462d8d",
    "cipherparams": {
      "iv": "fb81dd87df6a843755095dd8bc9aacb3" // Initialisation Vector (IV) used for the cipher
    },
    "kdf": "scrypt", // The Key Derivation Function (KDF) used to derive the encryption key from the password
    "kdfparams": {
      "dklen": 32, // Key length derived from the KDF
      "n": 262144, // KDF cost parameter
      "p": 1, // KDF parallelisation parameter
      "r": 8, // KDF block size parameter
      "salt": "6366027755683cd5abb63d99f5f438151001a0c7ad0a612a2d9e9853cea3c936" // Random salt used for the KDF
    },
    "mac": "fab50ee501c7e3f7120529e3d9aa4ed6f183a0ed13cdcc2af6e8767b3c089f7d" // Message Authentication Code (MAC) to verify the integrity of the data
  },
  "id": "4d47ce44-6551-4b9d-b30a-49a956de6638", // Unique identifier for the keystore
  "version": 3 // Keystore version
};

// Password used to unlock the keystore and decrypt the private key
const password = "1"; // replace with the password for the keystore

// This recovers the private key from the keystore using the password
const privateKey = keythereum.recover(password, keystore);
console.log("Private Key:", privateKey.toString("hex")); // Displays the decrypted private key
