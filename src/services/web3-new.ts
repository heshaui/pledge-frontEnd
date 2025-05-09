import { PledgePool, SendOptions } from '_src/contracts/PledgePool';
import { DebtToken } from '_src/contracts/DebtToken';
import { BscPledgeOracle } from '_src/contracts/BscPledgeOracle';
import { AddressPrivileges } from '_src/contracts/AddressPrivileges';
import { ERC20 } from '_src/contracts/ERC20';
import { IBEP20 } from '_src/contracts/IBEP20';
import type { PledgerBridgeBSC } from '_src/contracts/PledgerBridgeBSC';
import type { PledgerBridgeETH } from '_src/contracts/PledgerBridgeETH';

const PledgePoolAbi = require('_abis/PledgePool.json');
const DebtTokenAbi = require('_abis/DebtToken.json');
const BscPledgeOracleAbi = require('_abis/BscPledgeOracle.json');
const AddressPrivilegesAbi = require('_abis/AddressPrivileges.json');
const PledgerBridgeBSCAbi = require('_abis/PledgerBridgeBSC.json');
const PledgerBridgeETHAbi = require('_abis/PledgerBridgeETH.json');
const ERC20Abi = require('_abis/ERC20.json');
const IBEP20Abi = require('_abis/IBEP20.json');

import type { Address } from 'viem';
import { useChainId, useWalletClient } from 'wagmi';
import getContract from '@/utils/contractHelper';

const getBscPledgeOracleAbiContract = (chainId: number, address: string) => {
    return getContract({
        abi: BscPledgeOracleAbi,
        address: address as Address,
        chainId
    }) as unknown as {
        read: BscPledgeOracle;
    };
};

const getPledgePoolContract = (chainId: number, address: string) => {
    return getContract({
        abi: PledgePoolAbi,
        address: address as Address,
        chainId
    }) as unknown as {
        read: PledgePool;
    };
};
const getERC20Contract = (chainId: number, address: string) => {
    return getContract({
        abi: ERC20Abi,
        address: address as Address,
        chainId
    }) as unknown as {
        read: ERC20;
    };
};
const getIBEP20Contract = (chainId: number, address: string) => {
    return getContract({
        abi: IBEP20Abi,
        address: address as Address,
        chainId
    }) as unknown as {
        read: IBEP20;
    };
};

const getDefaultAccount = () => {
    const { data: walletClient } = useWalletClient();
  
    if (walletClient && walletClient.account) {
      return walletClient.account;
    }
  
    return '';  // No wallet connected
};

const gasOptions = async (params = {}): Promise<SendOptions> => {
  const from = await getDefaultAccount();
  return {
    from: from as Address,
    ...params,
  };
};

export {
    getBscPledgeOracleAbiContract,
    getPledgePoolContract,
    getERC20Contract,
    getIBEP20Contract,
    getDefaultAccount,
    gasOptions
}