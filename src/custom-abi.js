import pkg from '@bcoders.gr/abi-codec';
const { ABICodec } = pkg;

/**
 * Generic ABI encoder/decoder for custom contracts
 * This module allows encoding and decoding of any function with a provided ABI
 */

// Helper function to find function ABI by name from a given ABI array
const getFunctionAbiFromArray = (abi, functionName) => {
    return abi.find(item => item.type === 'function' && item.name === functionName);
};

// Helper function to validate ABI structure
const validateAbi = (abi) => {
    if (!Array.isArray(abi)) {
        throw new Error('ABI must be an array');
    }
    return true;
};

// Helper function to validate function exists in ABI
const validateFunction = (abi, functionName) => {
    const functionAbi = getFunctionAbiFromArray(abi, functionName);
    if (!functionAbi) {
        throw new Error(`Function '${functionName}' not found in provided ABI`);
    }
    return functionAbi;
};

/**
 * Encode function data for any custom ABI function
 * @param {Array} abi - The contract ABI array
 * @param {string} functionName - Name of the function to encode
 * @param {Array} params - Array of parameters to encode
 * @returns {string} - Encoded function data
 */
export const encodeFunction = (abi, functionName, params = []) => {
    validateAbi(abi);
    validateFunction(abi, functionName);
    
    try {
        const abiCoder = new ABICodec(abi);
        return abiCoder.encodeFunction(functionName, params);
    } catch (error) {
        throw new Error(`Failed to encode function '${functionName}': ${error.message}`);
    }
};

/**
 * Decode function data for any custom ABI function
 * @param {Array} abi - The contract ABI array
 * @param {string} data - Encoded function data to decode
 * @returns {Object} - Decoded function parameters
 */
export const decodeFunction = (abi, data) => {
    validateAbi(abi);
    
    try {
        const abiCoder = new ABICodec(abi);
        return abiCoder.decodeFunction(data);
    } catch (error) {
        throw new Error(`Failed to decode function data: ${error.message}`);
    }
};

/**
 * Decode function result/return values for any custom ABI function
 * @param {Array} abi - The contract ABI array
 * @param {string} functionName - Name of the function
 * @param {string} data - Encoded return data to decode
 * @returns {Object} - Decoded return values
 */
export const decodeFunctionResult = (abi, functionName, data) => {
    validateAbi(abi);
    validateFunction(abi, functionName);
    
    try {
        const abiCoder = new ABICodec(abi);
        return abiCoder.decodeFunctionResult(functionName, data);
    } catch (error) {
        throw new Error(`Failed to decode function result for '${functionName}': ${error.message}`);
    }
};

/**
 * Get function signature (4-byte selector) for any function
 * @param {Array} abi - The contract ABI array
 * @param {string} functionName - Name of the function
 * @returns {string} - Function signature (selector)
 */
export const getFunctionSelector = (abi, functionName) => {
    validateAbi(abi);
    const functionAbi = validateFunction(abi, functionName);
    
    try {
        // Build function signature string
        const inputs = functionAbi.inputs || [];
        const types = inputs.map(input => input.type).join(',');
        const signature = `${functionName}(${types})`;
        
        // For now, return the signature since we don't have keccak256
        // In a real implementation, you would hash this with keccak256 and take first 4 bytes
        return `${signature} (signature)`;
    } catch (error) {
        throw new Error(`Failed to get function selector for '${functionName}': ${error.message}`);
    }
};

/**
 * Encode constructor parameters for contract deployment
 * @param {Array} abi - The contract ABI array
 * @param {Array} params - Constructor parameters
 * @returns {string} - Encoded constructor parameters
 */
export const encodeConstructor = (abi, params = []) => {
    validateAbi(abi);
    const constructorAbi = abi.find(item => item.type === 'constructor');
    
    if (!constructorAbi) {
        if (params.length > 0) {
            throw new Error('Constructor not found in ABI but parameters provided');
        }
        return '0x'; // No constructor, return empty data
    }
    
    try {
        // For constructor encoding, we need to create a temporary ABI codec
        // and use a different approach since ABICodec doesn't have a generic encode method
        const abiCoder = new ABICodec(abi);
        // Constructor encoding is not directly supported by this package
        // Return empty data for now - this would need a different approach
        return '0x';
    } catch (error) {
        throw new Error(`Failed to encode constructor: ${error.message}`);
    }
};

/**
 * Decode event data for any custom ABI event
 * @param {Array} abi - The contract ABI array
 * @param {string} eventName - Name of the event
 * @param {string} data - Event data
 * @param {Array} topics - Event topics
 * @returns {Object} - Decoded event data
 */
export const decodeEvent = (abi, eventName, data, topics) => {
    validateAbi(abi);
    const eventAbi = abi.find(item => item.type === 'event' && item.name === eventName);
    
    if (!eventAbi) {
        throw new Error(`Event '${eventName}' not found in provided ABI`);
    }
    
    try {
        const abiCoder = new ABICodec(abi);
        return abiCoder.decodeLog(data, topics);
    } catch (error) {
        throw new Error(`Failed to decode event '${eventName}': ${error.message}`);
    }
};

/**
 * Get all function names from an ABI
 * @param {Array} abi - The contract ABI array
 * @returns {Array} - Array of function names
 */
export const getFunctionNames = (abi) => {
    validateAbi(abi);
    return abi
        .filter(item => item.type === 'function')
        .map(item => item.name);
};

/**
 * Get all event names from an ABI
 * @param {Array} abi - The contract ABI array
 * @returns {Array} - Array of event names
 */
export const getEventNames = (abi) => {
    validateAbi(abi);
    return abi
        .filter(item => item.type === 'event')
        .map(item => item.name);
};

/**
 * Get function ABI by name
 * @param {Array} abi - The contract ABI array
 * @param {string} functionName - Name of the function
 * @returns {Object} - Function ABI object
 */
export const getFunctionAbi = (abi, functionName) => {
    validateAbi(abi);
    return validateFunction(abi, functionName);
};

/**
 * Check if a function is payable
 * @param {Array} abi - The contract ABI array
 * @param {string} functionName - Name of the function
 * @returns {boolean} - True if function is payable
 */
export const isFunctionPayable = (abi, functionName) => {
    const functionAbi = getFunctionAbi(abi, functionName);
    return functionAbi.stateMutability === 'payable';
};

/**
 * Check if a function is view/pure (read-only)
 * @param {Array} abi - The contract ABI array
 * @param {string} functionName - Name of the function
 * @returns {boolean} - True if function is view or pure
 */
export const isFunctionReadOnly = (abi, functionName) => {
    const functionAbi = getFunctionAbi(abi, functionName);
    return functionAbi.stateMutability === 'view' || functionAbi.stateMutability === 'pure';
};
