/* eslint-disable no-undef */
const MasterFootball = artifacts.require("MasterFootball"); //abi

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts(); //grab account that are available

  await deployer.deploy(
    MasterFootball,
    "MasterFootball NFTs",
    "TNT",
    10,
    accounts[1]
  ); //constructor
};
