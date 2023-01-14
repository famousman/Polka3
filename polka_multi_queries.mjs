// Import
import { ApiPromise, WsProvider } from '@polkadot/api';

// Construct
const wsProvider = new WsProvider('wss://westend-rpc.polkadot.io');
const api = await ApiPromise.create({ provider: wsProvider });

// Do something
console.log(api.genesisHash.toHex());

// The actual address that we will use
const ADDR1 = '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE';
const ADDR2 ='5GWf5JBby2qcoJX92sxke1Dqa2nJX4NDvK55kfqB4sU89uSa';


// Subscribe to balance changes for 2 accounts, ADDR1 & ADDR2 (already defined)
const unsub = await api.query.system.account.multi([ADDR1, ADDR2], (balances) => {
    const [{ data: balance1 }, { data: balance2 }] = balances;
  
    console.log(`The balances are ${balance1.free} and ${balance2.free}`);
  });