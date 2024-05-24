declare const Chains: Readonly<{
    "agoric-3": never;
    "cataclysm-1": never;
    "comdex-1": never;
    "archway-1": never;
    "omniflixhub-1": never;
    "secret-4": never;
    "osmosis-1": never;
    prajna: {
        chainId: string;
        chainName: string;
        rpc: string;
        rest: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        }[];
        coinType: number;
        gasPriceStep: {
            low: number;
            average: number;
            high: number;
        };
    };
}>;
export { Chains };
//# sourceMappingURL=index.d.ts.map