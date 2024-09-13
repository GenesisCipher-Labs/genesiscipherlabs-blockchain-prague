// Add these details from the keystore file for the respective accounts
const keythereum = require('keythereum');

const keystore = {
  "address": "Ethereum account address associated with this keystore",
  "crypto": {
    "cipher": "The encryption algorithm used to secure the private key",
    "ciphertext": "The encrypted private key data",
    "cipherparams": {
      "iv": "initialisation_vector" // Initialisation Vector (IV) used for the cipher
    },
    "kdf": "scrypt", // The Key Derivation Function (KDF) used to derive the encryption key from the password
    "kdfparams": {
      "dklen": 32, // Key length derived from the KDF
      "n": 262144, // KDF cost parameter
      "p": 1, // KDF parallelisation parameter
      "r": 8, // KDF block size parameter
      "salt": "random_salt_value" // Random salt used for the KDF
    },
    "mac": "message_authentication_code" // Message Authentication Code (MAC) to verify the integrity of the data
  },
  "id": "unique_keystore_id", // Unique identifier for the keystore
  "version": 3 // Keystore version
};

// Password used to unlock the keystore and decrypt the private key
const password = "your_keystore_password"; // replace with the password for the keystore

// This recovers the private key from the keystore using the password
const privateKey = keythereum.recover(password, keystore);
console.log("Private Key:", privateKey.toString("hex")); // Displays the decrypted private key
