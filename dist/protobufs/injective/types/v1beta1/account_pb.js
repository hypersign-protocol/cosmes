// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/types/v1beta1/account.proto (package injective.types.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { BaseAccount } from "../../../cosmos/auth/v1beta1/auth_pb.js";
/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 *
 * @generated from message injective.types.v1beta1.EthAccount
 */
export class EthAccount extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes code_hash = 2;
         */
        this.codeHash = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EthAccount().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EthAccount().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EthAccount().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EthAccount, a, b);
    }
}
EthAccount.runtime = proto3;
EthAccount.typeName = "injective.types.v1beta1.EthAccount";
EthAccount.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "base_account", kind: "message", T: BaseAccount },
    { no: 2, name: "code_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
//# sourceMappingURL=account_pb.js.map