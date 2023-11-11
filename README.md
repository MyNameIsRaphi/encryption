# encryption
An encryption repository for a school project. 
The repository is divided into three parts:
 - Asymmetric encryption and decryption
 - Symmetric encryption and decryption
 - Digital signature 

The reason why asymmetric encryption and decryption are separated from the digital signature,
is that the asymmetric encryption is only meant to be encrypted with a public key and decrypted with a private key. 

## Usage 
### Requirements
- Node 18 or higher version installed

### Installation Guide
- Download the zip file
- Extract it into a folder of choice
- Navigate into the extracted folder and run

    npm i
### How to use

All file paths entered must be relative to the "symmetric" inside the installation folder
#### Symmetric encryption
- Navigate into the extracted folder 
- To encrypt a file run 

    node symmetric/encrypt.js
- To decrypt a file run

    node symmetric/decrypt.js

### Asymmetric encryption
- Navigate into the installation folder
- To encrypt a file run 
    
    node asymmetric/encrypt.js
- To decrypt a file run
 
    node asymmetric/decrypt.js

### Digital signature
- Navigate into the installation folder
- To sign a file run

    node sign/sign.js
- To verify a signature run

    node sign/verify.js







