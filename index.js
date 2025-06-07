import pkg from '@bcoders.gr/abi-codec';
const { ABICodec } = pkg;

// Import all modules
import * as UniswapV2Router from './src/uniswap-v2-router.js';
import * as UniswapV2Factory from './src/uniswap-v2-factory.js';
import * as ERC20 from './src/erc20.js';
import * as CustomABI from './src/custom-abi.js';
import * as InformerABI from './src/informer-abi.js';

// Initialize ABI Coder (basic instance - individual modules have their own specialized instances)
// This is mainly for backwards compatibility
const abiCoder = null; // Individual modules manage their own ABICodec instances

// Export all functionality (namespace exports)
export {
    UniswapV2Router,
    UniswapV2Factory,
    ERC20,
    CustomABI,
    InformerABI,
    abiCoder
};

// Export individual functions for convenience
export {
    // Uniswap V2 Router functions
    encodeSwapETHForExactTokens,
    encodeSwapExactETHForTokens,
    encodeSwapExactTokensForETHSupportingFeeOnTransferTokens,
    encodeSwapExactTokensForETH,
    encodeSwapExactETHForTokensSupportingFeeOnTransferTokens,
    encodeGetAmountOut,
    encodeGetAmountIn,
    encodeGetAmountsOut,
    encodeGetAmountsIn,
    decodeSwapETHForExactTokens,
    decodeSwapExactETHForTokens,
    decodeSwapExactTokensForETHSupportingFeeOnTransferTokens,
    decodeSwapExactTokensForETH,
    decodeSwapExactETHForTokensSupportingFeeOnTransferTokens,
    decodeGetAmountOut,
    decodeGetAmountIn,
    decodeGetAmountsOut,
    decodeGetAmountsIn,
    decodeSwapResult,
    decodeAmountResult,
    decodeAmountsResult
} from './src/uniswap-v2-router.js';

export {
    // Uniswap V2 Factory functions
    encodeCreatePair,
    encodeGetPair,
    encodeAllPairs,
    encodeAllPairsLength,
    encodeFeeTo,
    encodeFeeToSetter,
    encodeSetFeeTo,
    encodeSetFeeToSetter,
    decodeCreatePair,
    decodeGetPair,
    decodeAllPairs,
    decodeAllPairsLength,
    decodeFeeTo,
    decodeFeeToSetter,
    decodeSetFeeTo,
    decodeSetFeeToSetter,
    decodeAddressResult,
    decodeUintResult
} from './src/uniswap-v2-factory.js';

export {
    // ERC20 functions
    encodeBalanceOf,
    encodeAllowance,
    encodeTotalSupply,
    encodeName,
    encodeSymbol,
    encodeDecimals,
    encodeApprove,
    encodeTransfer,
    encodeTransferFrom,
    decodeBalanceOf,
    decodeAllowance,
    decodeTotalSupply,
    decodeName,
    decodeSymbol,
    decodeDecimals,
    decodeApprove,
    decodeTransfer,
    decodeTransferFrom,
    decodeUint256Result,
    decodeStringResult
} from './src/erc20.js';

export {
    // Custom ABI functions
    encodeFunction,
    decodeFunction,
    decodeFunctionResult,
    getFunctionSelector,
    encodeConstructor,
    decodeEvent,
    getFunctionNames,
    getEventNames,
    getFunctionAbi,
    isFunctionPayable,
    isFunctionReadOnly
} from './src/custom-abi.js';

export {
    // Informer ABI functions
    encodeGetOwner,
    encodeGetPairAndTokenDetails,
    encodeGetReserves,
    encodeGetTokenBalance,
    encodeGetTotalSupply as encodeInformerGetTotalSupply,
    decodeGetOwner,
    decodeGetPairAndTokenDetails,
    decodeGetReserves,
    decodeGetTokenBalance,
    decodeGetTotalSupply as decodeInformerGetTotalSupply,
    decodeOwnerResult,
    decodePairAndTokenDetailsResult,
    decodeReservesResult,
    decodeTokenBalanceResult,
    decodeTotalSupplyResult as decodeInformerTotalSupplyResult,
    parsePairDetails,
    parseReserves
} from './src/informer-abi.js';

// Export a convenience function to get all encoders/decoders
export const getCodec = () => ({
    uniswapV2Router: UniswapV2Router,
    uniswapV2Factory: UniswapV2Factory,
    erc20: ERC20,
    custom: CustomABI,
    informer: InformerABI,
    abiCoder
});

export default {
    UniswapV2Router,
    UniswapV2Factory,
    ERC20,
    CustomABI,
    InformerABI,
    abiCoder,
    getCodec
};
