import {BalancerSDK, BalancerSdkConfig, Network, PoolWithMethods} from '@balancer-labs/sdk';
import Web3 from 'web3';

const config: BalancerSdkConfig = {
    network: Network.MAINNET,
    rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA}`,
};

import { Curl } from 'node-libcurl'

const curl = new Curl()

curl.setOpt('URL', 'https://api.curve.fi/api/getPools/ethereum/factory-crvusd')
curl.on('end', (_statusCode: any, body: any) => {
    console.info(body)
    curl.close()
})
curl.on('error', () => curl.close())
curl.perform()