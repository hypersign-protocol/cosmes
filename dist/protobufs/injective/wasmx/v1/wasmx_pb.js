// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/wasmx/v1/wasmx.proto (package injective.wasmx.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { FundingMode } from "./proposal_pb.js";
/**
 * @generated from message injective.wasmx.v1.Params
 */
class Params extends Message {
    constructor(data) {
        super();
        /**
         * Set the status to active to indicate that contracts can be executed in
         * begin blocker.
         *
         * @generated from field: bool is_execution_enabled = 1;
         */
        this.isExecutionEnabled = false;
        /**
         * Maximum aggregate total gas to be used for the contract executions in the
         * BeginBlocker.
         *
         * @generated from field: uint64 max_begin_block_total_gas = 2;
         */
        this.maxBeginBlockTotalGas = protoInt64.zero;
        /**
         * the maximum gas limit each individual contract can consume in the
         * BeginBlocker.
         *
         * @generated from field: uint64 max_contract_gas_limit = 3;
         */
        this.maxContractGasLimit = protoInt64.zero;
        /**
         * min_gas_price defines the minimum gas price the contracts must pay to be
         * executed in the BeginBlocker.
         *
         * @generated from field: uint64 min_gas_price = 4;
         */
        this.minGasPrice = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Params().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Params().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Params().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Params, a, b);
    }
}
Params.runtime = proto3;
Params.typeName = "injective.wasmx.v1.Params";
Params.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "is_execution_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "max_begin_block_total_gas", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "max_contract_gas_limit", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "min_gas_price", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
export { Params };
/**
 * @generated from message injective.wasmx.v1.RegisteredContract
 */
class RegisteredContract extends Message {
    constructor(data) {
        super();
        /**
         * limit of gas per BB execution
         *
         * @generated from field: uint64 gas_limit = 1;
         */
        this.gasLimit = protoInt64.zero;
        /**
         * gas price that contract is willing to pay for execution in BeginBlocker
         *
         * @generated from field: uint64 gas_price = 2;
         */
        this.gasPrice = protoInt64.zero;
        /**
         * is contract currently active
         *
         * @generated from field: bool is_executable = 3;
         */
        this.isExecutable = false;
        /**
         * code_id that is allowed to be executed (to prevent malicious updates) - if
         * nil/0 any code_id can be executed
         *
         * @generated from field: uint64 code_id = 4;
         */
        this.codeId = protoInt64.zero;
        /**
         * optional - admin addr that is allowed to update contract data
         *
         * @generated from field: string admin_address = 5;
         */
        this.adminAddress = "";
        /**
         * Optional: address of the contract granting fee
         * Must be set if fund_mode is GrantOnly
         *
         * @generated from field: string granter_address = 6;
         */
        this.granterAddress = "";
        /**
         * funding mode
         *
         * @generated from field: injective.wasmx.v1.FundingMode fund_mode = 7;
         */
        this.fundMode = FundingMode.Unspecified;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new RegisteredContract().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new RegisteredContract().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new RegisteredContract().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(RegisteredContract, a, b);
    }
}
RegisteredContract.runtime = proto3;
RegisteredContract.typeName = "injective.wasmx.v1.RegisteredContract";
RegisteredContract.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "gas_limit", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "gas_price", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "is_executable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "code_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "admin_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "granter_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "fund_mode", kind: "enum", T: proto3.getEnumType(FundingMode) },
]);
export { RegisteredContract };
//# sourceMappingURL=wasmx_pb.js.map