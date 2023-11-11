const fs = require("fs");
const crypto = require("crypto")




function generatePrime() {
    const size = 4096;

    return crypto.generatePrimeSync(size)
}


async function writeFile(path, data) {
    let options = {
        encoding:"utf-8"
    }
    fs.writeFile(path, data,options, (err) => {
        if (err) {
            console.error('Error writing the file:', err);
            return;
        }
        console.log('File written successfully.');
    });
};

function readFile(path) {
    return fs.readFileSync(path, {
        encoding: "utf-8"
    }).toString()
}


module.exports = {writeFile, readFile, generatePrime}