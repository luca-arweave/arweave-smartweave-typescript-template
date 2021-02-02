import Arweave from 'arweave';
import { JWKInterface } from 'arweave/node/lib/wallet';
import Transaction from 'arweave/node/lib/transaction';
import SimplifiedTransactionInterface from '../interfaces/interface.simplified-tx';

export default class SimplifiedTransaction {
    simplyfiedTX: SimplifiedTransactionInterface;

    constructor(tx: Transaction) {
        const {
            id,
            reward,
        } = tx;
        this.simplyfiedTX = {
            TXID: id,
            reward,
        }
    }

    public static async build(arweaveNode: Arweave, jwk: JWKInterface): Promise<SimplifiedTransaction> {
        const testTransaction = await arweaveNode.createTransaction({
            data: '<html><head><meta charset="UTF-8"><title>Hello world!</title></head><body></body></html>'
        }, jwk);
        await arweaveNode.transactions.sign(testTransaction, jwk);
        return new SimplifiedTransaction(testTransaction);
    }
}
