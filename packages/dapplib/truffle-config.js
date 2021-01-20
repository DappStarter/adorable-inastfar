require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture casino symptom security chat crater remember column gesture option book senior'; 
let testAccounts = [
"0x26ae3cd0731c14b9b74f84fb4a89b5603f323ab3cb9105d07468daabc72168d8",
"0x084577cb84316933dedcee77f9c9a1a2b92a97d119d1a6f7deb256e55e069788",
"0xc52ee7164df622940ff5a2aaefed170419b91d4c3f6c5b7c35d31ce2675ab039",
"0x8213d2325ad098ad1b952f94286206e6ed798651206bf149bc6338388c0a9a06",
"0x4beeb2adb0612c3637bb5b6c47168a2eda9c5e73762ca202135d831113029456",
"0x1576199154eb883a67b8d49ab45e390bb90f21afe8d206d407898ed78527711f",
"0x13d6f49b04634ea96f69feda9c71ca641fbeca5942aec1e57c7a3aa0a33615a8",
"0x9db58085fe84c4b790e02572ed003b77603a4ff601b2a5ab704004f266e33f7e",
"0x3ebe60d9f96d58802bcd7060ac2d066a7d436e078ad459b9fe02950457030222",
"0x23ecbbaef50d703c8b6878370162741374748cd82363412eac781432ea2d8f0f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
