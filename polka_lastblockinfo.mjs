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

// Retrieve last block timestamp, account nonce & balances
const [now, { nonce, data: balance }] = await Promise.all([
    api.query.timestamp.now(),
    api.query.system.account(ADDR)
  ]);