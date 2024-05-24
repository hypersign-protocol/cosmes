import { Tx, } from "../../../client/index.js";
import { base16 } from "../../../codec/index.js";
import { WalletType } from "../../constants/WalletType.js";
import { ConnectedWallet, } from "../ConnectedWallet.js";
export class KeplrExtension extends ConnectedWallet {
    constructor(walletName, ext, chainId, pubKey, address, rpc, gasPrice, useAmino) {
        super(walletName, WalletType.EXTENSION, chainId, pubKey, address, rpc, gasPrice);
        this.ext = ext;
        this.ext.defaultOptions = {
            sign: {
                preferNoSetFee: true,
                preferNoSetMemo: true,
            },
        };
        this.useAmino = useAmino;
    }
    async signArbitrary(data) {
        const res = await this.ext.signArbitrary(this.chainId, this.address, data);
        return {
            data,
            pubKey: res.pub_key.value,
            signature: res.signature,
        };
    }
    async experimentalSuggestChain(chainInfo) {
        const res = await this.ext.experimentalSuggestChain(chainInfo);
        return res;
    }
    async signAndBroadcastTx({ msgs, memo, timeoutHeight }, fee, accountNumber, sequence) {
        const tx = new Tx({
            chainId: this.chainId,
            pubKey: this.pubKey,
            msgs: msgs,
        });
        const params = {
            accountNumber,
            sequence,
            fee,
            memo,
            timeoutHeight,
        };
        let txRaw;
        if (this.useAmino) {
            const { signed, signature } = await this.ext.signAmino(this.chainId, this.address, tx.toStdSignDoc(params));
            txRaw = tx.toSignedAmino(signed, signature.signature);
        }
        else {
            const { signed, signature } = await this.ext.signDirect(this.chainId, this.address, tx.toSignDoc(params));
            txRaw = tx.toSignedDirect(signed, signature.signature);
        }
        const txHash = await this.ext.sendTx(this.chainId, txRaw.toBinary(), "sync");
        return base16.encode(txHash);
    }
}
//# sourceMappingURL=KeplrExtension.js.map