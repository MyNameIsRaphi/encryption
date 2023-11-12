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
    try{ 
        return fs.readFileSync(path, {
        encoding: "utf-8"
    }).toString()
    } catch (err) {
        path = windowsPath(path)
        try {

        
        return fs.readFileSync(path,
           {
            encoding:"utf8"
           }
           ).toString()
        } catch(err){
            console.log("Error while reading file: " + err)
            process.exit()
        }
    }
}
function windowsPath(path){
    let output = ""
    for(let i = 0; i < path.length;i++){
        let letter = path[i];
        if (letter === "\\" ) {
            letter = "\\"
        }
        output += letter
    }
    return output
} 


module.exports = {writeFile, readFile, generatePrime}