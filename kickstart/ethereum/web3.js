import Web3 from 'web3';

// const web3 = new Web3(window.web3.currentProvider); //L143
let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/98241574e55b4c6585fd9c28b233a0e2'
  );
  web3 = new Web3(provider);
}

export default web3;