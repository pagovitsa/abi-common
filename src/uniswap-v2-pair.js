import pkg from '@bcoders.gr/abi-codec';
const { ABICodec } = pkg;

// Uniswap V2 Pair ABI definitions
const UNISWAP_V2_PAIR_ABI = [
    {
        "inputs": [],
        "name": "name",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "owner", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "token0",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "token1",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getReserves",
        "outputs": [
            {"internalType": "uint112", "name": "reserve0", "type": "uint112"},
            {"internalType": "uint112", "name": "reserve1", "type": "uint112"},
            {"internalType": "uint32", "name": "blockTimestampLast", "type": "uint32"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "price0CumulativeLast",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "price1CumulativeLast",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "kLast",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "to", "type": "address"}],
        "name": "mint",
        "outputs": [{"internalType": "uint256", "name": "liquidity", "type": "uint256"}],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "to", "type": "address"}],
        "name": "burn",
        "outputs": [
            {"internalType": "uint256", "name": "amount0", "type": "uint256"},
            {"internalType": "uint256", "name": "amount1", "type": "uint256"}
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "uint256", "name": "amount0Out", "type": "uint256"},
            {"internalType": "uint256", "name": "amount1Out", "type": "uint256"},
            {"internalType": "address", "name": "to", "type": "address"},
            {"internalType": "bytes", "name": "data", "type": "bytes"}
        ],
        "name": "swap",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "to", "type": "address"}],
        "name": "skim",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "sync",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

// Create ABICodec instance with the pair ABI
const abiCoder = new ABICodec(UNISWAP_V2_PAIR_ABI);

// Helper function to get function ABI by name
const getFunctionAbi = (functionName) => {
    return UNISWAP_V2_PAIR_ABI.find(item => item.name === functionName);
};

// Encoding functions
export const encodeName = () => {
    return abiCoder.encodeFunction('name', []);
};

export const encodeSymbol = () => {
    return abiCoder.encodeFunction('symbol', []);
};

export const encodeDecimals = () => {
    return abiCoder.encodeFunction('decimals', []);
};

export const encodeTotalSupply = () => {
    return abiCoder.encodeFunction('totalSupply', []);
};

export const encodeBalanceOf = (owner) => {
    return abiCoder.encodeFunction('balanceOf', [owner]);
};

export const encodeToken0 = () => {
    return abiCoder.encodeFunction('token0', []);
};

export const encodeToken1 = () => {
    return abiCoder.encodeFunction('token1', []);
};

export const encodeGetReserves = () => {
    return abiCoder.encodeFunction('getReserves', []);
};

export const encodePrice0CumulativeLast = () => {
    return abiCoder.encodeFunction('price0CumulativeLast', []);
};

export const encodePrice1CumulativeLast = () => {
    return abiCoder.encodeFunction('price1CumulativeLast', []);
};

export const encodeKLast = () => {
    return abiCoder.encodeFunction('kLast', []);
};

// Decoding functions
export const decodeName = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeSymbol = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeDecimals = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeTotalSupply = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeBalanceOf = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeToken0 = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeToken1 = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeGetReserves = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodePrice0CumulativeLast = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodePrice1CumulativeLast = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeKLast = (data) => {
    return abiCoder.decodeFunction(data);
};

// Result decoding functions (for return values)
export const decodeStringResult = (functionName, data) => {
    return abiCoder.decodeFunctionResult(functionName, data);
};

export const decodeUint8Result = (functionName, data) => {
    return abiCoder.decodeFunctionResult(functionName, data);
};

export const decodeUint256Result = (functionName, data) => {
    return abiCoder.decodeFunctionResult(functionName, data);
};

export const decodeAddressResult = (functionName, data) => {
    return abiCoder.decodeFunctionResult(functionName, data);
};

export const decodeReservesResult = (data) => {
    return abiCoder.decodeFunctionResult('getReserves', data);
};

// Helper function to validate Ethereum address
const isValidAddress = (address) => {
    return typeof address === 'string' && 
           address.startsWith('0x') && 
           address.length === 42 && 
           /^0x[0-9a-fA-F]{40}$/.test(address);
};

// Helper functions for Uniswap V2 Pair interactions
export const getPairName = async (provider, pairAddress) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!pairAddress) {
            throw new Error('Pair address is required');
        }
        
        if (!isValidAddress(pairAddress)) {
            throw new Error('Invalid pair address format');
        }
        
        const txResponse = await provider.call(pairAddress, encodeName());
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeStringResult('name', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting pair name:', error.message);
        throw error;
    }
};

export const getPairSymbol = async (provider, pairAddress) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!pairAddress) {
            throw new Error('Pair address is required');
        }
        
        if (!isValidAddress(pairAddress)) {
            throw new Error('Invalid pair address format');
        }
        
        const txResponse = await provider.call(pairAddress, encodeSymbol());
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeStringResult('symbol', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting pair symbol:', error.message);
        throw error;
    }
};

export const getPairDecimals = async (provider, pairAddress) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!pairAddress) {
            throw new Error('Pair address is required');
        }
        
        if (!isValidAddress(pairAddress)) {
            throw new Error('Invalid pair address format');
        }
        
        const txResponse = await provider.call(pairAddress, encodeDecimals());
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeUint8Result('decimals', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting pair decimals:', error.message);
        throw error;
    }
};

export const getPairTotalSupply = async (provider, pairAddress) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!pairAddress) {
            throw new Error('Pair address is required');
        }
        
        if (!isValidAddress(pairAddress)) {
            throw new Error('Invalid pair address format');
        }
        
        const txResponse = await provider.call(pairAddress, encodeTotalSupply());
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeUint256Result('totalSupply', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting pair total supply:', error.message);
        throw error;
    }
};

export const getPairBalanceOf = async (provider, pairAddress, owner) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!pairAddress) {
            throw new Error('Pair address is required');
        }
        
        if (!owner) {
            throw new Error('Owner address is required');
        }
        
        if (!isValidAddress(pairAddress)) {
            throw new Error('Invalid pair address format');
        }
        
        if (!isValidAddress(owner)) {
            throw new Error('Invalid owner address format');
        }
        
        const txResponse = await provider.call(pairAddress, encodeBalanceOf(owner));
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeUint256Result('balanceOf', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting pair balance:', error.message);
        throw error;
    }
};

export const getToken0 = async (provider, pairAddress) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!pairAddress) {
            throw new Error('Pair address is required');
        }
        
        if (!isValidAddress(pairAddress)) {
            throw new Error('Invalid pair address format');
        }
        
        const txResponse = await provider.call(pairAddress, encodeToken0());
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeAddressResult('token0', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting token0:', error.message);
        throw error;
    }
};

export const getToken1 = async (provider, pairAddress) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!pairAddress) {
            throw new Error('Pair address is required');
        }
        
        if (!isValidAddress(pairAddress)) {
            throw new Error('Invalid pair address format');
        }
        
        const txResponse = await provider.call(pairAddress, encodeToken1());
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeAddressResult('token1', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting token1:', error.message);
        throw error;
    }
};

export const getPairReserves = async (provider, pairAddress) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!pairAddress) {
            throw new Error('Pair address is required');
        }
        
        if (!isValidAddress(pairAddress)) {
            throw new Error('Invalid pair address format');
        }
        
        const txResponse = await provider.call(pairAddress, encodeGetReserves());
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeReservesResult(txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        // Return structured reserves data
        return {
            reserve0: response[0],
            reserve1: response[1],
            blockTimestampLast: response[2]
        };
        
    } catch (error) {
        console.error('Error getting reserves:', error.message);
        throw error;
    }
};

export const getPrice0CumulativeLast = async (provider, pairAddress) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!pairAddress) {
            throw new Error('Pair address is required');
        }
        
        if (!isValidAddress(pairAddress)) {
            throw new Error('Invalid pair address format');
        }
        
        const txResponse = await provider.call(pairAddress, encodePrice0CumulativeLast());
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeUint256Result('price0CumulativeLast', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting price0CumulativeLast:', error.message);
        throw error;
    }
};

export const getPrice1CumulativeLast = async (provider, pairAddress) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!pairAddress) {
            throw new Error('Pair address is required');
        }
        
        if (!isValidAddress(pairAddress)) {
            throw new Error('Invalid pair address format');
        }
        
        const txResponse = await provider.call(pairAddress, encodePrice1CumulativeLast());
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeUint256Result('price1CumulativeLast', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting price1CumulativeLast:', error.message);
        throw error;
    }
};

export const getKLast = async (provider, pairAddress) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!pairAddress) {
            throw new Error('Pair address is required');
        }
        
        if (!isValidAddress(pairAddress)) {
            throw new Error('Invalid pair address format');
        }
        
        const txResponse = await provider.call(pairAddress, encodeKLast());
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeUint256Result('kLast', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting kLast:', error.message);
        throw error;
    }
};

// Export the ABI for external use
export const PAIR_ABI = UNISWAP_V2_PAIR_ABI;
