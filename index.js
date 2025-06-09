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
    getBalanceOf,
    getAllowance,
    getTokenTotalSupply,
    getTokenName,
    getTokenSymbol,
    getTokenDecimals
} from './src/erc20.js';

// Export organized helper functions in nested structure
export const Informer = {
    getPairAndTokenDetails,
    getOwner,
    getReserves,
    getTokenBalance,
    getTotalSupply
};

export const ERC20 = {
    getBalanceOf,
    getAllowance,
    getTotalSupply: getTokenTotalSupply,
    getName: getTokenName,
    getSymbol: getTokenSymbol,
    getDecimals: getTokenDecimals
};

export const UniswapV2Factory = {
    getPair,
    getAllPairs,
    getAllPairsLength,
    getFeeTo,
    getFeeToSetter
};

export const UniswapV2 = {
    Factory: {
        getPair,
        getAllPairs,
        getAllPairsLength,
        getFeeTo,
        getFeeToSetter
    }
};

// Individual function exports for convenience
export {
    getPairAndTokenDetails,
    getOwner,
    getReserves,
    getTokenBalance,
    getTotalSupply,
    getPair,
    getAllPairs,
    getAllPairsLength,
    getFeeTo,
    getFeeToSetter,
    getBalanceOf,
    getAllowance,
    getTokenTotalSupply,
    getTokenName,
    getTokenSymbol,
    getTokenDecimals
};

// Default export with all organized functions
export default {
    Informer,
    ERC20,
    UniswapV2Factory,
    UniswapV2
};
