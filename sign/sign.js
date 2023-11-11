const NodeRSA = require("node-rsa") 
const func = require("../asymmetric/functions")
const prompt = require("prompt-sync")()
// Ask for private and pulic key paths
console.log("Enter the file path for the public key")
const publicKeyFile = prompt()
console.log("Enter the file path for the private key")
const privateKeyFile = prompt()
// generate private and pulblic key
const key = new NodeRSA({b:2048}) // generate 2048 bit long key
const privateKey = key.exportKey("private")
const publicKey = key.exportKey("public")
// write private and public key
func.writeFile(privateKeyFile,privateKey)
func.writeFile(publicKeyFile, publicKey)

// ask for file path to be signed
console.log("Enter the file path for the file to be signed")
const filePath = prompt()
console.log("Enter the file path for the signature")
const signatureFilePath = prompt()

// read file
const data = func.readFile(filePath)

// create hash

// encrypt hash with private key
const signature = key.sign(data, "base64")

// write file

func.writeFile(signatureFilePath, signature)