//const { expect } = require("chai");
const hre = require("hardhat");
const { ethers } = require( 'ethers')



const ReadMessage = async () => {

    await hre.run("compile");
        
    helloworld4=await hre.ethers.getContractAt("helloworld4", "0xA5BC9318e38c2634295D8032186A3bEfBA38148a");

        
    //const helloworld4 = await ethers.getContractFactory("helloworld4");
    
    // The deployed contract address
    //const contract = await helloworld4.attach("0x3ed20751c43b8368436A344fe91412bDC8501d09");


    // Now you can call functions of the contract
    var helloworld4_set_output=''
    helloworld4_get_output=await helloworld4.get();    
    

    
    await console.log("[hardhat_deploy_contract_shibarium/ReadMessage.js]. helloworld4_get_output: ", helloworld4_get_output);

}



//run deploycontract() and catch error
ReadMessage()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
