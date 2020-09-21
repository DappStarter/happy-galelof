require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture stool radar ranch pulse hunt cover army ghost'; 
let testAccounts = [
"0x51385f7c86d1491ec50a8224a26da2bf1cfa6d9c2eac01f7c9dad9364c134218",
"0xaf1ba3d6776926a90f9b854fd131dbacb6917f1714349aa048606ab4c52d69e4",
"0xa1f53d41c428881aece40c85e606380e9aae1f12dfd431494e54d06c10ca09b2",
"0x41d002287dbca8285bc2126c1e50d3e6ad24e9fff2502f4c8f91172675ad415c",
"0x1dc69fcb6ad778ddcbc795a488f0235f89a7b5ef8c8644431674a9894ff3dbb0",
"0x51e2fac915e413809f2c809998f0cee8bdb55d7d5195a07e93bba82a8d4a37b8",
"0x0baadbfcd82da2a0af03dae188f9d5fc15d5591bcc84a9a6b65c1ae41807cf2c",
"0x46b0bab452e7c548d126ea0b005347c6e7346897747ecd30c72da2a814e4db3d",
"0xda0a681847ca1c64c0309ca81616572bb1f433af0bf19340bf3c2d9faf56f90f",
"0xd908ef97a06103d04ddd4fc12d58d2b33c2704995636a07c03ae767397b19dbc"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
