import pkg from '@bcoders.gr/abi-codec';
const { ABICodec } = pkg;

// Informer contract ABI definitions
const INFORMER_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "contractAddress",
                "type": "address"
            }
        ],
        "name": "getOwner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "pairAddress",
                "type": "address"
            }
        ],
        "name": "getPairAndTokenDetails",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "pairAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint8",
                        "name": "decimals",
                        "type": "uint8"
                    },
                    {
                        "internalType": "string",
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalSupply",
                        "type": "uint256"
                    },
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "tokenAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "uint8",
                                "name": "decimals",
                                "type": "uint8"
                            },
                            {
                                "internalType": "string",
                                "name": "symbol",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "totalSupply",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct UniswapPairTokenDetails.TokenDetails",
                        "name": "token0Details",
                        "type": "tuple"
                    },
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "tokenAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "uint8",
                                "name": "decimals",
                                "type": "uint8"
                            },
                            {
                                "internalType": "string",
                                "name": "symbol",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "totalSupply",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct UniswapPairTokenDetails.TokenDetails",
                        "name": "token1Details",
                        "type": "tuple"
                    }
                ],
                "internalType": "struct UniswapPairTokenDetails.PairDetails",
                "name": "pairDetails",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "pairAddress",
                "type": "address"
            }
        ],
        "name": "getReserves",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint112",
                        "name": "reserve0",
                        "type": "uint112"
                    },
                    {
                        "internalType": "uint112",
                        "name": "reserve1",
                        "type": "uint112"
                    },
                    {
                        "internalType": "uint256",
                        "name": "blockNumber",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct UniswapPairTokenDetails.Reserves",
                "name": "reserves",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "walletAddress",
                "type": "address"
            }
        ],
        "name": "getTokenBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            }
        ],
        "name": "getTotalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

// Create ABICodec instance with the informer ABI
const abiCoder = new ABICodec(INFORMER_ABI);

// Helper function to get function ABI by name
const getFunctionAbi = (functionName) => {
    return INFORMER_ABI.find(item => item.name === functionName);
};

// Encoding functions
export const encodeGetOwner = (contractAddress) => {
    return abiCoder.encodeFunction('getOwner', [contractAddress]);
};

export const encodeGetPairAndTokenDetails = (pairAddress) => {
    return abiCoder.encodeFunction('getPairAndTokenDetails', [pairAddress]);
};

export const encodeGetReserves = (pairAddress) => {
    return abiCoder.encodeFunction('getReserves', [pairAddress]);
};

export const encodeGetTokenBalance = (tokenAddress, walletAddress) => {
    return abiCoder.encodeFunction('getTokenBalance', [tokenAddress, walletAddress]);
};

export const encodeGetTotalSupply = (tokenAddress) => {
    return abiCoder.encodeFunction('getTotalSupply', [tokenAddress]);
};

// Decoding functions
export const decodeGetOwner = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeGetPairAndTokenDetails = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeGetReserves = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeGetTokenBalance = (data) => {
    return abiCoder.decodeFunction(data);
};

export const decodeGetTotalSupply = (data) => {
    return abiCoder.decodeFunction(data);
};

// Result decoding functions (for return values)
export const decodeOwnerResult = (data) => {
    return abiCoder.decodeFunctionResult('getOwner', data);
};

export const decodePairAndTokenDetailsResult = (data) => {
    return abiCoder.decodeFunctionResult('getPairAndTokenDetails', data);
};

export const decodeReservesResult = (data) => {
    // Manual decoding for complex tuple when library doesn't support it
    if (!data || data === '0x') {
        throw new Error('Invalid or empty hex data provided');
    }
    
    try {
        return abiCoder.decodeFunctionResult('getReserves', data);
    } catch (error) {
        if (error.message.includes('Tuple decoding not yet implemented')) {
            // Manual parsing for reserves tuple: (uint112 reserve0, uint112 reserve1, uint32 blockNumber)
            // Skip first 32 bytes (0x20) which is the offset pointer
            const cleanData = data.startsWith('0x') ? data.slice(2) : data;
            
            if (cleanData.length < 128) { // Need at least 64 chars for the basic data
                throw new Error('Insufficient data for reserves decoding');
            }
            
            // Parse the hex data manually
            // First 64 chars after offset are reserve0 (32 bytes but only 14 bytes used for uint112)
            const reserve0Hex = cleanData.slice(64, 128);
            const reserve0 = BigInt('0x' + reserve0Hex);
            
            // Next 64 chars are reserve1
            const reserve1Hex = cleanData.slice(128, 192);
            const reserve1 = BigInt('0x' + reserve1Hex);
            
            // Next 64 chars are blockNumber (uint32 but padded to 32 bytes)
            const blockNumberHex = cleanData.slice(192, 256);
            const blockNumber = BigInt('0x' + blockNumberHex);
            
            return [{
                reserve0: reserve0,
                reserve1: reserve1,
                blockNumber: blockNumber
            }];
        }
        throw error;
    }
};

export const decodeTokenBalanceResult = (data) => {
    return abiCoder.decodeFunctionResult('getTokenBalance', data);
};

export const decodeTotalSupplyResult = (data) => {
    return abiCoder.decodeFunctionResult('getTotalSupply', data);
};

// Helper functions to parse complex return structures
export const parsePairDetails = (decodedResult) => {
    // decodedResult is already structured from decodeFunctionResult
    const pairDetails = decodedResult[0] || decodedResult;
    if (Array.isArray(pairDetails)) {
        return {
            pairAddress: pairDetails[0],
            name: pairDetails[1],
            decimals: pairDetails[2],
            symbol: pairDetails[3],
            totalSupply: pairDetails[4],
            token0Details: {
                tokenAddress: pairDetails[5][0],
                name: pairDetails[5][1],
                decimals: pairDetails[5][2],
                symbol: pairDetails[5][3],
                totalSupply: pairDetails[5][4]
            },
            token1Details: {
                tokenAddress: pairDetails[6][0],
                name: pairDetails[6][1],
                decimals: pairDetails[6][2],
                symbol: pairDetails[6][3],
                totalSupply: pairDetails[6][4]
            }
        };
    }
    return pairDetails; // Return as-is if already structured
};

export const parseReserves = (decodedResult) => {
    // decodedResult is already structured from decodeFunctionResult
    const reserves = decodedResult[0] || decodedResult;
    if (Array.isArray(reserves)) {
        return {
            reserve0: reserves[0],
            reserve1: reserves[1],
            blockNumber: reserves[2]
        };
    }
    return reserves; // Return as-is if already structured
};

// Export the ABI for external use
export const INFORMER_CONTRACT_ABI = INFORMER_ABI;

// Helper function to get pair and token details with error handling
export const getPairAndTokenDetails = async (provider, pairAddress, informerAddress = "0x6cc4d0b709ee830fc6c4e124120596ede74ad2fb") => {
    try {
        if (!provider) {
            throw new Error('Provider is required');
        }
        
        if (!pairAddress) {
            throw new Error('Pair address is required');
        }
        
        // Validate address format (basic check)
        if (!pairAddress.startsWith('0x') || pairAddress.length !== 42) {
            throw new Error('Invalid pair address format');
        }
        
        const txResponse = await provider.call(informerAddress, encodeGetPairAndTokenDetails(pairAddress));
        
        if (!txResponse) {
            throw new Error('No response from contract call');
        }
        
        const response = decodePairAndTokenDetailsResult(txResponse);
        
        if (!response || !Array.isArray(response) || response.length === 0) {
            throw new Error('Invalid response format or empty response');
        }
        
        const pairData = response[0];
        
        if (!pairData || !pairData.pairAddress) {
            throw new Error('Invalid pair data received');
        }
        
        return pairData;
        
    } catch (error) {
        console.error('Error getting pair and token details:', error.message);
        throw error;
    }
};
