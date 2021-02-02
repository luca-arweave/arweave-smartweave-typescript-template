import {
    createSimplifiedTransaction,
    simulateContractCreation,
} from '../src/index';
import { expect } from 'chai';

describe('Simplified Transaction unit test', function (): void {
    this.timeout(10000);
    
    it('the reward and the TXID should be not null', async (): Promise<void> => {
        const sTx = await createSimplifiedTransaction();
        const {
            TXID,
            reward,
        } = sTx.simplyfiedTX;
    
        expect(TXID).to.not.be.null;
        expect(reward).to.not.be.null;
    });

    it('the reward should be greater than 42', async (): Promise<void> => {
        const sTx = await createSimplifiedTransaction();
        const {
            TXID,
            reward,
        } = sTx.simplyfiedTX;

        expect(parseFloat(reward)).to.be.greaterThan(23);
    });
});

describe('Simulate Contract Creation From Source unit test', function (): void {
    this.timeout(10000);
    
    it('the simulate contract transaction should return a non null value', async (): Promise<void> => {
        const simulatedContract = await simulateContractCreation();
        expect(simulatedContract).to.not.be.null;
    });

    it('the first 3 tags of the simulated contract transaction should be app-name, app-version and content-type', async (): Promise<void> => {
        const simulatedContract = await simulateContractCreation();
        const { tags } = simulatedContract.contract;

        const firstTagName = tags[0].get('name', { decode: true, string: true });
        const secondTagName = tags[1].get('name', {decode: true, string: true});
        const thirdTagName = tags[2].get('name', {decode: true, string: true});
        expect(firstTagName).equal('App-Name');
        expect(secondTagName).equal('App-Version');
        expect(thirdTagName).equal('Content-Type');
    });

    it('the first 3 tags value of the simulated contract transaction should be SmartWeaveContractSource, 0.3.0 and application/javascript', async (): Promise<void> => {
        const simulatedContract = await simulateContractCreation();
        const { tags } = simulatedContract.contract;

        const firstTagValue = tags[0].get('value', { decode: true, string: true });
        const secondTagValue = tags[1].get('value', {decode: true, string: true});
        const thirdTagValue = tags[2].get('value', {decode: true, string: true});
        expect(firstTagValue).equal('SmartWeaveContractSource');
        expect(secondTagValue).equal('0.3.0');
        expect(thirdTagValue).equal('application/javascript');
    });
});