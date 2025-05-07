// 创建viem多链client
import { createPublicClient, http, PublicClient } from 'viem';
import { supportedChains } from '_constants/chains';

interface clientsType {
	[chainId: number]: PublicClient
}

const clientCache: clientsType  = {};

export const viemClients = (chainId: number): PublicClient => {
  if (clientCache[chainId]) return clientCache[chainId];

  const config = supportedChains[chainId];
  if (!config) throw new Error(`Unsupported chainId: ${chainId}`);

  const client = createPublicClient({
    chain: config.chain,
    transport: http(config.rpcUrl),
  });

  clientCache[chainId] = client;
  return client;
};
