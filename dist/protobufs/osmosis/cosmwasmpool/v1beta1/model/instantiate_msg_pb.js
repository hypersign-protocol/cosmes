// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/cosmwasmpool/v1beta1/model/instantiate_msg.proto (package osmosis.cosmwasmpool.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * ===================== InstantiateMsg
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.InstantiateMsg
 */
class InstantiateMsg extends Message {
    constructor(data) {
        super();
        /**
         * pool_asset_denoms is the list of asset denoms that are initialized
         * at pool creation time.
         *
         * @generated from field: repeated string pool_asset_denoms = 1;
         */
        this.poolAssetDenoms = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new InstantiateMsg().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new InstantiateMsg().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new InstantiateMsg().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(InstantiateMsg, a, b);
    }
}
InstantiateMsg.runtime = proto3;
InstantiateMsg.typeName = "osmosis.cosmwasmpool.v1beta1.InstantiateMsg";
InstantiateMsg.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_asset_denoms", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
export { InstantiateMsg };
//# sourceMappingURL=instantiate_msg_pb.js.map