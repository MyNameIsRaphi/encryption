const NodeRSA = require("node-rsa")
const func = require("../asymmetric/functions")
const prompt = require("prompt-sync")()

// Ask for file path of signature and file
console.log("Enter file path for file that was signed")
const filePath = prompt() 

console.log("Enter file path of signature")
const signatureFilePath = prompt()

// ask for file path for public key

console.log("Enter file path of public key file")

const publicKeyFile = prompt()

// read signature, public key and file

const publicKey = func.readFile(publicKeyFile)
const signature = func.readFile(signatureFilePath)
const data = func.readFile(filePath)

// hash file
// decrypt signature with public key
const key = new NodeRSA()
key.importKey(publicKey, "public")
const isValid = key.verify(data, signature,"utf8", "base64")


console.log("Is valid: " + isValid)