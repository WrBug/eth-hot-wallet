
const Network = {
  Offline: { rpc: 'offline', tx_explorer: null },
  'DDW': { rpc: 'https://rpc.ttl.kim', tx_explorer: null },
  'Nilu': { rpc: 'https://rpc.nilu.kim', tx_explorer: 'https://ropsten.etherscan.io/tx/' },
  'Main Net': { rpc: 'https://mainnet.infura.io/GjiCzFxpQAUkPtDUpKEP', tx_explorer: 'https://etherscan.io/tx/' },
};

module.exports = Network;
