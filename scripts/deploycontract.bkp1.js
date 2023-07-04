/*/
documentation
BASH SHELL1
cd /media/ubuntu/shareddir1/karametron/hardhat-tutorial 
npx hardhat node



BASH SHELL2
cd /media/ubuntu/shareddir1/karametron/hardhat-tutorial 
npx hardhat run scripts/deploycontract_createaccount_addmodule.js --network localhost 

#npx hardhat run scripts/deploycontract_createaccount_addmodule.js --network localhost --verbose


//PART1. DEPLOY helloworld3
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
    //PART1. DEPLOY helloworld3
    //We get the contract to deploy
    //hardhat() check the directory ../contracts
    //current diractory is ./scripts
    // /media/disk5/virtualbox_20211100/karametron/hardhat-tutorial/contracts/helloworld3.sol
    const helloworld3sol = await hre.ethers.getContractFactory("helloworld3");
    
    //lets deploy the contract
    const helloworld3soldeploy = await helloworld3sol.deploy();

    await helloworld3soldeploy.deployed();

    await console.log("[file scripts/deploy.js]. /blabla/hardhat-tutorial/contracts/helloworld3.sol deployed to:", helloworld3soldeploy.address);
    
    
    
    
    /*
    /////////////////////////////////////////////
    //PART2. CREATEACCOUNT SAFE
    
    const RPC_URL='https://rpc2.sepolia.org'
    const provider = new ethers.providers.JsonRpcProvider(RPC_URL)
    const metamask_wallet_address = '0x967c1CF5d91f3738c969c76EB4bDddA6da4183c1'
    const metamask_wallet_privatekey = 'ca46a9eb514f59b9b7e69ac7c7cc9e976395ac9e222faef087fa898dbccb3939'
    
    
    
    // Initialize signers
    //metamask wallet and privatekey
    //0x967c1CF5d91f3738c969c76EB4bDddA6da4183c1
    const signerWallet = 
new ethers.Wallet(metamask_wallet_privatekey, provider)

    const ethAdapter = await new EthersAdapter({ethers, signerOrProvider: signerWallet})
    
    const chainId = await ethAdapter.getChainId()
    console.log(`ChainId: ${chainId}`)

    
  
    
    const safeVersion = '1.3.0'
    const isL1SafeMasterCopy = false
    const safeFactory = await SafeFactory.create({ ethAdapter: ethAdapter })


    
    //https://safe-transaction-mainnet.safe.global/api/v1/owners/0x8fd960F1B9D68BAD2B97bD232FB75CC1f186B064/safes/
    
    //https://safe-transaction-mainnet.safe.global/api/v1/owners/0x967c1CF5d91f3738c969c76EB4bDddA6da4183c1/safes/
    
    //const safeAccountConfig: { threshold: 2, owners: ['0x...', '0x...', '0x..'] }}
    //eth_estimateGas

    const safeAccountConfig = {
        threshold: 1, // Have to be >= 1 && <= totalOwners
        owners: [metamask_wallet_address],
        //eth_estimateGas:30000,
    }
    console.log("Start Deploying Safe");





    
    
	//This Safe is tied to owner 1 because the factory was initialized with an 
	//adapter that had owner 1 as the signer. 
  
    var safeSdkOwner1 = await safeFactory.deploySafe({ safeAccountConfig })

    var safeAddress = await safeSdkOwner1.getAddress()

    console.log(`Safe deployed at: ${safeAddress}`)  
    
    
    /////////////////////////////////////////////
    //PART3. ADDMODULE
    
    //var RPC_URL='https://rpc2.sepolia.org'
    //var provider = new ethers.providers.JsonRpcProvider(RPC_URL)
    
    //eth metamask address: 0x967c1CF5d91f3738c969c76EB4bDddA6da4183c1
        
    //eth metamask privatekey
    var owner1Signer = new ethers.Wallet(metamask_wallet_privatekey, provider)    

   /*
    var ethAdapter = new EthersAdapter({
        ethers,
        signerOrProvider: owner1Signer
    })
    
    var chainId = await ethAdapter.getChainId()
    console.log(`ChainId: ${chainId}`)
    * /

   
    //var safeSdk = await Safe.create({
    var safeSdk = await Safe.default.create({
        ethAdapter: ethAdapter,
        //safeAddress: "0xd25f69eced8cb224c2c0711dc103c0a1be73e138", 
        safeAddress: safeAddress,
        isL1SafeMasterCopy: false
    });    
    
    
    //mnt/workspaceetc/workspace_all/web3/safe/helloworld3.zip
    //var addmoduletest = "0xE1a216729Feb08BB3A8C3189df0cCdb48C271103";
    //var addmoduletest = "0xd9145CCE52D386f254917e481eB44e9943F39138";
    //var addmoduletest = "0x28a7119cAd0Fe12B28eB25Fe19F748E0808b019b";
    //var addmoduletest = "0x457051a8e546AE94e90C41A5b217c5fc7c742Fc8";
    var addmoduletest = helloworld3soldeploy.address;

    
    //media/disk5/virtualbox_20211100/karametron/MultiOwnerLogic.Br5.zip
    //var addmoduletest = "0xA64f5A9181a55F6d067D8922fDF3E6b7cb110A01";
    

    
    
    
    // Uncomment the code below to add the new module to the safe account
    // Once the module is added once, you do not need to invoke this function anymore, else an error will be thrown
    // Add the recovery module
     let safeTransaction = await safeSdk.createEnableModuleTx(addmoduletest);
     let txResponse = await safeSdk.executeTransaction(safeTransaction);
     console.log(`Setted module: ${txResponse}`);
     await txResponse.transactionResponse?.wait();



    // Uncomment the code below to add the deployed contract as guard
    // Once the guard is added once, you do not need to invoke this function anymore
    // Add the module as guard to update the lastActivity
    // safeTransaction = await safeSdk.createEnableGuardTx(addmoduletest);
    // txResponse = await safeSdk.executeTransaction(safeTransaction);
    // console.log(`Setted guard: ${txResponse}`);
    // await txResponse.transactionResponse?.wait();


    // Use the below code to interact with the added module
    // Add here the signature of your function
    // Configure the module
    let ABI = ["function set(string memory finalValue)"];
    //let ABI = ["function PrintFunctionForTest(string memory arg_string)"];

    
    
    let iface = new ethers.utils.Interface(ABI);
    // The second argument array is to define function parameters
    let para = iface.encodeFunctionData("set", ["test4343"]); 
    //let para = iface.encodeFunctionData("PrintFunctionForTest", ["test4343"]); 
    console.log(para);

    safeTransaction = await safeSdk.createTransaction({
        safeTransactionData: {
            data: para,
            to: addmoduletest,
            value: "0"
        }
    })
    
    
    txResponse = await safeSdk.executeTransaction(safeTransaction);
    console.log(`Configured module: ${txResponse}`);
    await txResponse.transactionResponse?.wait();

    /////////////////////////////////////////////////////
    */
    
    
    
    
}



//run deploycontract() and catch error
deploycontract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
