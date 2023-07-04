/*/
documentation
BASH SHELL1
cd /media/ubuntu/shareddir1/karametron/hardhat-tutorial 
npx hardhat node



BASH SHELL2
cd /media/ubuntu/shareddir1/karametron/hardhat-tutorial 
npx hardhat run scripts/deploycontract_createaccount_addmodule.js --network localhost 

#npx hardhat run scripts/deploycontract_createaccount_addmodule.js --network localhost --verbose


//PART1. DEPLOY Greeter
//PART2. CREATEACCOUNT
//PART3. ADDMODULE

/*/

const hre = require("hardhat");
const { ethers } = require( 'ethers')
/*
const { EthersAdapter } = require(  '@safe-global/protocol-kit')
const Safe = require(  '@safe-global/protocol-kit')
const { SafeFactory } = require(  '@safe-global/protocol-kit')
const { SafeAccountConfig } = require(  '@safe-global/protocol-kit')
const { ContractNetworksConfig } = require(  '@safe-global/protocol-kit')
*/


const deploycontract = async () => {
    
    
    
    /////////////////////////////////////////////
    /*
    //PART1 OLD. DEPLOY Greeter
    //We get the contract to deploy
    //hardhat() check the directory ../contracts
    //current diractory is ./scripts
    // /media/disk5/virtualbox_20211100/karametron/hardhat-tutorial/contracts/Greeter.sol
    const Greetersol = await hre.ethers.getContractFactory("Greeter");
    
    //lets deploy the contract
    const Greetersoldeploy = await Greetersol.deploy("MSG 3563");

    await Greetersoldeploy.deployed();

    await console.log("[file scripts/deploy.js]. /blabla/hardhat-tutorial/contracts/Greeter.sol deployed to:", Greetersoldeploy.address);
    */
    
    //###########################################
    //PART1 NEW
    const EventEmitter = await hre.ethers.getContractFactory("EventEmitter");
    const eventEmitter = await EventEmitter.deploy();
    await eventEmitter.deployed();

    const tx = await eventEmitter.emitBothEvents(42, "foo");

    const receipt = await tx.wait()

    for (const event of receipt.events) 
    {
        console.log(`Event ${event.event} with args ${event.args}`);
    }
}


//run deploycontract() and catch error
deploycontract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  
  
  
  
//npx hardhat run scripts/deploycontract_catchevent_etc.js --network sepolia #check hardhat.config.js
  
  
  
  
  
/* 
//EventEmitter.JS
// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

contract EventEmitter {
  event ConstructorEvent();
  event MyEvent();
  event MyEventWithData(uint, string);

  constructor () public {
    emit ConstructorEvent();
  }

  function emitMyEvent() public {
    emit MyEvent();
  }

  function emitMyEventWithData(uint x, string calldata s) public {
    emit MyEventWithData(x, s);
  }

  function emitBothEvents(uint x, string calldata s) public {
    emit MyEvent();
    emit MyEventWithData(x, s);
  }
}

*/
