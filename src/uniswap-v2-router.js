import pkg from '@bcoders.gr/abi-codec';
const { ABICodec } = pkg;

// Default Uniswap V2 Router address (Ethereum mainnet)
export const DEFAULT_UNISWAP_V2_ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';

// Performance optimization: Create codec instance when needed
let routerCodec;

// Validation helpers
const isValidAddress = (address) => {
    return typeof address === 'string' && 
           address.startsWith('0x') && 
           address.length === 42 && 
           /^0x[0-9a-fA-F]{40}$/.test(address);
};

const validateParams = (provider, path, to, routerAddress) => {
    if (!provider) {
        throw new Error('Provider is required');
    }
    
    if (!path || !Array.isArray(path) || path.length < 2) {
        throw new Error('Valid path with at least 2 addresses is required');
    }
    
    if (!to || !isValidAddress(to)) {
        throw new Error('Valid recipient address is required');
    }
    
    if (!isValidAddress(routerAddress)) {
        throw new Error('Invalid router address format');
    }
    
    // Validate all addresses in path
    for (const address of path) {
        if (!isValidAddress(address)) {
            throw new Error(`Invalid address in path: ${address}`);
        }
    }
};

// Uniswap V2 Router ABI definitions (optimized for performance)
const ROUTER_ABI = {
    swapETHForExactTokens: {
        name: "swapETHForExactTokens",
        inputs: [
            { type: "uint256", name: "amountOut" },
            { type: "address[]", name: "path" },
            { type: "address", name: "to" },
            { type: "uint256", name: "deadline" }
        ],
        outputs: [{ type: "uint256[]", name: "amounts" }],
        stateMutability: "payable"
    },
    swapExactETHForTokens: {
        name: "swapExactETHForTokens",
        inputs: [
            { type: "uint256", name: "amountOutMin" },
            { type: "address[]", name: "path" },
            { type: "address", name: "to" },
            { type: "uint256", name: "deadline" }
        ],
        outputs: [{ type: "uint256[]", name: "amounts" }],
        stateMutability: "payable"
    },
    swapExactETHForTokensSupportingFeeOnTransferTokens: {
        name: "swapExactETHForTokensSupportingFeeOnTransferTokens",
        inputs: [
            { type: "uint256", name: "amountOutMin" },
            { type: "address[]", name: "path" },
            { type: "address", name: "to" },
            { type: "uint256", name: "deadline" }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    swapExactTokensForETH: {
        name: "swapExactTokensForETH",
        inputs: [
            { type: "uint256", name: "amountIn" },
            { type: "uint256", name: "amountOutMin" },
            { type: "address[]", name: "path" },
            { type: "address", name: "to" },
            { type: "uint256", name: "deadline" }
        ],
        outputs: [{ type: "uint256[]", name: "amounts" }],
        stateMutability: "nonpayable"
    },
    swapExactTokensForETHSupportingFeeOnTransferTokens: {
        name: "swapExactTokensForETHSupportingFeeOnTransferTokens",
        inputs: [
            { type: "uint256", name: "amountIn" },
            { type: "uint256", name: "amountOutMin" },
            { type: "address[]", name: "path" },
            { type: "address", name: "to" },
            { type: "uint256", name: "deadline" }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    getAmountOut: {
        name: "getAmountOut",
        inputs: [
            { type: "uint256", name: "amountIn" },
            { type: "uint256", name: "reserveIn" },
            { type: "uint256", name: "reserveOut" }
        ],
        outputs: [{ type: "uint256", name: "amountOut" }],
        stateMutability: "pure"
    },
    getAmountIn: {
        name: "getAmountIn",
        inputs: [
            { type: "uint256", name: "amountOut" },
            { type: "uint256", name: "reserveIn" },
            { type: "uint256", name: "reserveOut" }
        ],
        outputs: [{ type: "uint256", name: "amountIn" }],
        stateMutability: "pure"
    },
    getAmountsOut: {
        name: "getAmountsOut",
        inputs: [
            { type: "uint256", name: "amountIn" },
            { type: "address[]", name: "path" }
        ],
        outputs: [{ type: "uint256[]", name: "amounts" }],
        stateMutability: "view"
    },
    getAmountsIn: {
        name: "getAmountsIn",
        inputs: [
            { type: "uint256", name: "amountOut" },
            { type: "address[]", name: "path" }
        ],
        outputs: [{ type: "uint256[]", name: "amounts" }],
        stateMutability: "view"
    }
};

// Core encoding functions
const createEncoder = (functionAbi) => {
    return (...params) => {
        try {
            if (!routerCodec) {
                routerCodec = new ABICodec();
            }
            return routerCodec.encodeFunctionData(functionAbi, params);
        } catch (error) {
            throw new Error(`Encoding error for ${functionAbi.name}: ${error.message}`);
        }
    };
};

// Encoding functions
export const encodeSwapETHForExactTokens = createEncoder(ROUTER_ABI.swapETHForExactTokens);
export const encodeSwapExactETHForTokens = createEncoder(ROUTER_ABI.swapExactETHForTokens);
export const encodeSwapExactETHForTokensSupportingFeeOnTransferTokens = createEncoder(ROUTER_ABI.swapExactETHForTokensSupportingFeeOnTransferTokens);
export const encodeSwapExactTokensForETH = createEncoder(ROUTER_ABI.swapExactTokensForETH);
export const encodeSwapExactTokensForETHSupportingFeeOnTransferTokens = createEncoder(ROUTER_ABI.swapExactTokensForETHSupportingFeeOnTransferTokens);
export const encodeGetAmountOut = createEncoder(ROUTER_ABI.getAmountOut);
export const encodeGetAmountIn = createEncoder(ROUTER_ABI.getAmountIn);
export const encodeGetAmountsOut = createEncoder(ROUTER_ABI.getAmountsOut);
export const encodeGetAmountsIn = createEncoder(ROUTER_ABI.getAmountsIn);

// Decoding functions
export const decodeAmountsResult = (functionName, data) => {
    try {
        const abi = ROUTER_ABI[functionName];
        if (!abi || !abi.outputs.length) {
            return null;
        }
        
        if (!routerCodec) {
            routerCodec = new ABICodec();
        }
        const decoded = routerCodec.decodeFunctionResult(abi, data);
        return decoded.length === 1 ? decoded[0] : decoded;
    } catch (error) {
        throw new Error(`Decoding error for ${functionName}: ${error.message}`);
    }
};

export const decodeSwapResult = decodeAmountsResult;

// Enhanced function factory that creates call/send/estimate modes
const createEnhancedFunction = (encodeFn, functionName, requiresValue = false) => {
    const enhanced = {
        // Static call mode - returns decoded response
        call: async (provider, ...params) => {
            const routerAddress = params[params.length - 1] || DEFAULT_UNISWAP_V2_ROUTER_ADDRESS;
            const finalRouterAddress = typeof routerAddress === 'string' ? routerAddress : DEFAULT_UNISWAP_V2_ROUTER_ADDRESS;
            
            try {
                if (params.length > 1) {
                    validateParams(provider, params[1] || params[2], params[2] || params[3], finalRouterAddress);
                }
                
                const txData = encodeFn(...params.slice(0, -1));
                const response = await provider.call({
                    to: finalRouterAddress,
                    data: txData
                });
                
                if (!response) {
                    throw new Error('No response from contract call');
                }
                
                return decodeAmountsResult(functionName, response);
                
            } catch (error) {
                throw new Error(`${functionName} call failed: ${error.message}`);
            }
        },
        
        // Send transaction mode
        send: async (provider, ...params) => {
            const options = typeof params[params.length - 1] === 'object' && !Array.isArray(params[params.length - 1]) 
                ? params.pop() 
                : {};
            const routerAddress = params[params.length - 1] || DEFAULT_UNISWAP_V2_ROUTER_ADDRESS;
            const finalRouterAddress = typeof routerAddress === 'string' ? routerAddress : DEFAULT_UNISWAP_V2_ROUTER_ADDRESS;
            
            try {
                if (params.length > 1) {
                    validateParams(provider, params[1] || params[2], params[2] || params[3], finalRouterAddress);
                }
                
                if (requiresValue && !options.value) {
                    throw new Error('ETH value must be provided for ETH swap transactions');
                }
                
                const txData = encodeFn(...params.slice(0, -1));
                
                const txRequest = {
                    to: finalRouterAddress,
                    data: txData,
                    ...options
                };
                
                return await provider.sendTransaction(txRequest);
                
            } catch (error) {
                throw new Error(`${functionName} transaction failed: ${error.message}`);
            }
        },
        
        // Gas estimate mode
        estimate: async (provider, ...params) => {
            const options = typeof params[params.length - 1] === 'object' && !Array.isArray(params[params.length - 1]) 
                ? params.pop() 
                : {};
            const routerAddress = params[params.length - 1] || DEFAULT_UNISWAP_V2_ROUTER_ADDRESS;
            const finalRouterAddress = typeof routerAddress === 'string' ? routerAddress : DEFAULT_UNISWAP_V2_ROUTER_ADDRESS;
            
            try {
                if (params.length > 1) {
                    validateParams(provider, params[1] || params[2], params[2] || params[3], finalRouterAddress);
                }
                
                const txData = encodeFn(...params.slice(0, -1));
                
                const txRequest = {
                    to: finalRouterAddress,
                    data: txData,
                    ...options
                };
                
                return await provider.estimateGas(txRequest);
                
            } catch (error) {
                throw new Error(`${functionName} gas estimation failed: ${error.message}`);
            }
        }
    };
    
    // Add backward compatibility as direct function call (defaults to send mode)
    const directFunction = async (provider, ...params) => {
        return enhanced.send(provider, ...params);
    };
    
    // Copy enhanced methods to direct function
    Object.assign(directFunction, enhanced);
    
    return directFunction;
};

// Simple read-only functions (amount calculations)
export const getAmountOut = async (provider, amountIn, reserveIn, reserveOut, routerAddress = DEFAULT_UNISWAP_V2_ROUTER_ADDRESS) => {
    try {
        const txData = encodeGetAmountOut(amountIn, reserveIn, reserveOut);
        const response = await provider.call({
            to: routerAddress,
            data: txData
        });
        return decodeAmountsResult('getAmountOut', response);
    } catch (error) {
        throw new Error(`getAmountOut failed: ${error.message}`);
    }
};

export const getAmountIn = async (provider, amountOut, reserveIn, reserveOut, routerAddress = DEFAULT_UNISWAP_V2_ROUTER_ADDRESS) => {
    try {
        const txData = encodeGetAmountIn(amountOut, reserveIn, reserveOut);
        const response = await provider.call({
            to: routerAddress,
            data: txData
        });
        return decodeAmountsResult('getAmountIn', response);
    } catch (error) {
        throw new Error(`getAmountIn failed: ${error.message}`);
    }
};

export const getAmountsOut = async (provider, amountIn, path, routerAddress = DEFAULT_UNISWAP_V2_ROUTER_ADDRESS) => {
    try {
        validateParams(provider, path, path[path.length - 1], routerAddress);
        const txData = encodeGetAmountsOut(amountIn, path);
        const response = await provider.call({
            to: routerAddress,
            data: txData
        });
        return decodeAmountsResult('getAmountsOut', response);
    } catch (error) {
        throw new Error(`getAmountsOut failed: ${error.message}`);
    }
};

export const getAmountsIn = async (provider, amountOut, path, routerAddress = DEFAULT_UNISWAP_V2_ROUTER_ADDRESS) => {
    try {
        validateParams(provider, path, path[path.length - 1], routerAddress);
        const txData = encodeGetAmountsIn(amountOut, path);
        const response = await provider.call({
            to: routerAddress,
            data: txData
        });
        return decodeAmountsResult('getAmountsIn', response);
    } catch (error) {
        throw new Error(`getAmountsIn failed: ${error.message}`);
    }
};

// Enhanced swap functions with call/send/estimate modes
export const swapETHForExactTokens = createEnhancedFunction(
    encodeSwapETHForExactTokens, 
    'swapETHForExactTokens', 
    true
);

export const swapExactETHForTokens = createEnhancedFunction(
    encodeSwapExactETHForTokens, 
    'swapExactETHForTokens', 
    true
);

export const swapExactETHForTokensSupportingFeeOnTransferTokens = createEnhancedFunction(
    encodeSwapExactETHForTokensSupportingFeeOnTransferTokens, 
    'swapExactETHForTokensSupportingFeeOnTransferTokens', 
    true
);

export const swapExactTokensForETH = createEnhancedFunction(
    encodeSwapExactTokensForETH, 
    'swapExactTokensForETH', 
    false
);

export const swapExactTokensForETHSupportingFeeOnTransferTokens = createEnhancedFunction(
    encodeSwapExactTokensForETHSupportingFeeOnTransferTokens, 
    'swapExactTokensForETHSupportingFeeOnTransferTokens', 
    false
);

// Export default object for compatibility
export default {
    DEFAULT_UNISWAP_V2_ROUTER_ADDRESS,
    getAmountOut,
    getAmountIn,
    getAmountsOut,
    getAmountsIn,
    swapETHForExactTokens,
    swapExactETHForTokens,
    swapExactETHForTokensSupportingFeeOnTransferTokens,
    swapExactTokensForETH,
    swapExactTokensForETHSupportingFeeOnTransferTokens
};
