// config.ts
import { http } from "wagmi";
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { Chain } from "viem";

// 1. 自定义 BSC 主网 和 测试网链
export const bscMainnet: Chain = {
  id: 56,
  name: "BSC Mainnet",
  nativeCurrency: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ["https://bsc-dataseed.binance.org/"] },
  },
  blockExplorers: {
    default: { name: "BscScan", url: "https://bscscan.com" },
  },
};

export const bscTestnet: Chain = {
  id: 97,
  name: "BSC Testnet",
  nativeCurrency: {
    name: "tBNB",
    symbol: "tBNB",
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ["https://data-seed-prebsc-1-s1.binance.org:8545/"] },
  },
  blockExplorers: {
    default: { name: "BscScan Testnet", url: "https://testnet.bscscan.com" },
  },
  testnet: true,
};

// 2. WalletConnect 项目 ID
const projectId = "ba6959053c9d7ba9a364dab98d9fb4f0";

// 3. 配置 WAGMI
export const config = getDefaultConfig({
  appName: 'Rcc Stake',
  projectId,
  chains: [bscMainnet, bscTestnet],
  transports: {
    [bscMainnet.id]: http(bscMainnet.rpcUrls.default.http[0]),
    [bscTestnet.id]: http(bscTestnet.rpcUrls.default.http[0]),
  },
  ssr: true
});
