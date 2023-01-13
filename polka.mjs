// Import
import { ApiPromise, WsProvider } from '@polkadot/api';

async function callApi(){
    const wsProvider = new WsProvider('wss://westend-rpc.polkadot.io');
    const api = await ApiPromise.create({ provider: wsProvider });
    return api;
}
// Construct
 function main(){
    callApi().then((api)=>{
        console.log(api.genesisHash.toHex());

    }).catch(a => 'hell')

}

main();
// Do something
// console.log(api.genesisHash.toHex());