// Import
import { ApiPromise, WsProvider } from '@polkadot/api';

// Construct
const wsProvider = new WsProvider('wss://westend-rpc.polkadot.io');
const api = await ApiPromise.create({ provider: wsProvider });

// Do something
console.log(api.genesisHash.toHex());

// The actual address that we will use
// const ADDR = '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE';
const ADDR ='5GWf5JBby2qcoJX92sxke1Dqa2nJX4NDvK55kfqB4sU89uSa';

// Retrieve the last timestamp
const now = await api.query.timestamp.now();

// Retrieve the account balance & nonce via the system module
const { nonce, data: balance } = await api.query.system.account(ADDR);

console.log(`${now}: balance of ${balance.free} and a nonce of ${nonce}`);


// Retrieve the chain name
const chain = await api.rpc.system.chain();
// test

// Retrieve the latest header
const lastHeader = await api.rpc.chain.getHeader();


  let count = 0;

// Subscribe to the new headers
const unsubHeads = await api.rpc.chain.subscribeNewHeads((lastHeader) => {
  console.log(`${chain}: last block #${lastHeader.number} has hash ${lastHeader.hash}`);

  if (++count === 10) {
    unsubHeads();
  }
});