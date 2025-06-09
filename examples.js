// Example usage of the new log decoder functionality
import { decoder } from './index.js';

/**
 * Example: Decode logs from a transaction receipt
 */
function exampleUsage() {
    // Example transaction receipt with logs
    const transactionReceipt = {
        logs: [
            {
                address: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', // Uniswap V2 Factory
                topics: [
                    '0x0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9', // PairCreated event signature
                    '0x000000000000000000000000a0b86a33e6776d8b53c597c9ad66c39d8e2b4e5f', // token0
                    '0x000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'  // token1 (WETH)
                ],
                data: '0x000000000000000000000000bf7bb2e8c5b7e0c8f8b9e7a8d6c5f4a3b2c1d0e9000000000000000000000000000000000000000000000000000000000000001f',
                blockNumber: '0x12a05f0',
                transactionHash: '0x123456789abcdef...',
                logIndex: '0x1'
            },
            {
                address: '0xbf7bb2e8c5b7e0c8f8b9e7a8d6c5f4a3b2c1d0e9', // Pair contract
                topics: [
                    '0x4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f', // Mint event signature
                    '0x0000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d'  // sender (router)
                ],
                data: '0x0000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000056bc75e2d630eb080',
                blockNumber: '0x12a05f0',
                transactionHash: '0x123456789abcdef...',
                logIndex: '0x2'
            },
            {
                address: '0xa0b86a33e6776d8b53c597c9ad66c39d8e2b4e5f', // Token contract
                topics: [
                    '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef', // Transfer event signature
                    '0x0000000000000000000000000000000000000000000000000000000000000000', // from (mint)
                    '0x000000000000000000000000bf7bb2e8c5b7e0c8f8b9e7a8d6c5f4a3b2c1d0e9'  // to (pair)
                ],
                data: '0x0000000000000000000000000000000000000000000000056bc75e2d630eb080',
                blockNumber: '0x12a05f0',
                transactionHash: '0x123456789abcdef...',
                logIndex: '0x3'
            }
        ]
    };

    // Decode all logs at once
    const allDecodedLogs = decoder.decodeLogs(transactionReceipt);
    console.log('All decoded logs:', allDecodedLogs);

    // Decode specific event types
    const transferEvents = decoder.decodeTransferLogs(transactionReceipt);
    console.log('Transfer events:', transferEvents);

    const mintEvents = decoder.decodeMintLogs(transactionReceipt);
    console.log('Mint events:', mintEvents);

    const pairCreatedEvents = decoder.decodePairCreatedLogs(transactionReceipt);
    console.log('PairCreated events:', pairCreatedEvents);

    // You can also pass an array of receipts
    const multipleReceipts = [transactionReceipt, transactionReceipt];
    const allFromMultiple = decoder.decodeLogs(multipleReceipts);
    console.log('Decoded from multiple receipts:', allFromMultiple);
}

/**
 * Example: Usage in your existing getMint function
 */
async function exampleGetMintUsage(provider, pairAddress, fromBlock, toBlock) {
    try {
        // Get logs from provider
        const logs = await provider.getMint(pairAddress, fromBlock, toBlock);
        
        // Create a receipt-like structure for the decoder
        const receipt = { logs: logs };
        
        // Decode mint events
        const mintEvents = decoder.decodeMintLogs(receipt);
        
        if (mintEvents.length === 0) {
            throw new Error('No mint events found in logs');
        }
        
        const mintEvent = mintEvents[0];
        return {
            amount0: mintEvent.amount0,
            amount1: mintEvent.amount1,
            sender: mintEvent.sender,
            blockNumber: mintEvent.blockNumber,
            transactionHash: mintEvent.transactionHash
        };
    } catch (error) {
        console.error('Error decoding mint logs:', error);
        throw error;
    }
}

// Export for use in other files
export { exampleUsage, exampleGetMintUsage };
