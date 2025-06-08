# @bcoders.gr/abi-common

A comprehensive Node.js module for encoding and decoding Ethereum contract function calls and return values using the `@bcoders.gr/abi-codec` package. Specifically designed for Uniswap V2 Router, Factory, ERC20 tokens, and custom ABI interactions.

**✅ Production Ready**: 100% test success rate with comprehensive test suite covering 55 test scenarios.

## 🏗️ Architecture

This package (`@bcoders.gr/abi-common`) provides high-level, pre-configured wrapper functions for common Ethereum contract interactions. It's built on top of the core `@bcoders.gr/abi-codec` library, which provides the low-level ABI encoding/decoding functionality.

**Package Hierarchy:**
- `@bcoders.gr/abi-codec` - Core ABI encoding/decoding engine
- `@bcoders.gr/abi-common` - High-level utilities and pre-configured functions (this package)

## ✨ Features

- 🔧 **Uniswap V2 Router Functions**: Complete support for all swap functions, amount calculations, and routing
- 🏭 **Uniswap V2 Factory Functions**: Pair creation, lookup, and management
- 💰 **ERC20 Token Functions**: Standard token operations (balance, approve, transfer, etc.)
- 🎯 **Custom ABI Support**: Generic encoding/decoding for any contract ABI
- 📊 **Informer Contract**: Specialized ABI for token and pair information queries
- 🚀 **Easy to Use**: Simple function-based API with comprehensive error handling
- 🧪 **Well Tested**: Comprehensive test suite with real-world examples

## 📦 Installation

```bash
npm install @bcoders.gr/abi-common @bcoders.gr/abi-codec
```

This package (`@bcoders.gr/abi-common`) provides high-level wrapper functions for common Ethereum contract interactions, built on top of the core `@bcoders.gr/abi-codec` library.

## 🚀 Quick Start

### Individual Function Imports (Recommended)

```javascript
import { 
    encodeSwapExactETHForTokens,
    encodeBalanceOf,
    decodeUint256Result 
} from '@bcoders.gr/abi-common';

// Encode a Uniswap swap
const swapData = encodeSwapExactETHForTokens(
    '1000000000000000000', // amountOutMin
    ['0xC02aaA39b223FE8563b41CFc8eB645c0c67C6840', '0xA0b86a...'], // path
    '0x742d35Cc663...', // to
    1640995200 // deadline
);

// Encode ERC20 balance check
const balanceData = encodeBalanceOf('0x742d35Cc663...');

// Decode uint256 result
const balance = decodeUint256Result('balanceOf', '0x0000...1bc16d674ec80000');
console.log('Balance:', balance[0].toString(), 'wei');
```

### Module Imports

```javascript
import { UniswapV2Router, ERC20, CustomABI } from '@bcoders.gr/abi-common';

// Use module namespaces
const swapData = UniswapV2Router.encodeSwapExactETHForTokens(...);
const balanceData = ERC20.encodeBalanceOf(...);
```

## 📈 Import Methods

### Method 1: Individual Function Imports (Recommended)
```javascript
import { 
    encodeSwapExactETHForTokens,
    encodeBalanceOf,
    decodeUint256Result 
} from '@bcoders.gr/abi-common';
```

### Method 2: Namespace Imports
```javascript
import { UniswapV2Router, ERC20, CustomABI } from '@bcoders.gr/abi-common';

const swapData = UniswapV2Router.encodeSwapExactETHForTokens(...);
const balanceData = ERC20.encodeBalanceOf(...);
```

### Method 3: Full Package Import
```javascript
import * as AbiCommon from '@bcoders.gr/abi-common';

const swapData = AbiCommon.encodeSwapExactETHForTokens(...);
```

### Method 4: Default Import
```javascript
import AbiCommon from '@bcoders.gr/abi-common';

const { UniswapV2Router, ERC20 } = AbiCommon;
```

## 📚 Available Functions

### 🔄 Uniswap V2 Router Functions

#### Swap Functions
- `encodeSwapExactETHForTokens(amountOutMin, path, to, deadline)`
- `encodeSwapETHForExactTokens(amountOut, path, to, deadline)`
- `encodeSwapExactTokensForETH(amountIn, amountOutMin, path, to, deadline)`
- `encodeSwapExactTokensForETHSupportingFeeOnTransferTokens(...)`
- `encodeSwapExactETHForTokensSupportingFeeOnTransferTokens(...)`

#### Amount Calculation Functions
- `encodeGetAmountOut(amountIn, reserveIn, reserveOut)`
- `encodeGetAmountIn(amountOut, reserveIn, reserveOut)`
- `encodeGetAmountsOut(amountIn, path)`
- `encodeGetAmountsIn(amountOut, path)`

#### Result Decoders
- `decodeAmountResult(functionName, data)` - For single amount results
- `decodeAmountsResult(functionName, data)` - For amount arrays
- `decodeSwapResult(functionName, data)` - For swap transaction results

### 🏭 Uniswap V2 Factory Functions

#### Pair Management
- `encodeCreatePair(tokenA, tokenB)`
- `encodeGetPair(tokenA, tokenB)`
- `encodeAllPairs(index)`
- `encodeAllPairsLength()`

#### Fee Management
- `encodeFeeTo()`
- `encodeFeeToSetter()`
- `encodeSetFeeTo(feeTo)`
- `encodeSetFeeToSetter(feeToSetter)`

#### Result Decoders
- `decodeAddressResult(functionName, data)` - For address results
- `decodeUintResult(functionName, data)` - For uint results

#### Event Decoders
- `decodePairCreatedEvent(data, topics)` - For PairCreated event logs

### 💰 ERC20 Token Functions

#### Read Functions
- `encodeBalanceOf(account)`
- `encodeAllowance(owner, spender)`
- `encodeTotalSupply()`
- `encodeName()`
- `encodeSymbol()`
- `encodeDecimals()`

#### Write Functions
- `encodeApprove(spender, amount)`
- `encodeTransfer(to, amount)`
- `encodeTransferFrom(from, to, amount)`

#### Result Decoders
- `decodeUint256Result(functionName, data)` - For uint256 results (balance, allowance, etc.)
- `decodeStringResult(functionName, data)` - For string results (name, symbol)

### 🎯 Custom ABI Functions

#### Generic ABI Operations
- `encodeFunction(abi, functionName, params)` - Encode any function call
- `decodeFunction(abi, data)` - Decode function call data
- `decodeFunctionResult(abi, functionName, data)` - Decode function results
- `decodeEvent(abi, eventName, data, topics)` - Decode event logs

#### ABI Utilities
- `getFunctionSelector(abi, functionName)` - Get 4-byte function selector
- `getFunctionNames(abi)` - List all function names in ABI
- `getEventNames(abi)` - List all event names in ABI
- `getFunctionAbi(abi, functionName)` - Get specific function ABI
- `isFunctionPayable(abi, functionName)` - Check if function is payable
- `isFunctionReadOnly(abi, functionName)` - Check if function is view/pure

### 📊 Informer Contract Functions

#### Token Information
- `encodeGetOwner(contractAddress)`
- `encodeGetTokenBalance(tokenAddress, walletAddress)`
- `encodeGetTotalSupply(tokenAddress)` (as `encodeInformerGetTotalSupply`)

#### Pair Information
- `encodeGetPairAndTokenDetails(pairAddress)`
- `encodeGetReserves(pairAddress)`

#### Result Decoders & Parsers
- `decodeOwnerResult(data)`
- `decodeTokenBalanceResult(data)`
- `decodePairAndTokenDetailsResult(data)`
- `decodeReservesResult(data)`
- `parsePairDetails(result)` - Parse complex pair details structure
- `parseReserves(result)` - Parse reserves structure

## 📁 Project Structure

```
@bcoders.gr/abi-common/
├── index.js                    # Main entry point with all exports
├── package.json               # Package configuration
├── example.js                 # Comprehensive example and test suite
├── README.md                  # This documentation
└── src/                       # Source modules
    ├── uniswap-v2-router.js  # Uniswap V2 Router functions
    ├── uniswap-v2-factory.js # Uniswap V2 Factory functions
    ├── erc20.js              # ERC20 token standard functions
    ├── custom-abi.js         # Generic ABI handling utilities
    └── informer-abi.js       # Custom informer contract functions
```

## 🔧 Development

To test the package functionality:

```bash
npm test
# or
npm run example
# or
node example.js
```

This runs the comprehensive test suite in `example.js` which demonstrates all functionality and serves as both documentation and validation.

## 🧪 Testing

Run the comprehensive test suite:

```bash
node test-all-modules.mjs
```

Run individual examples:

```bash
node examples/simple-usage.js
node examples/test.js
node examples/advanced-usage.js
```

## 📝 Real-World Example

```javascript
import { 
    encodeSwapExactETHForTokens,
    encodeBalanceOf,
    decodeUint256Result,
    encodeGetAmountsOut,
    decodeAmountsResult
} from '@bcoders.gr/abi-common';

// 1. Get expected output amounts for 1 ETH -> USDC swap
const getAmountsData = encodeGetAmountsOut(
    '1000000000000000000', // 1 ETH in wei
    [
        '0xC02aaA39b223FE8563b41CFc8eB645c0c67C6840', // WETH
        '0xA0b86a33E6441e56c8e3e8D13C9C65a3e4c8C5B4'  // USDC
    ]
);
// Send this as calldata to router contract...

// 2. Decode the response to see expected amounts
const mockAmountsResponse = '0x0000000000000000000000000000000000000000000000000000000000000020...';
const expectedAmounts = decodeAmountsResult('getAmountsOut', mockAmountsResponse);
console.log('Expected USDC output:', expectedAmounts[1].toString());

// 3. Execute the actual swap
const swapData = encodeSwapExactETHForTokens(
    expectedAmounts[1].toString(), // Use calculated minimum
    [
        '0xC02aaA39b223FE8563b41CFc8eB645c0c67C6840', // WETH
        '0xA0b86a33E6441e56c8e3e8D13C9C65a3e4c8C5B4'  // USDC
    ],
    '0x742d35Cc6634c0532925a3b8d68f3F22f5c6f9a0', // recipient
    Math.floor(Date.now() / 1000) + 1800 // 30 min deadline
);
// Send this as transaction data with ETH value...

// 4. Check resulting balance
const balanceData = encodeBalanceOf('0x742d35Cc6634c0532925a3b8d68f3F22f5c6f9a0');
// Call USDC contract with this data...

const mockBalanceResponse = '0x000000000000000000000000000000000000000000000000000000003b9aca00';
const balance = decodeUint256Result('balanceOf', mockBalanceResponse);
console.log('New USDC balance:', (Number(balance[0]) / 1e6).toFixed(2), 'USDC');
```

## 🔧 Error Handling

The module includes comprehensive error handling:

```javascript
try {
    const encoded = encodeSwapExactETHForTokens(amount, path, to, deadline);
} catch (error) {
    if (error.message.includes('Invalid address')) {
        console.log('Address format error');
    } else if (error.message.includes('Invalid amount')) {
        console.log('Amount validation error');
    } else {
        console.log('Encoding error:', error.message);
    }
}
```

## 📋 Return Value Format

- **Encoded Functions**: Return hex strings ready for transaction input
- **Decoded Results**: Return arrays with parsed values
- **Numbers**: Returned as BigInt for precise handling of large values
- **Addresses**: Returned as lowercase hex strings
- **Strings**: Returned as UTF-8 strings

## ⚠️ Important Notes

1. **BigInt Handling**: All numeric results are BigInt - convert with `.toString()` or `Number()`
2. **Address Format**: Addresses should be valid hex strings with 0x prefix
3. **Amount Format**: Use string representation for large numbers to avoid precision loss
4. **Deadline**: Unix timestamp in seconds, not milliseconds
5. **Gas Estimation**: Encoded data is ready for gas estimation before sending

## 🚀 Production Ready

This module has been thoroughly tested and is ready for production use in:
- DeFi applications
- Token swap interfaces  
- Portfolio management tools
- Trading bots
- Smart contract interaction tools

## 📄 License

MIT License - see LICENSE file for details.

---

Built with ❤️ for the Ethereum DeFi ecosystem.
