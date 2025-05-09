import { gasOptions, getBscPledgeOracleAbiContract } from './web3-new';
import type { BscPledgeOracle } from '_src/contracts/BscPledgeOracle';
import { pledge_address, ORACLE_address, ORACLE_mainaddress } from '_src/utils/constants';

const BscPledgeOracleServer = {
  async getPrice(asset: string, chainId: number) {
    const contract = getBscPledgeOracleAbiContract(
        chainId,
        chainId == 97 ? ORACLE_address : chainId == 56 ? ORACLE_mainaddress : ORACLE_mainaddress,
    );
    const options = await gasOptions();
    const rates = await contract.read.getPrice(asset);
    return rates;
  },
  async getPrices(asset: string[], chainId: number) {
    const contract = getBscPledgeOracleAbiContract(
        chainId,
      chainId == 97 ? ORACLE_address : chainId == 56 ? ORACLE_mainaddress : ORACLE_mainaddress,
    );
    const options = await gasOptions();
    const rates = await contract.read.getPrices(asset);
    return rates;
  },
};

export default BscPledgeOracleServer;
