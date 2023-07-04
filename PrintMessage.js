//const { expect } = require("chai");
const hre = require("hardhat");
const { ethers } = require( 'ethers')



const PrintMessage = async () => {

    
    
//Deployment should Print Message
    //const [owner] = await ethers.getSigners();

    
    //Calling ethers.deployContract("helloworld3") will start the deployment of our helloworld3 contract, and return a Promise that resolves to a Contract. This is the object that has a method for each of your smart contract functions.
    const helloworld3 = await ethers.deployContract("helloworld3");

    const helloworld3_set_output = await helloworld3.set('mesg5546482');

    
    await console.log("[hardhat_deploy_contract_shibarium/PrintMessage.js]. helloworld3_set_output: ', helloworld3_set_output");

}



//run deploycontract() and catch error
PrintMessage()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
