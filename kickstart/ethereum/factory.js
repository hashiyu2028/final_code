import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x2b8106A6A50E601eA8CDa15557e114E1055dFf8f' //L182
//   '0xD3B27C19380380547Eee038E971792e148DB7693' //L149
);

export default instance;