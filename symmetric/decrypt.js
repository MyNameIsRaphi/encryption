// import libaries
const Crypto = require("crypto-js");
const prompt = require("prompt-sync")();
const fs = require("fs");


console.log("Enter your file path");
// get file path
const path = prompt()

// read file data
var data
try {
    data = fs.readFileSync(path)
} catch (err) {
    console.log("Error: ", err);
    process.exit();
}

// get Key
console.log("Enter your key");
const key = prompt();

// decrypt data
const decryptedData = Crypto.AES.decrypt(data, key).toString(Crypto.enc.Utf8)

// write data to file

try {
    fs.writeFileSync(path, decryptedData)
} catch (err) {
    console.log("Error: ", err)
    process.exit()
}
