import pkg from '@bcoders.gr/abi-codec';
const { ABICodec } = pkg;

// Uniswap V2 Router ABI definitions
const UNISWAP_V2_ROUTER_ABI = [
    {
        "inputs": [
            {"internalType": "uint256", "name": "amountOut", "type": "uint256"},
            {"internalType": "address[]", "name": "path", "type": "address[]"},
            {"internalType": "address", "name": "to", "type": "address"},
            {"internalType": "uint256", "name": "deadline", "type": "uint256"}
        ],
        "name": "swapETHForExactTokens",
        "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "uint256", "name": "amountOutMin", "type": "uint256"},
            {"internalType": "address[]", "name": "path", "type": "address[]"},
            {"internalType": "address", "name": "to", "type": "address"},
            {"internalType": "uint256", "name": "deadline", "type": "uint256"}
        ],
        "name": "swapExactETHForTokens",
        "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "uint256", "name": "amountOutMin", "type": "uint256"},
            {"internalType": "address[]", "name": "path", "type": "address[]"},
            {"internalType": "address", "name": "to", "type": "address"},
            {"internalType": "uint256", "name": "deadline", "type": "uint256"}
        ],
        "name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "uint256", "name": "amountIn", "type": "uint256"},
            {"internalType": "uint256", "name": "amountOutMin", "type": "uint256"},
            {"internalType": "address[]", "name": "path", "type": "address[]"},
            {"internalType": "address", "name": "to", "type": "address"},
            {"internalType": "uint256", "name": "deadline", "type": "uint256"}
        ],
        "name": "swapExactTokensForETH",
        "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "uint256", "name": "amountIn", "type": "uint256"},
            {"internalType": "uint256", "name": "amountOutMin", "type": "uint256"},
            {"internalType": "address[]", "name": "path", "type": "address[]"},
            {"internalType": "address", "name": "to", "type": "address"},
            {"internalType": "uint256", "name": "deadline", "type": "uint256"}
        ],
        "name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "uint256", "name": "amountIn", "type": "uint256"},
            {"internalType": "uint256", "name": "reserveIn", "type": "uint256"},
            {"internalType": "uint256", "name": "reserveOut", "type": "uint256"}
        ],
        "name": "getAmountOut",
        "outputs": [{"internalType": "uint256", "name": "amountOut", "type": "uint256"}],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "uint256", "name": "amountOut", "type": "uint256"},
            {"internalType": "uint256", "name": "reserveIn", "type": "uint256"},
            {"internalType": "uint256", "name": "reserveOut", "type": "uint256"}
        ],
        "name": "getAmountIn",
        "outputs": [{"internalType": "uint256", "name": "amountIn", "type": "uint256"}],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "uint256", "name": "amountIn", "type": "uint256"},
            {"internalType": "address[]", "name": "path", "type": "address[]"}
        ],
        "name": "getAmountsOut",
        "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "uint256", "name": "amountOut", "type": "uint256"},
            {"internalType": "address[]", "name": "path", "type": "address[]"}
        ],
        "name": "getAmountsIn",
        "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
        "stateMutability": "view",
        "type": "function"
    }
];

// Create ABICodec instance with the router ABI
const abiCoder = new ABICodec(UNISWAP_V2_ROUTER_ABI);

// Helper function to get function ABI by name
const getFunctionAbi = (functionName) => {
    return UNISWAP_V2_ROUTER_ABI.find(item => item.name === functionName);
};

// Encoding functions
export const encodeSwapETHForExactTokens = (amountOut, path, to, deadline) => {
    return abiCoder.encodeFunction('swapETHForExactTokens', [amountOut, path, to, deadline]);
};

export const encodeSwapExactETHForTokens = (amountOutMin, path, to, deadline) => {
    return abiCoder.encodeFunction('swapExactETHForTokens', [amountOutMin, path, to, deadline]);
};

export const encodeSwapExactETHForTokensSupportingFeeOnTransferTokens = (amountOutMin, path, to, deadline) => {
    return abiCoder.encodeFunction('swapExactETHForTokensSupportingFeeOnTransferTokens', [amountOutMin, path, to, deadline]);
};

export const encodeSwapExactTokensForETH = (amountIn, amountOutMin, path, to, deadline) => {
    return abiCoder.encodeFunction('swapExactTokensForETH', [amountIn, amountOutMin, path, to, deadline]);
};

export const encodeSwapExactTokensForETHSupportingFeeOnTransferTokens = (amountIn, amountOutMin, path, to, deadline) => {
    return abiCoder.encodeFunction('swapExactTokensForETHSupportingFeeOnTransferTokens', [amountIn, amountOutMin, path, to, deadline]);
};

export const encodeGetAmountOut = (amountIn, reserveIn, reserveOut) => {
    return abiCoder.encodeFunction('getAmountOut', [amountIn, reserveIn, reserveOut]);
};

export const encodeGetAmountIn = (amountOut, reserveIn, reserveOut) => {
    return abiCoder.encodeFunction('getAmountIn', [amountOut, reserveIn, reserveOut]);
};

export const encodeGetAmountsOut = (amountIn, path) => {
    return abiCoder.encodeFunction('getAmountsOut', [amountIn, path]);
};

export const encodeGetAmountsIn = (amountOut, path) => {
    return abiCoder.encodeFunction('getAmountsIn', [amountOut, path]);
};

// Decoding functions
export const decodeSwapETHForExactTokens = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeSwapExactETHForTokens = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeSwapExactETHForTokensSupportingFeeOnTransferTokens = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeSwapExactTokensForETH = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeSwapExactTokensForETHSupportingFeeOnTransferTokens = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeGetAmountOut = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeGetAmountIn = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeGetAmountsOut = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeGetAmountsIn = (data) => {
    return abiCoder.decodeFunction(data);
};

// Result decoding functions (for return values)
export const decodeSwapResult = (functionName, data) => {
    return abiCoder.decodeFunctionResult(functionName, data);
};

export const decodeAmountResult = (functionName, data) => {
    if (!data || data === '0x') {
        throw new Error('Invalid or empty hex data provided');
    }
    return abiCoder.decodeFunctionResult(functionName, data);
};

export const decodeAmountsResult = (functionName, data) => {
    if (!data || data === '0x') {
        throw new Error('Invalid or empty hex data provided');
    }
    return abiCoder.decodeFunctionResult(functionName, data);
};

// Export the ABI for external use
export const ROUTER_ABI = UNISWAP_V2_ROUTER_ABI;

// Helper function to validate Ethereum address
const isValidAddress = (address) => {
    return typeof address === 'string' && 
           address.startsWith('0x') && 
           address.length === 42 && 
           /^0x[0-9a-fA-F]{40}$/.test(address);
};

// Helper functions for Uniswap V2 Router interactions
export const getAmountOut = async (provider, routerAddress, amountIn, reserveIn, reserveOut) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!routerAddress) {
            throw new Error('Router address is required');
        }
        
        if (!isValidAddress(routerAddress)) {
            throw new Error('Invalid router address format');
        }
        
        const txResponse = await provider.call(routerAddress, encodeGetAmountOut(amountIn, reserveIn, reserveOut));
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeAmountResult('getAmountOut', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting amount out:', error.message);
        throw error;
    }
};

export const getAmountIn = async (provider, routerAddress, amountOut, reserveIn, reserveOut) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!routerAddress) {
            throw new Error('Router address is required');
        }
        
        if (!isValidAddress(routerAddress)) {
            throw new Error('Invalid router address format');
        }
        
        const txResponse = await provider.call(routerAddress, encodeGetAmountIn(amountOut, reserveIn, reserveOut));
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeAmountResult('getAmountIn', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting amount in:', error.message);
        throw error;
    }
};

export const getAmountsOut = async (provider, routerAddress, amountIn, path) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!routerAddress) {
            throw new Error('Router address is required');
        }
        
        if (!path || !Array.isArray(path) || path.length < 2) {
            throw new Error('Valid path with at least 2 addresses is required');
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
        
        const txResponse = await provider.call(routerAddress, encodeGetAmountsOut(amountIn, path));
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeAmountsResult('getAmountsOut', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting amounts out:', error.message);
        throw error;
    }
};

export const getAmountsIn = async (provider, routerAddress, amountOut, path) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!routerAddress) {
            throw new Error('Router address is required');
        }
        
        if (!path || !Array.isArray(path) || path.length < 2) {
            throw new Error('Valid path with at least 2 addresses is required');
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
        
        const txResponse = await provider.call(routerAddress, encodeGetAmountsIn(amountOut, path));
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeAmountsResult('getAmountsIn', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting amounts in:', error.message);
        throw error;
    }
};

// Helper functions for swap operations
export const swapETHForExactTokens = async (provider, routerAddress, amountOut, path, to, deadline) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!routerAddress) {
            throw new Error('Router address is required');
        }
        
        if (!path || !Array.isArray(path) || path.length < 2) {
            throw new Error('Valid path with at least 2 addresses is required');
        }
        
        if (!to) {
            throw new Error('Recipient address is required');
        }
        
        if (!isValidAddress(routerAddress)) {
            throw new Error('Invalid router address format');
        }
        
        if (!isValidAddress(to)) {
            throw new Error('Invalid recipient address format');
        }
        
        // Validate all addresses in path
        for (const address of path) {
            if (!isValidAddress(address)) {
                throw new Error(`Invalid address in path: ${address}`);
            }
        }
        
        const txData = encodeSwapETHForExactTokens(amountOut, path, to, deadline);
        
        return txData;
        
    } catch (error) {
        console.error('Error encoding swapETHForExactTokens:', error.message);
        throw error;
    }
};

export const swapExactETHForTokens = async (provider, routerAddress, amountOutMin, path, to, deadline) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!routerAddress) {
            throw new Error('Router address is required');
        }
        
        if (!path || !Array.isArray(path) || path.length < 2) {
            throw new Error('Valid path with at least 2 addresses is required');
        }
        
        if (!to) {
            throw new Error('Recipient address is required');
        }
        
        if (!isValidAddress(routerAddress)) {
            throw new Error('Invalid router address format');
        }
        
        if (!isValidAddress(to)) {
            throw new Error('Invalid recipient address format');
        }
        
        // Validate all addresses in path
        for (const address of path) {
            if (!isValidAddress(address)) {
                throw new Error(`Invalid address in path: ${address}`);
            }
        }
        
        const txData = encodeSwapExactETHForTokens(amountOutMin, path, to, deadline);
        
        return txData;
        
    } catch (error) {
        console.error('Error encoding swapExactETHForTokens:', error.message);
        throw error;
    }
};

export const swapExactETHForTokensSupportingFeeOnTransferTokens = async (provider, routerAddress, amountOutMin, path, to, deadline) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!routerAddress) {
            throw new Error('Router address is required');
        }
        
        if (!path || !Array.isArray(path) || path.length < 2) {
            throw new Error('Valid path with at least 2 addresses is required');
        }
        
        if (!to) {
            throw new Error('Recipient address is required');
        }
        
        if (!isValidAddress(routerAddress)) {
            throw new Error('Invalid router address format');
        }
        
        if (!isValidAddress(to)) {
            throw new Error('Invalid recipient address format');
        }
        
        // Validate all addresses in path
        for (const address of path) {
            if (!isValidAddress(address)) {
                throw new Error(`Invalid address in path: ${address}`);
            }
        }
        
        const txData = encodeSwapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin, path, to, deadline);
        
        return txData;
        
    } catch (error) {
        console.error('Error encoding swapExactETHForTokensSupportingFeeOnTransferTokens:', error.message);
        throw error;
    }
};

export const swapExactTokensForETH = async (provider, routerAddress, amountIn, amountOutMin, path, to, deadline) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!routerAddress) {
            throw new Error('Router address is required');
        }
        
        if (!path || !Array.isArray(path) || path.length < 2) {
            throw new Error('Valid path with at least 2 addresses is required');
        }
        
        if (!to) {
            throw new Error('Recipient address is required');
        }
        
        if (!isValidAddress(routerAddress)) {
            throw new Error('Invalid router address format');
        }
        
        if (!isValidAddress(to)) {
            throw new Error('Invalid recipient address format');
        }
        
        // Validate all addresses in path
        for (const address of path) {
            if (!isValidAddress(address)) {
                throw new Error(`Invalid address in path: ${address}`);
            }
        }
        
        const txData = encodeSwapExactTokensForETH(amountIn, amountOutMin, path, to, deadline);
        
        return txData;
        
    } catch (error) {
        console.error('Error encoding swapExactTokensForETH:', error.message);
        throw error;
    }
};

export const swapExactTokensForETHSupportingFeeOnTransferTokens = async (provider, routerAddress, amountIn, amountOutMin, path, to, deadline) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!routerAddress) {
            throw new Error('Router address is required');
        }
        
        if (!path || !Array.isArray(path) || path.length < 2) {
            throw new Error('Valid path with at least 2 addresses is required');
        }
        
        if (!to) {
            throw new Error('Recipient address is required');
        }
        
        if (!isValidAddress(routerAddress)) {
            throw new Error('Invalid router address format');
        }
        
        if (!isValidAddress(to)) {
            throw new Error('Invalid recipient address format');
        }
        
        // Validate all addresses in path
        for (const address of path) {
            if (!isValidAddress(address)) {
                throw new Error(`Invalid address in path: ${address}`);
            }
        }
        
        const txData = encodeSwapExactTokensForETHSupportingFeeOnTransferTokens(amountIn, amountOutMin, path, to, deadline);
        
        return txData;
        
    } catch (error) {
        console.error('Error encoding swapExactTokensForETHSupportingFeeOnTransferTokens:', error.message);
        throw error;
    }
};
