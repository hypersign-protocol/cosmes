import { base64, utf8 } from "../../../codec/index.js";
import { WalletName } from "../../constants/WalletName.js";
import { WalletType } from "../../constants/WalletType.js";
import { ConnectedWallet, } from "../ConnectedWallet.js";
import { toStationTx } from "./utils/toStationTx.js";
export class StationExtension extends ConnectedWallet {
    constructor(ext, chainId, pubKey, address, rpc, gasPrice) {
        super(WalletName.STATION, WalletType.EXTENSION, chainId, pubKey, address, rpc, gasPrice);
        this.ext = ext;
    }
    async signArbitrary(data) {
        const { public_key, signature } = await this.normaliseError(this.ext.signBytes(base64.encode(utf8.decode(data)), true));
        return {
            data,
            pubKey: public_key,
            signature: signature,
        };
    }
    async signAndBroadcastTx(unsignedTx, fee) {
        const { msgs, memo } = unsignedTx;
        const { code, raw_log, txhash } = await this.normaliseError(this.ext.post(toStationTx(this.chainId, fee, msgs, memo), true));
        if (code) {
            throw new Error(raw_log);
        }
        return txhash;
    }
    /**
     * Normalises the error thrown by the Station extension into a standard `Error`
     * instance. Returns the result of the `promise` if it resolves successfully.
     */
    async normaliseError(promise) {
        try {
            return await promise;
        }
        catch (err) {
            if (typeof err === "string") {
                throw new Error(err);
            }
            if (err instanceof Error) {
                throw err;
            }
            throw new Error("Unknown error from Station extension: " + JSON.stringify(err));
        }
    }
}
//# sourceMappingURL=StationExtension.js.map