import Arweave from 'arweave';
import { JWKInterface } from 'arweave/node/lib/wallet';
import Transaction from 'arweave/node/lib/transaction';
import { simulateCreateContractFromSource } from 'smartweave'

export default class Contract {
    contract: Transaction;

    constructor(contract: Transaction) {
        this.contract = contract
    }

    public static async build(
        arweaveNode: Arweave,
        wallet: JWKInterface,
        contractSource: string,
        initState: string): Promise<Contract> {
        const simulatedContract = await simulateCreateContractFromSource(
            arweaveNode,
            wallet,
            initState,
            contractSource,
        );
        return new Contract(simulatedContract);
    }
}
