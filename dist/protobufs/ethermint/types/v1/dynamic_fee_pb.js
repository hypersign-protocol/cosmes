// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file ethermint/types/v1/dynamic_fee.proto (package ethermint.types.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * ExtensionOptionDynamicFeeTx is an extension option that specifies the maxPrioPrice for cosmos tx
 *
 * @generated from message ethermint.types.v1.ExtensionOptionDynamicFeeTx
 */
class ExtensionOptionDynamicFeeTx extends Message {
    constructor(data) {
        super();
        /**
         * max_priority_price is the same as `max_priority_fee_per_gas` in eip-1559 spec
         *
         * @generated from field: string max_priority_price = 1;
         */
        this.maxPriorityPrice = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ExtensionOptionDynamicFeeTx().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ExtensionOptionDynamicFeeTx().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ExtensionOptionDynamicFeeTx().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ExtensionOptionDynamicFeeTx, a, b);
    }
}
ExtensionOptionDynamicFeeTx.runtime = proto3;
ExtensionOptionDynamicFeeTx.typeName = "ethermint.types.v1.ExtensionOptionDynamicFeeTx";
ExtensionOptionDynamicFeeTx.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "max_priority_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { ExtensionOptionDynamicFeeTx };
//# sourceMappingURL=dynamic_fee_pb.js.map