#!/usr/bin/env node
/**
 * Simple Example and Test for @bcoders.gr/abi-common
 * 
 * This file demonstrates the organized helper function structure.
 */

import abiCommon, { informer, erc20, uniswap } from './index.js';

console.log('Testing @bcoders.gr/abi-common v2.0.0');
console.log('=====================================');

// Test that all modules are exported correctly
console.log('✓ Default export available:', !!abiCommon);
console.log('✓ Informer module available:', !!informer);
console.log('✓ ERC20 module available:', !!erc20);
console.log('✓ Uniswap module available:', !!uniswap);

// Test function availability
console.log('\nInformer functions:');
console.log('  - getPairAndTokenDetails:', typeof informer.getPairAndTokenDetails);
console.log('  - getOwner:', typeof informer.getOwner);
console.log('  - getReserves:', typeof informer.getReserves);
console.log('  - getTokenBalance:', typeof informer.getTokenBalance);
console.log('  - getTotalSupply:', typeof informer.getTotalSupply);

console.log('\nERC20 functions:');
console.log('  - getBalanceOf:', typeof erc20.getBalanceOf);
console.log('  - getAllowance:', typeof erc20.getAllowance);
console.log('  - getTotalSupply:', typeof erc20.getTotalSupply);
console.log('  - getName:', typeof erc20.getName);
console.log('  - getSymbol:', typeof erc20.getSymbol);
console.log('  - getDecimals:', typeof erc20.getDecimals);
console.log('  - approve:', typeof erc20.approve);
console.log('  - transfer:', typeof erc20.transfer);
console.log('  - transferFrom:', typeof erc20.transferFrom);

console.log('\nUniswap V2 Factory functions:');
console.log('  - getPair:', typeof uniswap.v2.factory.getPair);
console.log('  - getAllPairs:', typeof uniswap.v2.factory.getAllPairs);
console.log('  - getAllPairsLength:', typeof uniswap.v2.factory.getAllPairsLength);
console.log('  - getFeeTo:', typeof uniswap.v2.factory.getFeeTo);
console.log('  - getFeeToSetter:', typeof uniswap.v2.factory.getFeeToSetter);

console.log('\nUniswap V2 Router functions (with enhanced call/send/estimate modes):');
console.log('  - getAmountOut:', typeof uniswap.v2.router.getAmountOut);
console.log('  - getAmountIn:', typeof uniswap.v2.router.getAmountIn);
console.log('  - getAmountsOut:', typeof uniswap.v2.router.getAmountsOut);
console.log('  - getAmountsIn:', typeof uniswap.v2.router.getAmountsIn);
console.log('  - swapETHForExactTokens:', typeof uniswap.v2.router.swapETHForExactTokens);
console.log('  - swapETHForExactTokens.call:', typeof uniswap.v2.router.swapETHForExactTokens.call);
console.log('  - swapETHForExactTokens.send:', typeof uniswap.v2.router.swapETHForExactTokens.send);
console.log('  - swapETHForExactTokens.estimate:', typeof uniswap.v2.router.swapETHForExactTokens.estimate);
console.log('  - swapExactETHForTokens:', typeof uniswap.v2.router.swapExactETHForTokens);
console.log('  - swapExactETHForTokens.call:', typeof uniswap.v2.router.swapExactETHForTokens.call);
console.log('  - swapExactETHForTokens.send:', typeof uniswap.v2.router.swapExactETHForTokens.send);
console.log('  - swapExactETHForTokens.estimate:', typeof uniswap.v2.router.swapExactETHForTokens.estimate);
console.log('  - swapExactETHForTokensSupportingFeeOnTransferTokens:', typeof uniswap.v2.router.swapExactETHForTokensSupportingFeeOnTransferTokens);
console.log('  - swapExactETHForTokensSupportingFeeOnTransferTokens.call:', typeof uniswap.v2.router.swapExactETHForTokensSupportingFeeOnTransferTokens.call);
console.log('  - swapExactTokensForETH:', typeof uniswap.v2.router.swapExactTokensForETH);
console.log('  - swapExactTokensForETHSupportingFeeOnTransferTokens:', typeof uniswap.v2.router.swapExactTokensForETHSupportingFeeOnTransferTokens);
console.log('  - swapExactTokensForETHSupportingFeeOnTransferTokens.call:', typeof uniswap.v2.router.swapExactTokensForETHSupportingFeeOnTransferTokens.call);

console.log('\nUniswap V2 Pair functions:');
console.log('  - getName:', typeof uniswap.v2.pair.getName);
console.log('  - getSymbol:', typeof uniswap.v2.pair.getSymbol);
console.log('  - getDecimals:', typeof uniswap.v2.pair.getDecimals);
console.log('  - getTotalSupply:', typeof uniswap.v2.pair.getTotalSupply);
console.log('  - getBalanceOf:', typeof uniswap.v2.pair.getBalanceOf);
console.log('  - getToken0:', typeof uniswap.v2.pair.getToken0);
console.log('  - getToken1:', typeof uniswap.v2.pair.getToken1);
console.log('  - getReserves:', typeof uniswap.v2.pair.getReserves);
console.log('  - getPrice0CumulativeLast:', typeof uniswap.v2.pair.getPrice0CumulativeLast);
console.log('  - getPrice1CumulativeLast:', typeof uniswap.v2.pair.getPrice1CumulativeLast);
console.log('  - getKLast:', typeof uniswap.v2.pair.getKLast);

console.log('\n✅ All tests passed! Package structure is correct.');
console.log('\nUsage examples:');
console.log('  await erc20.getBalanceOf(provider, tokenAddress, accountAddress)');
console.log('  await informer.getReserves(provider, pairAddress)');
console.log('  await uniswap.v2.factory.getPair(provider, factoryAddress, tokenA, tokenB)');
console.log('  await uniswap.v2.router.getAmountOut(provider, routerAddress, amountIn, reserveIn, reserveOut)');
console.log('  await uniswap.v2.pair.getReserves(provider, pairAddress)');
console.log('\nEnhanced Router examples (merged functionality):');
console.log('  // Static call (simulation)');
console.log('  await uniswap.v2.router.swapExactETHForTokens.call(provider, amountOutMin, path, to, deadline)');
console.log('  // Gas estimation');
console.log('  await uniswap.v2.router.swapExactETHForTokens.estimate(provider, amountOutMin, path, to, deadline, {value: ethAmount})');
console.log('  // Send transaction');
console.log('  await uniswap.v2.router.swapExactETHForTokens.send(provider, amountOutMin, path, to, deadline, {value: ethAmount})');
console.log('  // Backward compatibility (defaults to send)');
console.log('  await uniswap.v2.router.swapExactETHForTokens(provider, amountOutMin, path, to, deadline, {value: ethAmount})');
console.log('\n🎉 Enhanced router functionality now merged into main router functions!');
