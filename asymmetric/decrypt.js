const prompt = require("prompt-sync")()
const func = require("./functions.js");
const NodeRSA = require("node-rsa")
// functions for decryption




// Get path to be decrypted
console.log("Enter the path for the file to be decrypted")

const filePath = prompt()

// read file with encrypted data

const encryptedData = func.readFile(filePath)

// Get path for private key file
console.log("Enter the path for the private key file")

const privateKeyFilePath = prompt();

// read private key file
const privateKey = func.readFile(privateKeyFilePath)
// decrypt data

const key = new NodeRSA()

key.importKey(privateKey, "private")

const data = key.decrypt(encryptedData, "utf8")
// write data to file

func.writeFile(filePath, data)