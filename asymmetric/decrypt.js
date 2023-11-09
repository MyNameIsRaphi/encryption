const {writeFile, readFile} = require("./encrypt.js")
const crypto = require("crypto")
const prompt = require("prompt-sync")()

// functions for decryption

async function decryptPrivate(key, data){
    return await crypto.privateDecrypt(
        {
            key:key,
            padding:crypto.constants.RSA_PKCS1_OAEP_PADDING
        },
        data
    )
}


// Get path to be decrypted
console.log("Enter the path for the file to be decrypted")

const filePath = prompt()

// read file with encrypted data

const encryptedData = readFile(filePath)

// Get path for private key file
console.log("Enter the path for the private key file")

const privateKeyFilePath = prompt();

// read private key file
const privateKey = readFile(privateKeyFilePath)

// decrypt data

decryptPrivate(privateKey, encryptedData).then(
    (data) => {
        writeFile(filePath, data)
    }
).catch(
    (err) => {
        console.log("Error while decrypting data\nError: " + err)
    }
) 
