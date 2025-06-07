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

// Export the ABI for external use
export const FACTORY_ABI = UNISWAP_V2_FACTORY_ABI;
