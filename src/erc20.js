import pkg from '@bcoders.gr/abi-codec';
const { ABICodec } = pkg;

// Standard ERC20 ABI definitions
const ERC20_ABI = [
    {
        "inputs": [{"internalType": "address", "name": "account", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "address", "name": "owner", "type": "address"},
            {"internalType": "address", "name": "spender", "type": "address"}
        ],
        "name": "allowance",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
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
        "inputs": [
            {"internalType": "address", "name": "spender", "type": "address"},
            {"internalType": "uint256", "name": "amount", "type": "uint256"}
        ],
        "name": "approve",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "address", "name": "to", "type": "address"},
            {"internalType": "uint256", "name": "amount", "type": "uint256"}
        ],
        "name": "transfer",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "address", "name": "from", "type": "address"},
            {"internalType": "address", "name": "to", "type": "address"},
            {"internalType": "uint256", "name": "amount", "type": "uint256"}
        ],
        "name": "transferFrom",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

// Create ABICodec instance with the ERC20 ABI
const abiCoder = new ABICodec(ERC20_ABI);

// Helper function to validate Ethereum address
const isValidAddress = (address) => {
    return typeof address === 'string' && 
           address.startsWith('0x') && 
           address.length === 42 && 
           /^0x[0-9a-fA-F]{40}$/.test(address);
};

// Helper function to get function ABI by name
const getFunctionAbi = (functionName) => {
    return ERC20_ABI.find(item => item.name === functionName);
};

// Encoding functions
export const encodeBalanceOf = (account) => {
    if (!isValidAddress(account)) {
        throw new Error(`Invalid address: ${account}`);
    }
    return abiCoder.encodeFunction('balanceOf', [account]);
};

export const encodeAllowance = (owner, spender) => {
    if (!isValidAddress(owner)) {
        throw new Error(`Invalid address: ${owner}`);
    }
    if (!isValidAddress(spender)) {
        throw new Error(`Invalid address: ${spender}`);
    }
    return abiCoder.encodeFunction('allowance', [owner, spender]);
};

export const encodeTotalSupply = () => {
    return abiCoder.encodeFunction('totalSupply', []);
};

export const encodeName = () => {
    return abiCoder.encodeFunction('name', []);
};

export const encodeSymbol = () => {
    return abiCoder.encodeFunction('symbol', []);
};

export const encodeDecimals = () => {
    return abiCoder.encodeFunction('decimals', []);
};

export const encodeApprove = (spender, amount) => {
    if (!isValidAddress(spender)) {
        throw new Error(`Invalid address: ${spender}`);
    }
    return abiCoder.encodeFunction('approve', [spender, amount]);
};

export const encodeTransfer = (to, amount) => {
    if (!isValidAddress(to)) {
        throw new Error(`Invalid address: ${to}`);
    }
    return abiCoder.encodeFunction('transfer', [to, amount]);
};

export const encodeTransferFrom = (from, to, amount) => {
    if (!isValidAddress(from)) {
        throw new Error(`Invalid address: ${from}`);
    }
    if (!isValidAddress(to)) {
        throw new Error(`Invalid address: ${to}`);
    }
    return abiCoder.encodeFunction('transferFrom', [from, to, amount]);
};

// Decoding functions
export const decodeBalanceOf = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeAllowance = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeTotalSupply = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeName = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeSymbol = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeDecimals = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeApprove = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeTransfer = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeTransferFrom = (data) => {
    return abiCoder.decodeFunction(data);
};

// Result decoding functions (for return values)
export const decodeUint256Result = (functionName, data) => {
    return abiCoder.decodeFunctionResult(functionName, data);
};

export const decodeStringResult = (functionName, data) => {
    return abiCoder.decodeFunctionResult(functionName, data);
};

export const decodeUint8Result = (functionName, data) => {
    return abiCoder.decodeFunctionResult(functionName, data);
};

export const decodeBoolResult = (functionName, data) => {
    return abiCoder.decodeFunctionResult(functionName, data);
};

// Export the ABI for external use
export const ERC20_TOKEN_ABI = ERC20_ABI;
