// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file ethermint/evm/v1/query.proto (package ethermint.evm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination_pb.js";
import { Log, Params, TraceConfig } from "./evm_pb.js";
import { MsgEthereumTx } from "./tx_pb.js";
/**
 * QueryAccountRequest is the request type for the Query/Account RPC method.
 *
 * @generated from message ethermint.evm.v1.QueryAccountRequest
 */
class QueryAccountRequest extends Message {
    constructor(data) {
        super();
        /**
         * address is the ethereum hex address to query the account for.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAccountRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAccountRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAccountRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryAccountRequest, a, b);
    }
}
QueryAccountRequest.runtime = proto3;
QueryAccountRequest.typeName = "ethermint.evm.v1.QueryAccountRequest";
QueryAccountRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryAccountRequest };
/**
 * QueryAccountResponse is the response type for the Query/Account RPC method.
 *
 * @generated from message ethermint.evm.v1.QueryAccountResponse
 */
class QueryAccountResponse extends Message {
    constructor(data) {
        super();
        /**
         * balance is the balance of the EVM denomination.
         *
         * @generated from field: string balance = 1;
         */
        this.balance = "";
        /**
         * code_hash is the hex-formatted code bytes from the EOA.
         *
         * @generated from field: string code_hash = 2;
         */
        this.codeHash = "";
        /**
         * nonce is the account's sequence number.
         *
         * @generated from field: uint64 nonce = 3;
         */
        this.nonce = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAccountResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAccountResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAccountResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryAccountResponse, a, b);
    }
}
QueryAccountResponse.runtime = proto3;
QueryAccountResponse.typeName = "ethermint.evm.v1.QueryAccountResponse";
QueryAccountResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "balance", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "code_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "nonce", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
export { QueryAccountResponse };
/**
 * QueryCosmosAccountRequest is the request type for the Query/CosmosAccount RPC
 * method.
 *
 * @generated from message ethermint.evm.v1.QueryCosmosAccountRequest
 */
class QueryCosmosAccountRequest extends Message {
    constructor(data) {
        super();
        /**
         * address is the ethereum hex address to query the account for.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryCosmosAccountRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryCosmosAccountRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryCosmosAccountRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryCosmosAccountRequest, a, b);
    }
}
QueryCosmosAccountRequest.runtime = proto3;
QueryCosmosAccountRequest.typeName = "ethermint.evm.v1.QueryCosmosAccountRequest";
QueryCosmosAccountRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryCosmosAccountRequest };
/**
 * QueryCosmosAccountResponse is the response type for the Query/CosmosAccount
 * RPC method.
 *
 * @generated from message ethermint.evm.v1.QueryCosmosAccountResponse
 */
class QueryCosmosAccountResponse extends Message {
    constructor(data) {
        super();
        /**
         * cosmos_address is the cosmos address of the account.
         *
         * @generated from field: string cosmos_address = 1;
         */
        this.cosmosAddress = "";
        /**
         * sequence is the account's sequence number.
         *
         * @generated from field: uint64 sequence = 2;
         */
        this.sequence = protoInt64.zero;
        /**
         * account_number is the account number
         *
         * @generated from field: uint64 account_number = 3;
         */
        this.accountNumber = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryCosmosAccountResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryCosmosAccountResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryCosmosAccountResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryCosmosAccountResponse, a, b);
    }
}
QueryCosmosAccountResponse.runtime = proto3;
QueryCosmosAccountResponse.typeName = "ethermint.evm.v1.QueryCosmosAccountResponse";
QueryCosmosAccountResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "cosmos_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "account_number", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
export { QueryCosmosAccountResponse };
/**
 * QueryValidatorAccountRequest is the request type for the
 * Query/ValidatorAccount RPC method.
 *
 * @generated from message ethermint.evm.v1.QueryValidatorAccountRequest
 */
class QueryValidatorAccountRequest extends Message {
    constructor(data) {
        super();
        /**
         * cons_address is the validator cons address to query the account for.
         *
         * @generated from field: string cons_address = 1;
         */
        this.consAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryValidatorAccountRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryValidatorAccountRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryValidatorAccountRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryValidatorAccountRequest, a, b);
    }
}
QueryValidatorAccountRequest.runtime = proto3;
QueryValidatorAccountRequest.typeName = "ethermint.evm.v1.QueryValidatorAccountRequest";
QueryValidatorAccountRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "cons_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryValidatorAccountRequest };
/**
 * QueryValidatorAccountResponse is the response type for the
 * Query/ValidatorAccount RPC method.
 *
 * @generated from message ethermint.evm.v1.QueryValidatorAccountResponse
 */
class QueryValidatorAccountResponse extends Message {
    constructor(data) {
        super();
        /**
         * account_address is the cosmos address of the account in bech32 format.
         *
         * @generated from field: string account_address = 1;
         */
        this.accountAddress = "";
        /**
         * sequence is the account's sequence number.
         *
         * @generated from field: uint64 sequence = 2;
         */
        this.sequence = protoInt64.zero;
        /**
         * account_number is the account number
         *
         * @generated from field: uint64 account_number = 3;
         */
        this.accountNumber = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryValidatorAccountResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryValidatorAccountResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryValidatorAccountResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryValidatorAccountResponse, a, b);
    }
}
QueryValidatorAccountResponse.runtime = proto3;
QueryValidatorAccountResponse.typeName = "ethermint.evm.v1.QueryValidatorAccountResponse";
QueryValidatorAccountResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "account_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "account_number", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
export { QueryValidatorAccountResponse };
/**
 * QueryBalanceRequest is the request type for the Query/Balance RPC method.
 *
 * @generated from message ethermint.evm.v1.QueryBalanceRequest
 */
class QueryBalanceRequest extends Message {
    constructor(data) {
        super();
        /**
         * address is the ethereum hex address to query the balance for.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryBalanceRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryBalanceRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryBalanceRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryBalanceRequest, a, b);
    }
}
QueryBalanceRequest.runtime = proto3;
QueryBalanceRequest.typeName = "ethermint.evm.v1.QueryBalanceRequest";
QueryBalanceRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryBalanceRequest };
/**
 * QueryBalanceResponse is the response type for the Query/Balance RPC method.
 *
 * @generated from message ethermint.evm.v1.QueryBalanceResponse
 */
class QueryBalanceResponse extends Message {
    constructor(data) {
        super();
        /**
         * balance is the balance of the EVM denomination.
         *
         * @generated from field: string balance = 1;
         */
        this.balance = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryBalanceResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryBalanceResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryBalanceResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryBalanceResponse, a, b);
    }
}
QueryBalanceResponse.runtime = proto3;
QueryBalanceResponse.typeName = "ethermint.evm.v1.QueryBalanceResponse";
QueryBalanceResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "balance", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryBalanceResponse };
/**
 * QueryStorageRequest is the request type for the Query/Storage RPC method.
 *
 * @generated from message ethermint.evm.v1.QueryStorageRequest
 */
class QueryStorageRequest extends Message {
    constructor(data) {
        super();
        /**
         * address is the ethereum hex address to query the storage state for.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        /**
         * key defines the key of the storage state
         *
         * @generated from field: string key = 2;
         */
        this.key = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryStorageRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryStorageRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryStorageRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryStorageRequest, a, b);
    }
}
QueryStorageRequest.runtime = proto3;
QueryStorageRequest.typeName = "ethermint.evm.v1.QueryStorageRequest";
QueryStorageRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryStorageRequest };
/**
 * QueryStorageResponse is the response type for the Query/Storage RPC
 * method.
 *
 * @generated from message ethermint.evm.v1.QueryStorageResponse
 */
class QueryStorageResponse extends Message {
    constructor(data) {
        super();
        /**
         * value defines the storage state value hash associated with the given key.
         *
         * @generated from field: string value = 1;
         */
        this.value = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryStorageResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryStorageResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryStorageResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryStorageResponse, a, b);
    }
}
QueryStorageResponse.runtime = proto3;
QueryStorageResponse.typeName = "ethermint.evm.v1.QueryStorageResponse";
QueryStorageResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryStorageResponse };
/**
 * QueryCodeRequest is the request type for the Query/Code RPC method.
 *
 * @generated from message ethermint.evm.v1.QueryCodeRequest
 */
class QueryCodeRequest extends Message {
    constructor(data) {
        super();
        /**
         * address is the ethereum hex address to query the code for.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryCodeRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryCodeRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryCodeRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryCodeRequest, a, b);
    }
}
QueryCodeRequest.runtime = proto3;
QueryCodeRequest.typeName = "ethermint.evm.v1.QueryCodeRequest";
QueryCodeRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryCodeRequest };
/**
 * QueryCodeResponse is the response type for the Query/Code RPC
 * method.
 *
 * @generated from message ethermint.evm.v1.QueryCodeResponse
 */
class QueryCodeResponse extends Message {
    constructor(data) {
        super();
        /**
         * code represents the code bytes from an ethereum address.
         *
         * @generated from field: bytes code = 1;
         */
        this.code = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryCodeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryCodeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryCodeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryCodeResponse, a, b);
    }
}
QueryCodeResponse.runtime = proto3;
QueryCodeResponse.typeName = "ethermint.evm.v1.QueryCodeResponse";
QueryCodeResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "code", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
export { QueryCodeResponse };
/**
 * QueryTxLogsRequest is the request type for the Query/TxLogs RPC method.
 *
 * @generated from message ethermint.evm.v1.QueryTxLogsRequest
 */
class QueryTxLogsRequest extends Message {
    constructor(data) {
        super();
        /**
         * hash is the ethereum transaction hex hash to query the logs for.
         *
         * @generated from field: string hash = 1;
         */
        this.hash = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryTxLogsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryTxLogsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryTxLogsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryTxLogsRequest, a, b);
    }
}
QueryTxLogsRequest.runtime = proto3;
QueryTxLogsRequest.typeName = "ethermint.evm.v1.QueryTxLogsRequest";
QueryTxLogsRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
export { QueryTxLogsRequest };
/**
 * QueryTxLogsResponse is the response type for the Query/TxLogs RPC method.
 *
 * @generated from message ethermint.evm.v1.QueryTxLogsResponse
 */
class QueryTxLogsResponse extends Message {
    constructor(data) {
        super();
        /**
         * logs represents the ethereum logs generated from the given transaction.
         *
         * @generated from field: repeated ethermint.evm.v1.Log logs = 1;
         */
        this.logs = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryTxLogsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryTxLogsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryTxLogsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryTxLogsResponse, a, b);
    }
}
QueryTxLogsResponse.runtime = proto3;
QueryTxLogsResponse.typeName = "ethermint.evm.v1.QueryTxLogsResponse";
QueryTxLogsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "logs", kind: "message", T: Log, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
export { QueryTxLogsResponse };
/**
 * QueryParamsRequest defines the request type for querying x/evm parameters.
 *
 * @generated from message ethermint.evm.v1.QueryParamsRequest
 */
class QueryParamsRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryParamsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryParamsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryParamsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryParamsRequest, a, b);
    }
}
QueryParamsRequest.runtime = proto3;
QueryParamsRequest.typeName = "ethermint.evm.v1.QueryParamsRequest";
QueryParamsRequest.fields = proto3.util.newFieldList(() => []);
export { QueryParamsRequest };
/**
 * QueryParamsResponse defines the response type for querying x/evm parameters.
 *
 * @generated from message ethermint.evm.v1.QueryParamsResponse
 */
class QueryParamsResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryParamsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryParamsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryParamsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryParamsResponse, a, b);
    }
}
QueryParamsResponse.runtime = proto3;
QueryParamsResponse.typeName = "ethermint.evm.v1.QueryParamsResponse";
QueryParamsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
]);
export { QueryParamsResponse };
/**
 * EthCallRequest defines EthCall request
 *
 * @generated from message ethermint.evm.v1.EthCallRequest
 */
class EthCallRequest extends Message {
    constructor(data) {
        super();
        /**
         * args uses the same json format as the json rpc api.
         *
         * @generated from field: bytes args = 1;
         */
        this.args = new Uint8Array(0);
        /**
         * gas_cap defines the default gas cap to be used
         *
         * @generated from field: uint64 gas_cap = 2;
         */
        this.gasCap = protoInt64.zero;
        /**
         * proposer_address of the requested block in hex format
         *
         * @generated from field: bytes proposer_address = 3;
         */
        this.proposerAddress = new Uint8Array(0);
        /**
         * chain_id is the eip155 chain id parsed from the requested block header
         *
         * @generated from field: int64 chain_id = 4;
         */
        this.chainId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EthCallRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EthCallRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EthCallRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EthCallRequest, a, b);
    }
}
EthCallRequest.runtime = proto3;
EthCallRequest.typeName = "ethermint.evm.v1.EthCallRequest";
EthCallRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "args", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "gas_cap", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "proposer_address", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "chain_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
export { EthCallRequest };
/**
 * EstimateGasResponse defines EstimateGas response
 *
 * @generated from message ethermint.evm.v1.EstimateGasResponse
 */
class EstimateGasResponse extends Message {
    constructor(data) {
        super();
        /**
         * gas returns the estimated gas
         *
         * @generated from field: uint64 gas = 1;
         */
        this.gas = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EstimateGasResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EstimateGasResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EstimateGasResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EstimateGasResponse, a, b);
    }
}
EstimateGasResponse.runtime = proto3;
EstimateGasResponse.typeName = "ethermint.evm.v1.EstimateGasResponse";
EstimateGasResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "gas", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
export { EstimateGasResponse };
/**
 * QueryTraceTxRequest defines TraceTx request
 *
 * @generated from message ethermint.evm.v1.QueryTraceTxRequest
 */
class QueryTraceTxRequest extends Message {
    constructor(data) {
        super();
        /**
         * predecessors is an array of transactions included in the same block
         * need to be replayed first to get correct context for tracing.
         *
         * @generated from field: repeated ethermint.evm.v1.MsgEthereumTx predecessors = 4;
         */
        this.predecessors = [];
        /**
         * block_number of requested transaction
         *
         * @generated from field: int64 block_number = 5;
         */
        this.blockNumber = protoInt64.zero;
        /**
         * block_hash of requested transaction
         *
         * @generated from field: string block_hash = 6;
         */
        this.blockHash = "";
        /**
         * proposer_address is the proposer of the requested block
         *
         * @generated from field: bytes proposer_address = 8;
         */
        this.proposerAddress = new Uint8Array(0);
        /**
         * chain_id is the the eip155 chain id parsed from the requested block header
         *
         * @generated from field: int64 chain_id = 9;
         */
        this.chainId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryTraceTxRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryTraceTxRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryTraceTxRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryTraceTxRequest, a, b);
    }
}
QueryTraceTxRequest.runtime = proto3;
QueryTraceTxRequest.typeName = "ethermint.evm.v1.QueryTraceTxRequest";
QueryTraceTxRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "msg", kind: "message", T: MsgEthereumTx },
    { no: 3, name: "trace_config", kind: "message", T: TraceConfig },
    { no: 4, name: "predecessors", kind: "message", T: MsgEthereumTx, repeated: true },
    { no: 5, name: "block_number", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "block_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "block_time", kind: "message", T: Timestamp },
    { no: 8, name: "proposer_address", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 9, name: "chain_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
export { QueryTraceTxRequest };
/**
 * QueryTraceTxResponse defines TraceTx response
 *
 * @generated from message ethermint.evm.v1.QueryTraceTxResponse
 */
class QueryTraceTxResponse extends Message {
    constructor(data) {
        super();
        /**
         * data is the response serialized in bytes
         *
         * @generated from field: bytes data = 1;
         */
        this.data = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryTraceTxResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryTraceTxResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryTraceTxResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryTraceTxResponse, a, b);
    }
}
QueryTraceTxResponse.runtime = proto3;
QueryTraceTxResponse.typeName = "ethermint.evm.v1.QueryTraceTxResponse";
QueryTraceTxResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
export { QueryTraceTxResponse };
/**
 * QueryTraceBlockRequest defines TraceTx request
 *
 * @generated from message ethermint.evm.v1.QueryTraceBlockRequest
 */
class QueryTraceBlockRequest extends Message {
    constructor(data) {
        super();
        /**
         * txs is an array of messages in the block
         *
         * @generated from field: repeated ethermint.evm.v1.MsgEthereumTx txs = 1;
         */
        this.txs = [];
        /**
         * block_number of the traced block
         *
         * @generated from field: int64 block_number = 5;
         */
        this.blockNumber = protoInt64.zero;
        /**
         * block_hash (hex) of the traced block
         *
         * @generated from field: string block_hash = 6;
         */
        this.blockHash = "";
        /**
         * proposer_address is the address of the requested block
         *
         * @generated from field: bytes proposer_address = 8;
         */
        this.proposerAddress = new Uint8Array(0);
        /**
         * chain_id is the eip155 chain id parsed from the requested block header
         *
         * @generated from field: int64 chain_id = 9;
         */
        this.chainId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryTraceBlockRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryTraceBlockRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryTraceBlockRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryTraceBlockRequest, a, b);
    }
}
QueryTraceBlockRequest.runtime = proto3;
QueryTraceBlockRequest.typeName = "ethermint.evm.v1.QueryTraceBlockRequest";
QueryTraceBlockRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "txs", kind: "message", T: MsgEthereumTx, repeated: true },
    { no: 3, name: "trace_config", kind: "message", T: TraceConfig },
    { no: 5, name: "block_number", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "block_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "block_time", kind: "message", T: Timestamp },
    { no: 8, name: "proposer_address", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 9, name: "chain_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
export { QueryTraceBlockRequest };
/**
 * QueryTraceBlockResponse defines TraceBlock response
 *
 * @generated from message ethermint.evm.v1.QueryTraceBlockResponse
 */
class QueryTraceBlockResponse extends Message {
    constructor(data) {
        super();
        /**
         * data is the response serialized in bytes
         *
         * @generated from field: bytes data = 1;
         */
        this.data = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryTraceBlockResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryTraceBlockResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryTraceBlockResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryTraceBlockResponse, a, b);
    }
}
QueryTraceBlockResponse.runtime = proto3;
QueryTraceBlockResponse.typeName = "ethermint.evm.v1.QueryTraceBlockResponse";
QueryTraceBlockResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
export { QueryTraceBlockResponse };
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 *
 * @generated from message ethermint.evm.v1.QueryBaseFeeRequest
 */
class QueryBaseFeeRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryBaseFeeRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryBaseFeeRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryBaseFeeRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryBaseFeeRequest, a, b);
    }
}
QueryBaseFeeRequest.runtime = proto3;
QueryBaseFeeRequest.typeName = "ethermint.evm.v1.QueryBaseFeeRequest";
QueryBaseFeeRequest.fields = proto3.util.newFieldList(() => []);
export { QueryBaseFeeRequest };
/**
 * QueryBaseFeeResponse returns the EIP1559 base fee.
 *
 * @generated from message ethermint.evm.v1.QueryBaseFeeResponse
 */
class QueryBaseFeeResponse extends Message {
    constructor(data) {
        super();
        /**
         * base_fee is the EIP1559 base fee
         *
         * @generated from field: string base_fee = 1;
         */
        this.baseFee = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryBaseFeeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryBaseFeeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryBaseFeeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryBaseFeeResponse, a, b);
    }
}
QueryBaseFeeResponse.runtime = proto3;
QueryBaseFeeResponse.typeName = "ethermint.evm.v1.QueryBaseFeeResponse";
QueryBaseFeeResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "base_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryBaseFeeResponse };
//# sourceMappingURL=query_pb.js.map