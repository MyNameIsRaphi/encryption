const Crypto = require("crypto-js")

const prompt = require("prompt-sync")()

const fs = require("fs")

console.log("Enter the file path")

const path = prompt()

var msg

try {
     msg = fs.readFileSync(path, "utf8")
} catch (err) {
    console.log("Error: ", err)
    process.exit()
}

console.log("Enter your key")

const key = prompt()

const encryptedMSG  = Crypto.AES.encrypt(msg, key).toString()

try {
    fs.writeFileSync(path, encryptedMSG)
} catch (err) {
    console.log("Error: ",err)
    process.exit()
}