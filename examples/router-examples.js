// Uniswap V2 Router Usage Examples
// This file demonstrates the call/send/estimate functionality for Uniswap V2 router

import { uniswap } from '../index.js';

// Example addresses (replace with actual addresses)
const WETH = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
const USDC = '0xA0b86a33E6F01FBB6c8e0B1A8d8d7e3a1234567890';
const USER_ADDRESS = '0x742d35Cc6634C0532925a3b8C1A0d1234567890';

// Uniswap V2 Router examples
export async function demonstrateUniswapRouter(provider) {
    console.log('🚀 Uniswap V2 Router Examples');
    console.log('=============================\n');

    try {
        // Setup common variables
        const path = [WETH, USDC];
        const amountOutMin = '1000000'; // 1 USDC (6 decimals)
        const deadline = Math.floor(Date.now() / 1000) + 1800; // 30 minutes
        const ethValue = '1000000000000000000'; // 1 ETH

        // 1. CALL MODE - Static call to simulate swap (read-only)
        console.log('1. CALL MODE - Static simulation:');
        console.log('--------------------------------');
        
        // Static call to see what would happen (no transaction sent)
        const simulationResult = await uniswap.v2.router.swapExactETHForTokens.call(
            provider,
            amountOutMin,
            path,
            USER_ADDRESS,
            deadline
        );
        console.log('Simulated swap result:', simulationResult);
        console.log('');

        // 2. ESTIMATE MODE - Get gas estimate
        console.log('2. ESTIMATE MODE - Gas estimation:');
        console.log('----------------------------------');
        
        const gasEstimate = await uniswap.v2.router.swapExactETHForTokens.estimate(
            provider,
            amountOutMin,
            path,
            USER_ADDRESS,
            deadline,
            { value: ethValue }
        );
        console.log('Estimated gas:', gasEstimate.toString());
        console.log('');

        // 3. BACKWARD COMPATIBILITY - Direct function call (defaults to send mode)
        console.log('3. BACKWARD COMPATIBILITY - Direct function call:');
        console.log('--------------------------------------------------');
        
        // Note: This is commented out for safety - would send real transaction
        /*
        const directTransaction = await uniswap.v2.router.swapExactETHForTokens(
            provider,
            amountOutMin,
            path,
            USER_ADDRESS,
            deadline,
            { 
                value: ethValue,
                gasLimit: gasEstimate * 120n / 100n // Add 20% buffer
            }
        );
        console.log('Direct call transaction hash:', directTransaction.hash);
        */
        console.log('Direct transaction call is commented out for safety');
        console.log('');

        // 4. Different swap types examples
        console.log('4. OTHER SWAP FUNCTIONS:');
        console.log('------------------------');

        // Test amount calculation functions (read-only)
        console.log('Testing amount calculation functions:');
        const amountOut = await uniswap.v2.router.getAmountsOut(
            provider,
            ethValue,
            path
        );
        console.log('Amounts out for 1 ETH:', amountOut);

        // Exact tokens for ETH swap estimation
        const tokenAmount = '1000000'; // 1 USDC
        const reversePath = [USDC, WETH];
        
        console.log('\nEstimating swapExactTokensForETH gas:');
        const ethSwapGas = await uniswap.v2.router.swapExactTokensForETH.estimate(
            provider,
            tokenAmount,
            '100000000000000000', // Min 0.1 ETH out
            reversePath,
            USER_ADDRESS,
            deadline
        );
        console.log('Gas estimate for token->ETH swap:', ethSwapGas.toString());

        // Fee-on-transfer tokens support
        console.log('\nTesting fee-on-transfer functions:');
        
        // Call mode for fee-on-transfer
        console.log('Fee-on-transfer call mode:');
        try {
            const feeTransferCall = await uniswap.v2.router.swapExactETHForTokensSupportingFeeOnTransferTokens.call(
                provider,
                amountOutMin,
                path,
                USER_ADDRESS,
                deadline
            );
            console.log('Fee-on-transfer call result:', feeTransferCall);
        } catch (error) {
            console.log('Fee-on-transfer call (expected for some tokens):', error.message);
        }

        // Gas estimate for fee-on-transfer
        const feeSwapGas = await uniswap.v2.router.swapExactETHForTokensSupportingFeeOnTransferTokens.estimate(
            provider,
            amountOutMin,
            path,
            USER_ADDRESS,
            deadline,
            { value: ethValue }
        );
        console.log('Gas estimate for fee-on-transfer swap:', feeSwapGas.toString());

        // Reverse fee-on-transfer (tokens to ETH)
        const reverseFeeGas = await uniswap.v2.router.swapExactTokensForETHSupportingFeeOnTransferTokens.estimate(
            provider,
            tokenAmount,
            '100000000000000000', // Min 0.1 ETH out
            reversePath,
            USER_ADDRESS,
            deadline
        );
        console.log('Gas estimate for reverse fee-on-transfer:', reverseFeeGas.toString());

        console.log('\n✅ All function modes tested successfully!');

    } catch (error) {
        console.error('❌ Error in router demonstration:', error.message);
        throw error;
    }
}

// Usage examples for different scenarios
export function getUsageExamples() {
    return {
        // Basic usage pattern
        basicPattern: `
// Three modes available for all swap functions:

// 1. Call mode - simulation/read-only
const result = await uniswap.v2.router.swapExactETHForTokens.call(
    provider, amountOutMin, path, to, deadline
);

// 2. Send mode - execute transaction  
const tx = await uniswap.v2.router.swapExactETHForTokens.send(
    provider, amountOutMin, path, to, deadline, { value: ethAmount }
);

// 3. Estimate mode - gas estimation
const gas = await uniswap.v2.router.swapExactETHForTokens.estimate(
    provider, amountOutMin, path, to, deadline, { value: ethAmount }
);

// 4. Backward compatibility - defaults to send mode
const directTx = await uniswap.v2.router.swapExactETHForTokens(
    provider, amountOutMin, path, to, deadline, { value: ethAmount }
);
        `,

        // Fee-on-transfer tokens
        feeOnTransferExample: `
// For tokens that charge fees on transfers
await uniswap.v2.router.swapExactETHForTokensSupportingFeeOnTransferTokens.send(
    provider, amountOutMin, path, to, deadline, { value: ethAmount }
);

await uniswap.v2.router.swapExactTokensForETHSupportingFeeOnTransferTokens.send(
    provider, amountIn, amountOutMin, path, to, deadline
);
        `,

        // Error handling
        errorHandlingExample: `
try {
    const result = await uniswap.v2.router.swapExactETHForTokens.call(
        provider, amountOutMin, path, to, deadline
    );
    console.log('Swap simulation successful:', result);
    
    // Only proceed with transaction if simulation succeeds
    const tx = await uniswap.v2.router.swapExactETHForTokens.send(
        provider, amountOutMin, path, to, deadline, { value: ethAmount }
    );
    
} catch (error) {
    if (error.message.includes('INSUFFICIENT_OUTPUT_AMOUNT')) {
        console.error('Slippage too high, increase amountOutMin');
    } else if (error.message.includes('EXPIRED')) {
        console.error('Transaction deadline passed');
    } else {
        console.error('Swap failed:', error.message);
    }
}
        `
    };
}

// Performance testing helper
export async function performanceTest(provider) {
    console.log('🔄 Performance Testing');
    console.log('======================\n');
    
    const iterations = 10;
    const path = [WETH, USDC];
    const amountOutMin = '1000000';
    const deadline = Math.floor(Date.now() / 1000) + 1800;
    
    console.log(`Running ${iterations} call simulations...`);
    const start = Date.now();
    
    for (let i = 0; i < iterations; i++) {
        try {
            await uniswap.v2.router.swapExactETHForTokens.call(
                provider,
                amountOutMin,
                path,
                USER_ADDRESS,
                deadline
            );
        } catch (error) {
            console.log(`Call ${i + 1} failed:`, error.message);
        }
    }
    
    const end = Date.now();
    const avgTime = (end - start) / iterations;
    
    console.log(`Average call time: ${avgTime.toFixed(2)}ms`);
    console.log(`Total time: ${end - start}ms`);
}

// Export all functions
export default {
    demonstrateUniswapRouter,
    getUsageExamples,
    performanceTest
};
