import { Secp256k1PubKey, getAccount, toBaseAccount } from "../../../client/index.js";
import { base64 } from "../../../codec/index.js";
import { CosmosCryptoSecp256k1PubKey } from "../../../protobufs/index.js";
import { WalletName } from "../../constants/WalletName.js";
import { WalletType } from "../../constants/WalletType.js";
import { onWindowEvent } from "../../utils/window.js";
import { WalletConnectV1 } from "../../walletconnect/WalletConnectV1.js";
import { WalletController } from "../WalletController.js";
import { StationExtension } from "./StationExtension.js";
import { StationWalletConnectV1 } from "./StationWalletConnectV1.js";
const TERRA_CLASSIC_MAINNET_CHAIN_ID = "columbus-5";
const TERRA_MAINNET_CHAIN_ID = "phoenix-1";
const TERRA_TESTNET_CHAIN_ID = "pisco-1";
const TERRA_CHAINS = [
    TERRA_CLASSIC_MAINNET_CHAIN_ID,
    TERRA_MAINNET_CHAIN_ID,
    TERRA_TESTNET_CHAIN_ID,
];
export class StationController extends WalletController {
    constructor() {
        super(WalletName.STATION);
        this.wc = new WalletConnectV1("cosmes.wallet.station.wcSession", {
            name: "Station",
            android: "",
            ios: "",
            isStation: true,
        }, {
            bridge: "https://walletconnect.terra.dev",
            signingMethods: [],
        });
        this.registerAccountChangeHandlers();
    }
    async isInstalled(type) {
        return type === WalletType.EXTENSION ? "station" in window : true;
    }
    async connectWalletConnect(chains) {
        for (const { chainId } of chains) {
            // Station mobile's WallectConnect only supports these chains
            // TODO: update when Station mobile supports more chains
            if (TERRA_CHAINS.includes(chainId)) {
                continue;
            }
            throw new Error(`${chainId} not supported`);
        }
        const wallets = new Map();
        const wc = await this.wc.connect();
        // Station mobile only returns 1 address for now
        // TODO: update when Station mobile supports more chains
        const address = wc.accounts[0];
        for (let i = 0; i < chains.length; i++) {
            const { chainId, rpc, gasPrice } = chains[i];
            try {
                // Since Station's WalletConnect doesn't support getting pub keys, we
                // need to query the account to get it. However, if the wallet does
                // not contain funds, the RPC will throw errors.
                const key = await this.getPubKey(chainId, rpc, address);
                wallets.set(chainId, new StationWalletConnectV1(wc, chainId, key, address, rpc, gasPrice));
            }
            catch (err) {
                // We simply log and ignore the error for now
                console.warn(err);
            }
        }
        this.wc.cacheSession(wc);
        return { wallets, wc: this.wc };
    }
    async connectExtension(chains) {
        const wallets = new Map();
        const ext = window.station;
        if (!ext) {
            throw new Error("Station extension is not installed");
        }
        const { addresses, pubkey } = await ext.connect();
        // Station will only return one or the other, but not both
        // so we simply set the other one manually
        addresses[TERRA_CLASSIC_MAINNET_CHAIN_ID] ?? (addresses[TERRA_CLASSIC_MAINNET_CHAIN_ID] = addresses[TERRA_MAINNET_CHAIN_ID] ?? addresses[TERRA_TESTNET_CHAIN_ID]);
        addresses[TERRA_MAINNET_CHAIN_ID] ?? (addresses[TERRA_MAINNET_CHAIN_ID] = addresses[TERRA_CLASSIC_MAINNET_CHAIN_ID]);
        for (const { chainId, rpc, gasPrice } of chains) {
            const address = addresses[chainId];
            if (address == null) {
                throw new Error(`${chainId} not supported`);
            }
            const coinType = TERRA_CHAINS.includes(chainId) ? "330" : "118";
            const key = pubkey
                ? new Secp256k1PubKey({
                    chainId,
                    key: base64.decode(pubkey[coinType]),
                })
                : // Legacy support for older versions of Station that don't return pubkey
                    await this.getPubKey(chainId, rpc, address);
            wallets.set(chainId, new StationExtension(ext, chainId, key, address, rpc, gasPrice));
        }
        return wallets;
    }
    registerAccountChangeHandlers() {
        onWindowEvent("station_wallet_change", () => this.changeAccount(WalletType.EXTENSION));
        // Station's WalletConnect v1 doesn't support account change events
    }
    async getPubKey(chainId, rpc, address) {
        const account = await getAccount(rpc, { address });
        const { pubKey } = toBaseAccount(account);
        if (!pubKey) {
            throw new Error("Unable to get pub key");
        }
        // TODO: handle other key types (?)
        return new Secp256k1PubKey({
            chainId,
            key: CosmosCryptoSecp256k1PubKey.fromBinary(pubKey.value).key,
        });
    }
}
//# sourceMappingURL=StationController.js.map