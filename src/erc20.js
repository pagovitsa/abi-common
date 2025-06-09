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

// Helper functions for ERC20 token interactions
export const getBalanceOf = async (provider, tokenAddress, account) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!tokenAddress) {
            throw new Error('Token address is required');
        }
        
        if (!account) {
            throw new Error('Account address is required');
        }
        
        if (!isValidAddress(tokenAddress)) {
            throw new Error('Invalid token address format');
        }
        
        if (!isValidAddress(account)) {
            throw new Error('Invalid account address format');
        }
        
        const txResponse = await provider.call(tokenAddress, encodeBalanceOf(account));
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeUint256Result('balanceOf', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting token balance:', error.message);
        throw error;
    }
};

export const getAllowance = async (provider, tokenAddress, owner, spender) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!tokenAddress) {
            throw new Error('Token address is required');
        }
        
        if (!owner) {
            throw new Error('Owner address is required');
        }
        
        if (!spender) {
            throw new Error('Spender address is required');
        }
        
        if (!isValidAddress(tokenAddress)) {
            throw new Error('Invalid token address format');
        }
        
        if (!isValidAddress(owner)) {
            throw new Error('Invalid owner address format');
        }
        
        if (!isValidAddress(spender)) {
            throw new Error('Invalid spender address format');
        }
        
        const txResponse = await provider.call(tokenAddress, encodeAllowance(owner, spender));
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeUint256Result('allowance', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting allowance:', error.message);
        throw error;
    }
};

export const getTokenTotalSupply = async (provider, tokenAddress) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!tokenAddress) {
            throw new Error('Token address is required');
        }
        
        if (!isValidAddress(tokenAddress)) {
            throw new Error('Invalid token address format');
        }
        
        const txResponse = await provider.call(tokenAddress, encodeTotalSupply());
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeUint256Result('totalSupply', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting total supply:', error.message);
        throw error;
    }
};

export const getTokenName = async (provider, tokenAddress) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!tokenAddress) {
            throw new Error('Token address is required');
        }
        
        if (!isValidAddress(tokenAddress)) {
            throw new Error('Invalid token address format');
        }
        
        const txResponse = await provider.call(tokenAddress, encodeName());
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeStringResult('name', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting token name:', error.message);
        throw error;
    }
};

export const getTokenSymbol = async (provider, tokenAddress) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!tokenAddress) {
            throw new Error('Token address is required');
        }
        
        if (!isValidAddress(tokenAddress)) {
            throw new Error('Invalid token address format');
        }
        
        const txResponse = await provider.call(tokenAddress, encodeSymbol());
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeStringResult('symbol', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting token symbol:', error.message);
        throw error;
    }
};

export const getTokenDecimals = async (provider, tokenAddress) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!tokenAddress) {
            throw new Error('Token address is required');
        }
        
        if (!isValidAddress(tokenAddress)) {
            throw new Error('Invalid token address format');
        }
        
        const txResponse = await provider.call(tokenAddress, encodeDecimals());
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodeUint8Result('decimals', txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        return response[0];
        
    } catch (error) {
        console.error('Error getting token decimals:', error.message);
        throw error;
    }
};

// Helper function for approve operation (returns transaction data)
export const approve = async (provider, tokenAddress, spender, amount) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!tokenAddress) {
            throw new Error('Token address is required');
        }
        
        if (!spender) {
            throw new Error('Spender address is required');
        }
        
        if (!amount && amount !== 0) {
            throw new Error('Amount is required');
        }
        
        if (!isValidAddress(tokenAddress)) {
            throw new Error('Invalid token address format');
        }
        
        if (!isValidAddress(spender)) {
            throw new Error('Invalid spender address format');
        }
        
        const txData = encodeApprove(spender, amount);
        
        return txData;
        
    } catch (error) {
        console.error('Error encoding approve transaction:', error.message);
        throw error;
    }
};

// Helper function for transfer operation (returns transaction data)
export const transfer = async (provider, tokenAddress, to, amount) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!tokenAddress) {
            throw new Error('Token address is required');
        }
        
        if (!to) {
            throw new Error('Recipient address is required');
        }
        
        if (!amount && amount !== 0) {
            throw new Error('Amount is required');
        }
        
        if (!isValidAddress(tokenAddress)) {
            throw new Error('Invalid token address format');
        }
        
        if (!isValidAddress(to)) {
            throw new Error('Invalid recipient address format');
        }
        
        const txData = encodeTransfer(to, amount);
        
        return txData;
        
    } catch (error) {
        console.error('Error encoding transfer transaction:', error.message);
        throw error;
    }
};

// Helper function for transferFrom operation (returns transaction data)
export const transferFrom = async (provider, tokenAddress, from, to, amount) => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!tokenAddress) {
            throw new Error('Token address is required');
        }
        
        if (!from) {
            throw new Error('From address is required');
        }
        
        if (!to) {
            throw new Error('To address is required');
        }
        
        if (!amount && amount !== 0) {
            throw new Error('Amount is required');
        }
        
        if (!isValidAddress(tokenAddress)) {
            throw new Error('Invalid token address format');
        }
        
        if (!isValidAddress(from)) {
            throw new Error('Invalid from address format');
        }
        
        if (!isValidAddress(to)) {
            throw new Error('Invalid to address format');
        }
        
        const txData = encodeTransferFrom(from, to, amount);
        
        return txData;
        
    } catch (error) {
        console.error('Error encoding transferFrom transaction:', error.message);
        throw error;
    }
};
