// Log decoder for common Ethereum events
import { Interface } from '@ethersproject/abi';

// ERC20 Transfer event signature
const ERC20_TRANSFER_ABI = [
    'event Transfer(address indexed from, address indexed to, uint256 value)'
];

// Uniswap V2 Pair events
const UNISWAP_V2_PAIR_ABI = [
    'event Mint(address indexed sender, uint256 amount0, uint256 amount1)',
    'event Transfer(address indexed from, address indexed to, uint256 value)'
];

// Uniswap V2 Factory events
const UNISWAP_V2_FACTORY_ABI = [
    'event PairCreated(address indexed token0, address indexed token1, address pair, uint256)'
];

// Create interfaces
const erc20Interface = new Interface(ERC20_TRANSFER_ABI);
const pairInterface = new Interface(UNISWAP_V2_PAIR_ABI);
const factoryInterface = new Interface(UNISWAP_V2_FACTORY_ABI);

// Event signatures
const EVENT_SIGNATURES = {
    TRANSFER: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    MINT: '0x4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f',
    PAIR_CREATED: '0x0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9'
};

/**
 * Decode logs from transaction receipts
 * @param {Array} receipts - Array of transaction receipts
 * @returns {Object} Decoded logs organized by event type
 */
export function decodeLogs(receipts) {
    const decodedLogs = {
        transfers: [],
        mints: [],
        pairCreated: []
    };

    // Handle both single receipt and array of receipts
    const receiptArray = Array.isArray(receipts) ? receipts : [receipts];

    receiptArray.forEach(receipt => {
        if (!receipt || !receipt.logs) return;

        receipt.logs.forEach(log => {
            try {
                const topic0 = log.topics[0];

                switch (topic0) {
                    case EVENT_SIGNATURES.TRANSFER:
                        const transferEvent = erc20Interface.parseLog(log);
                        decodedLogs.transfers.push({
                            type: 'Transfer',
                            contractAddress: log.address,
                            from: transferEvent.args.from,
                            to: transferEvent.args.to,
                            value: transferEvent.args.value.toString(),
                            blockNumber: log.blockNumber,
                            transactionHash: log.transactionHash,
                            logIndex: log.logIndex
                        });
                        break;

                    case EVENT_SIGNATURES.MINT:
                        const mintEvent = pairInterface.parseLog(log);
                        decodedLogs.mints.push({
                            type: 'Mint',
                            contractAddress: log.address,
                            sender: mintEvent.args.sender,
                            amount0: mintEvent.args.amount0.toString(),
                            amount1: mintEvent.args.amount1.toString(),
                            blockNumber: log.blockNumber,
                            transactionHash: log.transactionHash,
                            logIndex: log.logIndex
                        });
                        break;

                    case EVENT_SIGNATURES.PAIR_CREATED:
                        const pairCreatedEvent = factoryInterface.parseLog(log);
                        decodedLogs.pairCreated.push({
                            type: 'PairCreated',
                            contractAddress: log.address,
                            token0: pairCreatedEvent.args.token0,
                            token1: pairCreatedEvent.args.token1,
                            pair: pairCreatedEvent.args.pair,
                            pairIndex: pairCreatedEvent.args[3].toString(),
                            blockNumber: log.blockNumber,
                            transactionHash: log.transactionHash,
                            logIndex: log.logIndex
                        });
                        break;
                }
            } catch (error) {
                // Skip logs that can't be decoded
                // Continue to next iteration
            }
        });
    });

    return decodedLogs;
}

/**
 * Decode only Transfer events from receipts
 * @param {Array} receipts - Array of transaction receipts
 * @returns {Array} Array of decoded Transfer events
 */
export function decodeTransferLogs(receipts) {
    const result = decodeLogs(receipts);
    return result.transfers;
}

/**
 * Decode only Mint events from receipts
 * @param {Array} receipts - Array of transaction receipts
 * @returns {Array} Array of decoded Mint events
 */
export function decodeMintLogs(receipts) {
    const result = decodeLogs(receipts);
    return result.mints;
}

/**
 * Decode only PairCreated events from receipts
 * @param {Array} receipts - Array of transaction receipts
 * @returns {Array} Array of decoded PairCreated events
 */
export function decodePairCreatedLogs(receipts) {
    const result = decodeLogs(receipts);
    return result.pairCreated;
}

/**
 * Get event signature for a specific event type
 * @param {string} eventType - Type of event (TRANSFER, MINT, PAIR_CREATED)
 * @returns {string} Event signature hash
 */
export function getEventSignature(eventType) {
    return EVENT_SIGNATURES[eventType.toUpperCase()];
}
