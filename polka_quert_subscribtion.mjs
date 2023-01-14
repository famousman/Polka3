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


// Retrieve the current timestamp via subscription
// const unsub = await api.query.timestamp.now((moment) => {
//   console.log(`The last block has a timestamp of ${moment}`);
// });

// Subscribe to balance changes for our account
const unsub = await api.query.system.account(ADDR, ({ nonce, data: balance }) => {
  console.log(`free balance is ${balance.free} with ${balance.reserved} reserved and a nonce of ${nonce}`);
});