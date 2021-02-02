import Arweave from 'arweave';
import { JWKInterface } from 'arweave/node/lib/wallet';
import SimplifiedTransaction from './classes/class.simplified-tx';
import Contract from './classes/class.contract';
import fs from 'fs';

export const createSimplifiedTransaction =  async (): Promise<SimplifiedTransaction> => {
    // init arwaeve
    const arweave = Arweave.init({
        host: 'arweave.net',
        port: 443,
        protocol: 'https',
        timeout: 20000,
        logging: false,
    });

    const wallet: JWKInterface = await arweave.wallets.generate();
    const sTx = await SimplifiedTransaction.build(arweave, wallet);

    return sTx;
}

export const simulateContractCreation = async (): Promise<Contract> => {
    // init arwaeve
    const arweave = Arweave.init({
        host: 'arweave.net',
        port: 443,
        protocol: 'https',
        timeout: 20000,
        logging: false,
    });

    const wallet: JWKInterface = await arweave.wallets.generate();
    const contractInitState = fs.readFileSync('src/contracts/token-pst.json');
    const contractSource = fs.readFileSync('src/contracts/token-pst.js');

    const simulatedContract = await Contract.build(
        arweave,
        wallet,
        contractInitState.toString(),
        contractSource.toString());

    return simulatedContract;
}
