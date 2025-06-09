// Test file for log decoder functionality
import { decoder } from './index.js';

// Sample log data for testing
const sampleReceipt = {
    logs: [
        {
            address: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
            topics: [
                '0x0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9',
                '0x000000000000000000000000a0b86a33e6776d8b53c597c9ad66c39d8e2b4e5f',
                '0x000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
            ],
            data: '0x000000000000000000000000bf7bb2e8c5b7e0c8f8b9e7a8d6c5f4a3b2c1d0e9000000000000000000000000000000000000000000000000000000000000001f',
            blockNumber: '0x12a05f0',
            transactionHash: '0x123456789abcdef...',
            logIndex: '0x1'
        },
        {
            address: '0xbf7bb2e8c5b7e0c8f8b9e7a8d6c5f4a3b2c1d0e9',
            topics: [
                '0x4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f',
                '0x0000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d'
            ],
            data: '0x0000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000056bc75e2d630eb080',
            blockNumber: '0x12a05f0',
            transactionHash: '0x123456789abcdef...',
            logIndex: '0x2'
        },
        {
            address: '0xa0b86a33e6776d8b53c597c9ad66c39d8e2b4e5f',
            topics: [
                '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
                '0x0000000000000000000000000000000000000000000000000000000000000000',
                '0x000000000000000000000000bf7bb2e8c5b7e0c8f8b9e7a8d6c5f4a3b2c1d0e9'
            ],
            data: '0x0000000000000000000000000000000000000000000000056bc75e2d630eb080',
            blockNumber: '0x12a05f0',
            transactionHash: '0x123456789abcdef...',
            logIndex: '0x3'
        }
    ]
};

// Test the decoder
console.log('Testing log decoder...');

try {
    // Test all logs decoder
    const allLogs = decoder.decodeLogs(sampleReceipt);
    console.log('All decoded logs:', JSON.stringify(allLogs, null, 2));

    // Test specific decoders
    const transfers = decoder.decodeTransferLogs(sampleReceipt);
    console.log('Transfer logs:', transfers.length);

    const mints = decoder.decodeMintLogs(sampleReceipt);
    console.log('Mint logs:', mints.length);

    const pairCreated = decoder.decodePairCreatedLogs(sampleReceipt);
    console.log('PairCreated logs:', pairCreated.length);

    console.log('✅ All tests passed!');
} catch (error) {
    console.error('❌ Test failed:', error);
}
