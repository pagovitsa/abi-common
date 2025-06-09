# @bcoders.gr/abi-common

A comprehensive Node.js module providing organized helper functions for Ethereum contract interactions. Built with an intuitive structure that simplifies DeFi operations through easy-to-use helper functions for Uniswap V2, ERC20 tokens, and custom contracts.

**✅ Production Ready**: Enhanced with organized helper function structure for seamless blockchain integration.

## 🏗️ Architecture

This package (`@bcoders.gr/abi-common`) provides high-level, pre-configured wrapper functions for common Ethereum contract interactions. It's built on top of the core `@bcoders.gr/abi-codec` library, which provides the low-level ABI encoding/decoding functionality.

**Package Hierarchy:**
- `@bcoders.gr/abi-codec` - Core ABI encoding/decoding engine
- `@bcoders.gr/abi-common` - High-level utilities and pre-configured functions (this package)

## ✨ Features

- 🎯 **Organized Helper Functions**: Intuitive structure with `informer.getReserves()`, `erc20.getBalanceOf()`, `uniswap.v2.router.function()` format
- 🔧 **Smart Contract Interactions**: Complete blockchain operation support with error handling and validation
- 🏭 **Uniswap V2 Support**: Full router, factory, and pair functionality with easy-to-use helpers
- 💰 **ERC20 Token Operations**: Standard token operations with comprehensive helper functions
- 📊 **Informer Contract**: Specialized helpers for token and pair information queries
- 🚀 **Production Ready**: Built-in error handling, validation, and real-world tested functionality
- 🧪 **Provider Integration**: Direct integration with ethers.js and web3.js providers

## 📦 Installation

```bash
npm install @bcoders.gr/abi-common
```

This package provides organized helper functions for blockchain interactions with an intuitive structure designed for modern DeFi applications.

## 🚀 Quick Start

### Organized Helper Functions (Recommended)

```javascript
import { informer, erc20, uniswap } from '@bcoders.gr/abi-common';

// Get pair reserves using informer helper
const reserves = await informer.getReserves(provider, pairAddress, informerAddress);

// Check ERC20 token balance
const balance = await erc20.getBalanceOf(provider, tokenAddress, walletAddress);

// Get Uniswap pair information
const pairAddress = await uniswap.v2.factory.getPair(provider, factoryAddress, tokenA, tokenB);

// Execute token swap
const swapResult = await uniswap.v2.router.swapETHForExactTokens(
    provider, routerAddress, amountOut, path, to, deadline, { value: ethAmount }
);
```

### Helper Function Categories

- **`informer.*`** - Specialized contract for pair and token data
- **`erc20.*`** - Standard ERC20 token operations  
- **`uniswap.v2.factory.*`** - Uniswap V2 factory operations
- **`uniswap.v2.router.*`** - Uniswap V2 router operations
- **`uniswap.v2.pair.*`** - Uniswap V2 pair operations

## 📚 Available Helper Functions

### 📊 Informer Helper Functions

The `informer` object provides specialized functions for querying pair and token information:

```javascript
import { informer } from '@bcoders.gr/abi-common';

// Get comprehensive pair and token details
const pairDetails = await informer.getPairAndTokenDetails(provider, pairAddress, informerAddress);

// Get current reserves for a pair
const reserves = await informer.getReserves(provider, pairAddress, informerAddress);

// Get token balance for a wallet
const balance = await informer.getTokenBalance(provider, tokenAddress, walletAddress, informerAddress);

// Get contract owner
const owner = await informer.getOwner(provider, contractAddress, informerAddress);

// Get total supply of a token
const totalSupply = await informer.getTotalSupply(provider, tokenAddress, informerAddress);
```

### 💰 ERC20 Helper Functions

The `erc20` object provides all standard ERC20 token operations:

```javascript
import { erc20 } from '@bcoders.gr/abi-common';

// Read functions
const balance = await erc20.getBalanceOf(provider, tokenAddress, account);
const allowance = await erc20.getAllowance(provider, tokenAddress, owner, spender);
const totalSupply = await erc20.getTotalSupply(provider, tokenAddress);
const name = await erc20.getName(provider, tokenAddress);
const symbol = await erc20.getSymbol(provider, tokenAddress);
const decimals = await erc20.getDecimals(provider, tokenAddress);

// Write functions
const approveTx = await erc20.approve(provider, tokenAddress, spender, amount);
const transferTx = await erc20.transfer(provider, tokenAddress, to, amount);
const transferFromTx = await erc20.transferFrom(provider, tokenAddress, from, to, amount);
```

### 🔄 Uniswap V2 Helper Functions

#### Factory Operations

```javascript
import { uniswap } from '@bcoders.gr/abi-common';

// Get pair address
const pairAddress = await uniswap.v2.factory.getPair(provider, factoryAddress, tokenA, tokenB);

// Get all pairs
const allPairs = await uniswap.v2.factory.getAllPairs(provider, factoryAddress, index);

// Get total pairs count
const pairsLength = await uniswap.v2.factory.getAllPairsLength(provider, factoryAddress);

// Get fee information
const feeTo = await uniswap.v2.factory.getFeeTo(provider, factoryAddress);
const feeToSetter = await uniswap.v2.factory.getFeeToSetter(provider, factoryAddress);
```

#### Enhanced Router Operations

The enhanced router provides three modes for each swap function:

```javascript
// 1. CALL MODE - Static simulation (read-only, returns decoded response)
const simulationResult = await uniswap.v2.router.enhanced.swapExactETHForTokens.call(
    provider, amountOutMin, path, to, deadline
);

// 2. ESTIMATE MODE - Gas estimation
const gasEstimate = await uniswap.v2.router.enhanced.swapExactETHForTokens.estimate(
    provider, amountOutMin, path, to, deadline, { value: ethAmount }
);

// 3. SEND MODE - Execute transaction
const transaction = await uniswap.v2.router.enhanced.swapExactETHForTokens.send(
    provider, amountOutMin, path, to, deadline, { 
        value: ethAmount,
        gasLimit: gasEstimate
    }
);

// Available enhanced swap functions:
// - swapETHForExactTokens
// - swapExactETHForTokens  
// - swapExactETHForTokensSupportingFeeOnTransferTokens
// - swapExactTokensForETH
// - swapExactTokensForETHSupportingFeeOnTransferTokens

// Each function supports .call, .send, and .estimate modes
```

#### Standard Router Operations

```javascript
// Amount calculations
const amountOut = await uniswap.v2.router.getAmountOut(provider, routerAddress, amountIn, reserveIn, reserveOut);
const amountIn = await uniswap.v2.router.getAmountIn(provider, routerAddress, amountOut, reserveIn, reserveOut);
const amountsOut = await uniswap.v2.router.getAmountsOut(provider, routerAddress, amountIn, path);
const amountsIn = await uniswap.v2.router.getAmountsIn(provider, routerAddress, amountOut, path);

// Swap functions
const swapETHTx = await uniswap.v2.router.swapETHForExactTokens(
    provider, routerAddress, amountOut, path, to, deadline, { value: ethAmount }
);

const swapTokensTx = await uniswap.v2.router.swapExactTokensForETH(
    provider, routerAddress, amountIn, amountOutMin, path, to, deadline
);

const swapExactETHTx = await uniswap.v2.router.swapExactETHForTokens(
    provider, routerAddress, amountOutMin, path, to, deadline, { value: ethAmount }
);

// Fee-on-transfer token support
const swapFeeTokensTx = await uniswap.v2.router.swapExactETHForTokensSupportingFeeOnTransferTokens(
    provider, routerAddress, amountOutMin, path, to, deadline, { value: ethAmount }
);
```

#### Pair Operations

```javascript
// Get pair information
const reserves = await uniswap.v2.pair.getReserves(provider, pairAddress);
const token0 = await uniswap.v2.pair.token0(provider, pairAddress);
const token1 = await uniswap.v2.pair.token1(provider, pairAddress);
const totalSupply = await uniswap.v2.pair.totalSupply(provider, pairAddress);

// Liquidity operations
const mintTx = await uniswap.v2.pair.mint(provider, pairAddress, to);
const burnTx = await uniswap.v2.pair.burn(provider, pairAddress, to);
const swapTx = await uniswap.v2.pair.swap(provider, pairAddress, amount0Out, amount1Out, to, data);
```

## 📁 Project Structure

```
@bcoders.gr/abi-common/
├── index.js                    # Main entry point with organized exports
├── package.json               # Package configuration
├── example.js                 # Comprehensive example and test suite
├── README.md                  # This documentation
└── src/                       # Source modules with helper functions
    ├── informer-abi.js       # Informer contract helper functions
    ├── erc20.js              # ERC20 token helper functions
    ├── uniswap-v2-factory.js # Uniswap V2 Factory helper functions
    ├── uniswap-v2-router.js  # Uniswap V2 Router helper functions
    ├── uniswap-v2-pair.js    # Uniswap V2 Pair helper functions
    └── custom-abi.js         # Generic ABI handling utilities
```

## 🔧 Helper Function Parameters

All helper functions follow a consistent pattern:

```javascript
// Provider-based functions
await helperFunction(provider, contractAddress, ...functionParams, options?)

// Examples:
await informer.getReserves(provider, pairAddress, informerAddress)
await erc20.getBalanceOf(provider, tokenAddress, account)
await uniswap.v2.router.swapExactETHForTokens(provider, routerAddress, amountOutMin, path, to, deadline, { value: ethAmount })
```

### Parameters:
- **`provider`** - ethers.js or web3.js provider instance
- **`contractAddress`** - Address of the contract to interact with
- **`...functionParams`** - Function-specific parameters
- **`options`** - Optional transaction options (gasLimit, value, etc.)

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
import { informer, erc20, uniswap } from '@bcoders.gr/abi-common';
import { ethers } from 'ethers';

// Setup provider
const provider = new ethers.providers.JsonRpcProvider('YOUR_RPC_URL');

// Contract addresses
const WETH = '0xC02aaA39b223FE8563b41CFc8eB645c0c67C6840';
const USDC = '0xA0b86a33E6441e56c8e3e8D13C9C65a3e4c8C5B4';
const routerAddress = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
const factoryAddress = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f';
const informerAddress = 'YOUR_INFORMER_CONTRACT_ADDRESS';

async function completeSwapExample() {
    try {
        // 1. Get pair address
        const pairAddress = await uniswap.v2.factory.getPair(provider, factoryAddress, WETH, USDC);
        console.log('Pair address:', pairAddress);

        // 2. Get current reserves
        const reserves = await informer.getReserves(provider, pairAddress, informerAddress);
        console.log('Current reserves:', reserves);

        // 3. Calculate expected output for 1 ETH
        const amountIn = ethers.utils.parseEther('1.0');
        const path = [WETH, USDC];
        const expectedAmounts = await uniswap.v2.router.getAmountsOut(provider, routerAddress, amountIn, path);
        console.log('Expected USDC output:', ethers.utils.formatUnits(expectedAmounts[1], 6));

        // 4. Check current USDC balance
        const userAddress = 'YOUR_WALLET_ADDRESS';
        const currentBalance = await erc20.getBalanceOf(provider, USDC, userAddress);
        console.log('Current USDC balance:', ethers.utils.formatUnits(currentBalance, 6));

        // 5. Execute swap with 5% slippage
        const amountOutMin = expectedAmounts[1].mul(95).div(100); // 5% slippage
        const deadline = Math.floor(Date.now() / 1000) + 1800; // 30 minutes

        const swapTx = await uniswap.v2.router.swapExactETHForTokens(
            provider,
            routerAddress,
            amountOutMin,
            path,
            userAddress,
            deadline,
            { value: amountIn }
        );

        console.log('Swap transaction:', swapTx.hash);
        await swapTx.wait();

        // 6. Check new balance
        const newBalance = await erc20.getBalanceOf(provider, USDC, userAddress);
        console.log('New USDC balance:', ethers.utils.formatUnits(newBalance, 6));
        console.log('USDC received:', ethers.utils.formatUnits(newBalance.sub(currentBalance), 6));

    } catch (error) {
        console.error('Swap failed:', error.message);
    }
}

// Run the example
completeSwapExample();
```

## 🔧 Error Handling

All helper functions include comprehensive error handling:

```javascript
try {
    const balance = await erc20.getBalanceOf(provider, tokenAddress, account);
    console.log('Balance:', balance.toString());
} catch (error) {
    if (error.code === 'INVALID_ADDRESS') {
        console.log('Invalid token or account address');
    } else if (error.code === 'CALL_EXCEPTION') {
        console.log('Contract call failed - check addresses and network');
    } else {
        console.log('Error:', error.message);
    }
}

try {
    const swapTx = await uniswap.v2.router.swapExactETHForTokens(
        provider, routerAddress, amountOutMin, path, to, deadline, { value: ethAmount }
    );
    await swapTx.wait();
} catch (error) {
    if (error.reason === 'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT') {
        console.log('Slippage too high - increase amountOutMin');
    } else if (error.code === 'INSUFFICIENT_FUNDS') {
        console.log('Insufficient ETH balance');
    } else {
        console.log('Swap failed:', error.message);
    }
}
```

## 📋 Return Value Format

- **Read Functions**: Return parsed values directly (BigInt for numbers, strings for text, objects for complex data)
- **Write Functions**: Return transaction objects with `.wait()` method for confirmation
- **Numbers**: Returned as BigInt for precise handling of large values - use `.toString()` for display
- **Addresses**: Returned as checksummed hex strings
- **Complex Data**: Returned as structured objects with named properties

```javascript
// Read function examples
const balance = await erc20.getBalanceOf(provider, token, account); // Returns: BigInt
const reserves = await informer.getReserves(provider, pair, informer); // Returns: { reserve0: BigInt, reserve1: BigInt, blockTimestampLast: number }
const pairDetails = await informer.getPairAndTokenDetails(provider, pair, informer); // Returns: Complex object with token details

// Write function examples  
const tx = await erc20.approve(provider, token, spender, amount); // Returns: Transaction object
await tx.wait(); // Wait for confirmation
```

## ⚠️ Important Notes

1. **Provider Required**: All functions require a valid ethers.js or web3.js provider instance
2. **BigInt Handling**: Numeric results are BigInt - use `.toString()` for display or `ethers.utils.formatUnits()` for proper decimals
3. **Address Format**: Addresses should be valid hex strings with 0x prefix - helper functions handle checksumming
4. **Transaction Options**: Write functions accept optional transaction parameters (gasLimit, gasPrice, value, etc.)
5. **Error Handling**: Always wrap calls in try-catch blocks for production applications
6. **Network Compatibility**: Ensure provider network matches contract deployment network

## 🚀 Production Ready

This module has been enhanced with organized helper functions and is ready for production use in:
- **DeFi Applications**: Complete Uniswap V2 integration with intuitive helper functions
- **Token Management**: Comprehensive ERC20 operations with error handling
- **Portfolio Tools**: Real-time pair and token data through informer helpers
- **Trading Bots**: Efficient swap and liquidity operations with proper validation
- **Smart Contract Integration**: Direct provider-based interactions with automatic encoding/decoding

### Key Production Features:
- ✅ **Organized Structure**: `informer.getReserves()`, `erc20.getBalanceOf()`, `uniswap.v2.router.function()`
- ✅ **Error Handling**: Comprehensive validation and error reporting
- ✅ **Provider Integration**: Direct ethers.js/web3.js provider support
- ✅ **Type Safety**: Proper BigInt handling and address validation
- ✅ **Transaction Management**: Built-in transaction object handling with `.wait()` support

## 📄 License

MIT License - see LICENSE file for details.

---

Built with ❤️ for the Ethereum DeFi ecosystem. Enhanced with organized helper functions for seamless blockchain integration.
