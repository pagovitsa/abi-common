import pkg from '@bcoders.gr/abi-codec';
const { ABICodec } = pkg;

// Uniswap V2 Factory ABI definitions
const UNISWAP_V2_FACTORY_ABI = [
    {
        "inputs": [
            {"internalType": "address", "name": "tokenA", "type": "address"},
            {"internalType": "address", "name": "tokenB", "type": "address"}
        ],
        "name": "createPair",
        "outputs": [{"internalType": "address", "name": "pair", "type": "address"}],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "address", "name": "tokenA", "type": "address"},
            {"internalType": "address", "name": "tokenB", "type": "address"}
        ],
        "name": "getPair",
        "outputs": [{"internalType": "address", "name": "pair", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "name": "allPairs",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "allPairsLength",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "feeTo",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "feeToSetter",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "_feeTo", "type": "address"}],
        "name": "setFeeTo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "_feeToSetter", "type": "address"}],
        "name": "setFeeToSetter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": true, "internalType": "address", "name": "token0", "type": "address"},
            {"indexed": true, "internalType": "address", "name": "token1", "type": "address"},
            {"indexed": false, "internalType": "address", "name": "pair", "type": "address"},
            {"indexed": false, "internalType": "uint256", "name": "", "type": "uint256"}
        ],
        "name": "PairCreated",
        "type": "event"
    }
];

// Create ABICodec instance with the factory ABI
const abiCoder = new ABICodec(UNISWAP_V2_FACTORY_ABI);

// Helper function to get function ABI by name
const getFunctionAbi = (functionName) => {
    return UNISWAP_V2_FACTORY_ABI.find(item => item.name === functionName);
};

// Encoding functions
export const encodeCreatePair = (tokenA, tokenB) => {
    return abiCoder.encodeFunction('createPair', [tokenA, tokenB]);
};

export const encodeGetPair = (tokenA, tokenB) => {
    return abiCoder.encodeFunction('getPair', [tokenA, tokenB]);
};

export const encodeAllPairs = (index) => {
    return abiCoder.encodeFunction('allPairs', [index]);
};

export const encodeAllPairsLength = () => {
    return abiCoder.encodeFunction('allPairsLength', []);
};

export const encodeFeeTo = () => {
    return abiCoder.encodeFunction('feeTo', []);
};

export const encodeFeeToSetter = () => {
    return abiCoder.encodeFunction('feeToSetter', []);
};

export const encodeSetFeeTo = (feeTo) => {
    return abiCoder.encodeFunction('setFeeTo', [feeTo]);
};

export const encodeSetFeeToSetter = (feeToSetter) => {
    return abiCoder.encodeFunction('setFeeToSetter', [feeToSetter]);
};

// Decoding functions
export const decodeCreatePair = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeGetPair = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeAllPairs = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeAllPairsLength = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeFeeTo = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeFeeToSetter = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeSetFeeTo = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeSetFeeToSetter = (data) => {
    return abiCoder.decodeFunction(data);
};

// Result decoding functions (for return values)
export const decodeAddressResult = (functionName, data) => {
    return abiCoder.decodeFunctionResult(functionName, data);
};

export const decodeUintResult = (functionName, data) => {
    return abiCoder.decodeFunctionResult(functionName, data);
};

// Event decoding functions
export const decodePairCreatedEvent = (data, topics) => {
    if (!data || !topics || topics.length < 3) {
        throw new Error('Invalid PairCreated event data or topics');
    }
    
    try {
        return abiCoder.decodeLog(data, topics);
    } catch (error) {
        throw new Error(`Failed to decode PairCreated event: ${error.message}`);
    }
};

// Export the ABI for external use
export const FACTORY_ABI = UNISWAP_V2_FACTORY_ABI;

// Helper function to validate Ethereum address
const isValidAddress = (address) => {
    return typeof address === 'string' && 
           address.startsWith('0x') && 
           address.length === 42 && 
           /^0x[0-9a-fA-F]{40}$/.test(address);
};

// Helper functions for Uniswap V2 Factory interactions
export const getPair = async (provider, factoryAddress, tokenA, tokenB) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!factoryAddress) {
            throw new Error('Factory address is required');
        }
        
        if (!tokenA) {
            throw new Error('Token A address is required');
        }
        
        if (!tokenB) {
            throw new Error('Token B address is required');
        }
        
        if (!isValidAddress(factoryAddress)) {
            throw new Error('Invalid factory address format');
        }
        
        if (!isValidAddress(tokenA)) {
            throw new Error('Invalid token A address format');
        }
        
        if (!isValidAddress(tokenB)) {
            throw new Error('Invalid token B address format');
        }
        
        const txResponse = await provider.call(factoryAddress, encodeGetPair(tokenA, tokenB));
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeAddressResult('getPair', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting pair address:', error.message);
        throw error;
    }
};

export const getAllPairs = async (provider, factoryAddress, index) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!factoryAddress) {
            throw new Error('Factory address is required');
        }
        
        if (typeof index !== 'number' || index < 0) {
            throw new Error('Valid index is required');
        }
        
        if (!isValidAddress(factoryAddress)) {
            throw new Error('Invalid factory address format');
        }
        
        const txResponse = await provider.call(factoryAddress, encodeAllPairs(index));
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeAddressResult('allPairs', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting pair by index:', error.message);
        throw error;
    }
};

export const getAllPairsLength = async (provider, factoryAddress) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!factoryAddress) {
            throw new Error('Factory address is required');
        }
        
        if (!isValidAddress(factoryAddress)) {
            throw new Error('Invalid factory address format');
        }
        
        const txResponse = await provider.call(factoryAddress, encodeAllPairsLength());
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeUintResult('allPairsLength', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting pairs length:', error.message);
        throw error;
    }
};

export const getFeeTo = async (provider, factoryAddress) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!factoryAddress) {
            throw new Error('Factory address is required');
        }
        
        if (!isValidAddress(factoryAddress)) {
            throw new Error('Invalid factory address format');
        }
        
        const txResponse = await provider.call(factoryAddress, encodeFeeTo());
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeAddressResult('feeTo', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting feeTo address:', error.message);
        throw error;
    }
};

export const getFeeToSetter = async (provider, factoryAddress) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!factoryAddress) {
            throw new Error('Factory address is required');
        }
        
        if (!isValidAddress(factoryAddress)) {
            throw new Error('Invalid factory address format');
        }
        
        const txResponse = await provider.call(factoryAddress, encodeFeeToSetter());
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeAddressResult('feeToSetter', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting feeToSetter address:', error.message);
        throw error;
    }
};
