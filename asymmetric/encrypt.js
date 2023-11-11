const prompt = require("prompt-sync")();
const func = require("./functions.js")
const NodeRSA = require("node-rsa")

const key = new NodeRSA({b:2048})

let pulblicKey = key.exportKey("public")
let privateKey = key.exportKey("private")


console.log("Enter the file path for the private key")
const privateKeyFilePath = prompt();
console.log("Enter the file path for the public key")
const publicKeyFilePath = prompt();

func.writeFile(privateKeyFilePath,privateKey)

func.writeFile(publicKeyFilePath,pulblicKey)

console.log("Enter the file for the file path to be encrypted")
const filePath = prompt()

const data = func.readFile(filePath)

const encryptedData = key.encrypt(data, "base64")

func.writeFile(filePath, encryptedData)


