const fs = require("fs");
const prompt = require("prompt-sync")()
const { generateKey } = require("crypto");
const crypto = require("crypto")



// TODO Ask for filepath for data to be encrypted
// TODO Ask for private and public key file path

function generateKeyPair(){
    prime = generatePrime();

    return crypto.generateKeyPairSync("rsa",{
        prime: prime,
        hashAlgorithm:"sha256",
        modulusLength:3072,
        privateKeyEncoding: {
            type:"pkcs8", 
            format:"pem"
        },
        publicKeyEncoding: {
            type:"spki", // Use sunject public key info to store public key
            format:"pem"
        } 
    })
}
function checkPrime(number){

    if (number === 1){
        return false
    }else if (number > 1) {
        for (let i = 2;i < number;i++){
            if (number % i === 0){
                return false
            }
        }
        return true
    }
    return false 
}
function generatePrime(){
    const size = 4096;
    
    return crypto.generatePrimeSync(size)
}

 async function encryptPublic(key, data) {
    return await crypto.publicEncrypt(
        {
            key:key,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha256"
        },
        Buffer.from(data)
    ).toString()
}
async function writeFile(path, data) {
    fs.writeFile(path, data, (err) => {
    if (err) {
        console.error('Error writing the file:', err);
        return;
    }
    console.log('File written successfully.');
}); 
};

function readFile(path){
    return fs.readFileSync(path, {
        encoding:"utf-8"
    })
}
async function encryptPrivate(key, data) {
    return await crypto.privateEncrypt(
        {
            key:key,
            padding:crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash:"sha256"
        },
        Buffer.from(data)
    ).toString()
}


function run(){


const key = generateKeyPair();

const publicKey = key.publicKey

const privateKey = key.privateKey



console.log("Enter the file path for the private key")
const privateKeyFilePath = prompt();
console.log("Enter the file path for the public key")
const publicKeyFilePath = prompt();

writeFile(publicKeyFilePath, publicKey)

writeFile(privateKeyFilePath, privateKey)



console.log("Enter the file path for the file to be encrypted")

const filePath = prompt();


var data = readFile(filePath)

encryptPublic(publicKey, data).then(
    (encryptedData) => {

        writeFile(filePath, encryptedData)
    }
).catch(
    (err) =>  {
        console.log("Error while encryting data\nError: " + err)
    }
)
}

module.exports = {readFile, writeFile, encryptPublic, encryptPrivate}

