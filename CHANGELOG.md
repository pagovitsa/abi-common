# Changelog

## [3.1.0] - 2025-06-09

### 🔍 New Feature: Log Decoder

#### New Functionality
- **Log Decoder Module**: Added comprehensive log decoding for common Ethereum events
- **Supported Events**: 
  - Transfer events (ERC20 tokens)
  - Mint events (Uniswap V2 pairs)
  - PairCreated events (Uniswap V2 factory)
- **Multiple Format Support**: Can decode from single receipts or arrays of receipts
- **Event Filtering**: Get specific event types or all events at once

#### New API Functions
- `decoder.decodeLogs(receipts)` - Decode all supported events
- `decoder.decodeTransferLogs(receipts)` - Decode only Transfer events
- `decoder.decodeMintLogs(receipts)` - Decode only Mint events
- `decoder.decodePairCreatedLogs(receipts)` - Decode only PairCreated events
- `decoder.getEventSignature(eventType)` - Get event signature hash

#### Dependencies
- **Added**: `@ethersproject/abi@^5.7.0` for reliable log parsing
- **Enhanced**: Better integration with existing abi-codec functionality

#### Documentation
- **Updated README**: Added comprehensive decoder documentation with examples
- **Example Usage**: Added examples.js file showing real-world usage patterns
- **Test Coverage**: Added test-decoder.js for validation

## [1.2.0] - 2025-06-08

### 🚀 Major Update: Enhanced Tuple Decoding Support

#### Dependencies Update
- **Updated abi-codec**: Upgraded `@bcoders.gr/abi-codec` from `^1.0.0` to `^1.1.0`
- **Tuple Decoding**: Now supports full tuple/struct decoding for complex smart contract return values
- **Nested Structures**: Can handle complex nested data structures including arrays of tuples
- **Backward Compatibility**: All existing functionality remains unchanged

#### Technical Improvements
- **Enhanced Decoding**: Complex return values from contracts like Uniswap pairs now decode properly
- **Type Safety**: Improved type handling for dynamic and static types in tuples
- **Error Handling**: Better error messages for tuple-related decoding issues
- **Performance**: Optimized tuple decoding performance for complex structures

#### Bug Fixes
- **Resolved**: "Tuple decoding not yet implemented" error when decoding complex contract data
- **Fixed**: Proper handling of null-terminated strings in tuple components
- **Improved**: JSON serialization compatibility by returning strings instead of BigInt objects

### 🔧 Testing
- All existing tests continue to pass (56/56 tests successful)
- Enhanced test coverage for complex tuple structures
- Performance benchmarks maintained for encoding/decoding operations

## [1.1.0] - 2025-06-08

### ✅ Added Features

#### Uniswap V2 Factory Events
- **PairCreated Event Support**: Added `decodePairCreatedEvent(data, topics)` function
- **Event ABI**: Added PairCreated event definition to Uniswap V2 Factory ABI
- **Testing**: Added comprehensive test for PairCreated event decoding
- **Documentation**: Updated README.md with PairCreated event documentation

### 🔧 Technical Details
- Extended `UNISWAP_V2_FACTORY_ABI` with proper PairCreated event structure
- Implemented event log decoding with proper topic and data parsing
- Added error handling for invalid event data
- Export support through main index.js file

## [1.0.0] - 2025-06-07

### ✅ Completed Features

#### Core Package Structure
- **Package Configuration**: Complete `package.json` with correct dependencies and scripts
- **Entry Point**: Main `index.js` with comprehensive exports (individual functions + namespaces)
- **Module Organization**: Clean separation of concerns across 5 specialized modules

#### Module Implementations (100% Complete)
- **Uniswap V2 Router** (`src/uniswap-v2-router.js`)
  - 9 encoding functions (all swap variants + amount calculations)
  - 3 decoding functions with error handling
- **Uniswap V2 Factory** (`src/uniswap-v2-factory.js`) 
  - 8 encoding functions (pair management + fee management)
  - 2 decoding functions
- **ERC20 Standard** (`src/erc20.js`)
  - 9 encoding functions (read + write operations)
  - 2 decoding functions
  - Input validation for addresses
- **Custom ABI** (`src/custom-abi.js`)
  - 11 utility functions for generic ABI handling
  - Function introspection and validation
- **Informer Contract** (`src/informer-abi.js`)
  - 5 encoding functions for specialized queries
  - 5 decoding functions with complex tuple parsing

#### Error Handling & Validation
- **Address Validation**: Proper Ethereum address format checking
- **ABI Validation**: Function existence checking in provided ABIs
- **Data Validation**: Empty/invalid hex data handling
- **Graceful Fallbacks**: Manual parsing for library limitations

#### Testing & Quality Assurance
- **Comprehensive Test Suite**: 55 tests covering all functionality
- **100% Success Rate**: All edge cases and error scenarios handled
- **Real-world Scenarios**: Production-ready DeFi workflow examples
- **Error Handling Tests**: Validation of error cases and edge conditions

#### Import Flexibility
- **Individual Functions**: Direct import of specific functions
- **Namespace Imports**: Module-based imports (UniswapV2Router.*)
- **Default Import**: Full package import
- **Mixed Imports**: Combination of above methods

#### Advanced Features
- **Complex Tuple Decoding**: Manual parsing for advanced data structures
- **BigInt Support**: Proper handling of large numbers
- **Library Limitation Workarounds**: Fallback parsing for unsupported features
- **Production Optimizations**: Error handling and validation throughout

### 🔧 Technical Improvements

#### Fixes Applied
1. **Empty Data Handling**: Added validation for empty hex strings in decode functions
2. **Tuple Decoding Limitations**: Implemented manual parsing for complex tuple structures
3. **Address Validation**: Added proper Ethereum address format validation
4. **Error Test Handling**: Fixed test framework to properly handle expected errors
5. **BigInt Serialization**: Proper JSON serialization of BigInt values

#### Library Integration
- **ABICodec Integration**: Correct usage of `@bcoders.gr/abi-codec` patterns
- **Constructor Pattern**: `new ABICodec(ABI_ARRAY)` usage throughout
- **Method Calls**: Proper `encodeFunction()`, `decodeFunction()`, `decodeFunctionResult()` usage
- **Import Pattern**: ES6 module import with destructuring

### 📊 Test Results
```
Total Tests: 55
✅ Passed: 55
❌ Failed: 0
Success Rate: 100.0%
```

### 📚 Documentation
- **Complete README**: Comprehensive usage examples and API reference
- **Code Comments**: Detailed inline documentation
- **Example Suite**: Working examples for all functionality
- **Error Handling Guide**: Documentation of error scenarios

### 🚀 Production Readiness
- **Dependency Management**: Proper npm package structure
- **Version Control**: Semantic versioning ready
- **Publishing Ready**: Can be published to npm registry
- **Enterprise Ready**: Suitable for production DeFi applications

---

**Summary**: The `@bcoders.gr/abi-common` package is now complete with 100% test success rate, comprehensive error handling, and production-ready features for Ethereum contract interactions.
