i. Run these instruction in the bash shell
 
git clone https://github.com/bender876487/hardhat_deploy_contract_shibarium.git
cd hardhat_deploy_contract_shibarium
npm install 
npm install fix
#DO NOT: RUN NPM INSTALL FIX --FORCE
#DO NOT FORCE




#run the contracts
node scripts/deploycontract_catchevent_etc.js

#check the link
#https://hardhat.org/tutorial/deploying-to-a-live-network

#you need a metamask wallett sepolia or puppynet, with fake coin

#run the contracts, alternatives

#check hardhat.config.js
npx hardhat run scripts/deploycontract_catchevent_etc.js --network sepolia 


#check hardhat.config.js
npx hardhat run scripts/deploycontract_catchevent_etc.js --network puppynet


