import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x41D7D38F68261C2f0e7F86F8B9bB813EFC99BDC4"
);

export default instance;
