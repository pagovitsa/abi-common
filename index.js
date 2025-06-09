// Import all helper functions
import {
    getPairAndTokenDetails,
    getOwner,
    getReserves,
    getTokenBalance,
    getTotalSupply
} from './src/informer-abi.js';

import {
    getPair,
    getAllPairs,
    getAllPairsLength,
    getFeeTo,
    getFeeToSetter
} from './src/uniswap-v2-factory.js';

import {
    getAmountOut,
    getAmountIn,
    getAmountsOut,
    getAmountsIn,
    swapETHForExactTokens,
    swapExactETHForTokens,
    swapExactETHForTokensSupportingFeeOnTransferTokens,
    swapExactTokensForETH,
    swapExactTokensForETHSupportingFeeOnTransferTokens
} from './src/uniswap-v2-router.js';

import {
    getPairName,
    getPairSymbol,
    getPairDecimals,
    getPairTotalSupply,
    getPairBalanceOf,
    getToken0,
    getToken1,
    getPairReserves,
    getPrice0CumulativeLast,
    getPrice1CumulativeLast,
    getKLast
} from './src/uniswap-v2-pair.js';

import {
    getBalanceOf,
    getAllowance,
    getTokenTotalSupply,
    getTokenName,
    getTokenSymbol,
    getTokenDecimals,
    approve,
    transfer,
    transferFrom
} from './src/erc20.js';

import {
    decodeLogs,
    decodeTransferLogs,
    decodeMintLogs,
    decodePairCreatedLogs,
    getEventSignature
} from './src/log-decoder.js';

// Export organized helper functions in nested structure
export const informer = {
    getPairAndTokenDetails,
    getOwner,
    getReserves,
    getTokenBalance,
    getTotalSupply
};

export const decoder = {
    decodeLogs,
    decodeTransferLogs,
    decodeMintLogs,
    decodePairCreatedLogs,
    getEventSignature
};

export const erc20 = {
    getBalanceOf,
    getAllowance,
    getTotalSupply: getTokenTotalSupply,
    getName: getTokenName,
    getSymbol: getTokenSymbol,
    getDecimals: getTokenDecimals,
    approve,
    transfer,
    transferFrom
};

export const uniswap = {
    v2: {
        factory: {
            getPair,
            getAllPairs,
            getAllPairsLength,
            getFeeTo,
            getFeeToSetter
        },
        router: {
            getAmountOut,
            getAmountIn,
            getAmountsOut,
            getAmountsIn,
            swapETHForExactTokens,
            swapExactETHForTokens,
            swapExactETHForTokensSupportingFeeOnTransferTokens,
            swapExactTokensForETH,
            swapExactTokensForETHSupportingFeeOnTransferTokens
        },
        pair: {
            getName: getPairName,
            getSymbol: getPairSymbol,
            getDecimals: getPairDecimals,
            getTotalSupply: getPairTotalSupply,
            getBalanceOf: getPairBalanceOf,
            getToken0,
            getToken1,
            getReserves: getPairReserves,
            getPrice0CumulativeLast,
            getPrice1CumulativeLast,
            getKLast
        }
    }
};

// Default export with all organized functions
export default {
    informer,
    decoder,
    erc20,
    uniswap
};
