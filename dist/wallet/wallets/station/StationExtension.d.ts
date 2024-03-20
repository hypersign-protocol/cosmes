import { PlainMessage } from "@bufbuild/protobuf";
import { Secp256k1PubKey } from "../../../client/index.js";
import { CosmosBaseV1beta1Coin as Coin, CosmosTxV1beta1Fee as Fee } from "../../../protobufs/index.js";
import { ConnectedWallet, SignArbitraryResponse, UnsignedTx } from "../ConnectedWallet.js";
import { Station } from "./types.js";
export declare class StationExtension extends ConnectedWallet {
    private readonly ext;
    constructor(ext: Station, chainId: string, pubKey: Secp256k1PubKey, address: string, rpc: string, gasPrice: PlainMessage<Coin>);
    signArbitrary(data: string): Promise<SignArbitraryResponse>;
    signAndBroadcastTx(unsignedTx: UnsignedTx, fee: Fee): Promise<string>;
    /**
     * Normalises the error thrown by the Station extension into a standard `Error`
     * instance. Returns the result of the `promise` if it resolves successfully.
     */
    private normaliseError;
}
//# sourceMappingURL=StationExtension.d.ts.map