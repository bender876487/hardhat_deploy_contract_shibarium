//const { expect } = require("chai");
const hre = require("hardhat");
const { ethers } = require( 'ethers')



const Increment = async () => {

        
    Counter=await hre.ethers.getContractAt("Counter", "0xab4d332A9581c88b3c5972936Aff9dB2E4afaB9a");

        
    //const Counter = await ethers.getContractFactory("Counter");
    
    // The deployed contract address
    //const contract = await Counter.attach("0x3ed20751c43b8368436A344fe91412bDC8501d09");


    // Now you can call functions of the contract
    var Counter_set_output=''
    Counter_set_output=await Counter.increment();    
    

    
    await console.log("[hardhat_deploy_contract_shibarium/Increment.js]. Counter_set_output: ", Counter_set_output);

}



//run deploycontract() and catch error
Increment()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
