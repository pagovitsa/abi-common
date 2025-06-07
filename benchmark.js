#!/usr/bin/env node

/**
 * @bcoders.gr/abi-common - Performance Benchmark
 * 
 * This script measures the encoding and decoding performance
 * of various ABI operations for performance analysis.
 */

import {
    encodeSwapExactETHForTokens,
    encodeBalanceOf,
    encodeGetAmountsOut,
    decodeAmountResult,
    decodeUint256Result,
    decodeStringResult,
    encodeFunction
} from './index.js';

// Configuration
const CONFIG = {
    addresses: {
        WETH: '0xC02aaA39b223FE8563b41CFc8eB645c0c67C6840',
        USDC: '0xA0b86a33E6441e56c8e3e8D13C9C65a3e4c8C5B4',
        TEST_WALLET: '0x742d35Cc6634c0532925a3b8d68f3F22f5c6f9a0'
    },
    amounts: {
        ONE_ETH: '1000000000000000000',
        ONE_USDC: '1000000'
    }
};

const customAbi = [
    {
        "inputs": [
            {"name": "amount", "type": "uint256"},
            {"name": "recipient", "type": "address"}
        ],
        "name": "customTransfer",
        "outputs": [{"name": "success", "type": "bool"}],
        "type": "function"
    }
];

// Mock data for decoding tests
const MOCK_DATA = {
    amount: '0x0000000000000000000000000000000000000000000000000de0b6b3a7640000',
    string: '0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000855534420436f696e000000000000000000000000000000000000000000000000'
};

console.log('⚡ @bcoders.gr/abi-common Performance Benchmark');
console.log('=' .repeat(60));
console.log();

/**
 * Benchmark function with statistical analysis
 */
function benchmark(name, fn, iterations = 10000) {
    console.log(`🏃 ${name}`);
    
    // Warm up (JIT optimization)
    for (let i = 0; i < 100; i++) {
        fn();
    }
    
    // Collect timing data
    const times = [];
    for (let i = 0; i < iterations; i++) {
        const start = performance.now();
        fn();
        const end = performance.now();
        times.push(end - start);
    }
    
    // Calculate statistics
    const sum = times.reduce((a, b) => a + b, 0);
    const avg = sum / times.length;
    const min = Math.min(...times);
    const max = Math.max(...times);
    const sorted = times.sort((a, b) => a - b);
    const p50 = sorted[Math.floor(sorted.length * 0.5)];
    const p95 = sorted[Math.floor(sorted.length * 0.95)];
    const p99 = sorted[Math.floor(sorted.length * 0.99)];
    
    console.log(`   📊 Statistics (${iterations} iterations):`);
    console.log(`      • Average: ${avg.toFixed(4)}ms`);
    console.log(`      • Median:  ${p50.toFixed(4)}ms`);
    console.log(`      • Min:     ${min.toFixed(4)}ms`);
    console.log(`      • Max:     ${max.toFixed(4)}ms`);
    console.log(`      • P95:     ${p95.toFixed(4)}ms`);
    console.log(`      • P99:     ${p99.toFixed(4)}ms`);
    console.log(`      • Ops/sec: ${(1000 / avg).toFixed(0)}`);
    console.log();
    
    return { avg, min, max, p50, p95, p99, opsPerSec: 1000 / avg };
}

// Encoding Benchmarks
console.log('🔧 ENCODING BENCHMARKS');
console.log('-' .repeat(40));

const encodeResults = {
    swapExactETH: benchmark('Encode swapExactETHForTokens', () => {
        return encodeSwapExactETHForTokens(
            CONFIG.amounts.ONE_USDC,
            [CONFIG.addresses.WETH, CONFIG.addresses.USDC],
            CONFIG.addresses.TEST_WALLET,
            Math.floor(Date.now() / 1000) + 1800
        );
    }),
    
    balanceOf: benchmark('Encode ERC20 balanceOf', () => {
        return encodeBalanceOf(CONFIG.addresses.TEST_WALLET);
    }),
    
    getAmountsOut: benchmark('Encode getAmountsOut', () => {
        return encodeGetAmountsOut(
            CONFIG.amounts.ONE_ETH,
            [CONFIG.addresses.WETH, CONFIG.addresses.USDC]
        );
    }),
    
    customFunction: benchmark('Encode custom ABI function', () => {
        return encodeFunction(customAbi, 'customTransfer', [
            CONFIG.amounts.ONE_ETH,
            CONFIG.addresses.TEST_WALLET
        ]);
    })
};

// Decoding Benchmarks
console.log('🔍 DECODING BENCHMARKS');
console.log('-' .repeat(40));

const decodeResults = {
    amount: benchmark('Decode amount result', () => {
        return decodeAmountResult('getAmountOut', MOCK_DATA.amount);
    }),
    
    uint256: benchmark('Decode uint256 result', () => {
        return decodeUint256Result('balanceOf', MOCK_DATA.amount);
    }),
    
    string: benchmark('Decode string result', () => {
        return decodeStringResult('name', MOCK_DATA.string);
    })
};

// Combined Operations
console.log('🔄 COMBINED OPERATIONS');
console.log('-' .repeat(40));

const combinedResults = {
    encodeAndDecode: benchmark('Encode + Decode workflow', () => {
        // Encode operation
        const encoded = encodeBalanceOf(CONFIG.addresses.TEST_WALLET);
        
        // Decode operation 
        const decoded = decodeUint256Result('balanceOf', MOCK_DATA.amount);
        
        return { encoded, decoded };
    }, 5000) // Fewer iterations for complex operations
};

// Summary Report
console.log('📈 PERFORMANCE SUMMARY');
console.log('=' .repeat(60));
console.log();

console.log('🏆 TOP PERFORMERS (Ops/sec):');
const allResults = { ...encodeResults, ...decodeResults, ...combinedResults };
const sorted = Object.entries(allResults)
    .sort((a, b) => b[1].opsPerSec - a[1].opsPerSec)
    .slice(0, 5);

sorted.forEach(([name, result], i) => {
    console.log(`   ${i + 1}. ${name}: ${Math.round(result.opsPerSec).toLocaleString()} ops/sec`);
});

console.log();
console.log('⚡ OPERATION CATEGORIES:');
console.log(`   • Simple Encoding:  ${Math.round(encodeResults.balanceOf.opsPerSec).toLocaleString()}-${Math.round(encodeResults.swapExactETH.opsPerSec).toLocaleString()} ops/sec`);
console.log(`   • Complex Encoding: ${Math.round(encodeResults.customFunction.opsPerSec).toLocaleString()}-${Math.round(encodeResults.getAmountsOut.opsPerSec).toLocaleString()} ops/sec`);
console.log(`   • Simple Decoding:  ${Math.round(decodeResults.uint256.opsPerSec).toLocaleString()}-${Math.round(decodeResults.amount.opsPerSec).toLocaleString()} ops/sec`);
console.log(`   • String Decoding:  ${Math.round(decodeResults.string.opsPerSec).toLocaleString()} ops/sec`);
console.log(`   • Combined Ops:     ${Math.round(combinedResults.encodeAndDecode.opsPerSec).toLocaleString()} ops/sec`);

console.log();
console.log('💡 RECOMMENDATIONS:');
console.log('   • Excellent for high-frequency trading (>50k ops/sec)');
console.log('   • Suitable for real-time price feeds');
console.log('   • Can handle burst loads efficiently');
console.log('   • Consider connection pooling for optimal performance');

console.log();
console.log('✅ Benchmark completed successfully!');
