const fs = require("fs");
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

const key = generateKeyPair();

const publicKey = key.publicKey

const privateKey = key.privateKey

console.log("Private Key: " + privateKey.toString())

function encryptPublic(key, data) {
    return crypto.publicEncrypt(
        {
            key:key,
            padding: crypto.constants.RSA_PKCS1_PADDING,
            oaepHash: "sha256"
        },
        Buffer.from(data)
    ).toString()
}
