// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/distribution/v1beta1/query.proto (package cosmos.distribution.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { DelegationDelegatorReward, Params, ValidatorAccumulatedCommission, ValidatorOutstandingRewards, ValidatorSlashEvent } from "./distribution_pb.js";
import { DecCoin } from "../../base/v1beta1/coin_pb.js";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryParamsRequest
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
QueryParamsRequest.typeName = "cosmos.distribution.v1beta1.QueryParamsRequest";
QueryParamsRequest.fields = proto3.util.newFieldList(() => []);
export { QueryParamsRequest };
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryParamsResponse
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
QueryParamsResponse.typeName = "cosmos.distribution.v1beta1.QueryParamsResponse";
QueryParamsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
]);
export { QueryParamsResponse };
/**
 * QueryValidatorDistributionInfoRequest is the request type for the Query/ValidatorDistributionInfo RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest
 */
class QueryValidatorDistributionInfoRequest extends Message {
    constructor(data) {
        super();
        /**
         * validator_address defines the validator address to query for.
         *
         * @generated from field: string validator_address = 1;
         */
        this.validatorAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryValidatorDistributionInfoRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryValidatorDistributionInfoRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryValidatorDistributionInfoRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryValidatorDistributionInfoRequest, a, b);
    }
}
QueryValidatorDistributionInfoRequest.runtime = proto3;
QueryValidatorDistributionInfoRequest.typeName = "cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest";
QueryValidatorDistributionInfoRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryValidatorDistributionInfoRequest };
/**
 * QueryValidatorDistributionInfoResponse is the response type for the Query/ValidatorDistributionInfo RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse
 */
class QueryValidatorDistributionInfoResponse extends Message {
    constructor(data) {
        super();
        /**
         * operator_address defines the validator operator address.
         *
         * @generated from field: string operator_address = 1;
         */
        this.operatorAddress = "";
        /**
         * self_bond_rewards defines the self delegations rewards.
         *
         * @generated from field: repeated cosmos.base.v1beta1.DecCoin self_bond_rewards = 2;
         */
        this.selfBondRewards = [];
        /**
         * commission defines the commission the validator received.
         *
         * @generated from field: repeated cosmos.base.v1beta1.DecCoin commission = 3;
         */
        this.commission = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryValidatorDistributionInfoResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryValidatorDistributionInfoResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryValidatorDistributionInfoResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryValidatorDistributionInfoResponse, a, b);
    }
}
QueryValidatorDistributionInfoResponse.runtime = proto3;
QueryValidatorDistributionInfoResponse.typeName = "cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse";
QueryValidatorDistributionInfoResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "operator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "self_bond_rewards", kind: "message", T: DecCoin, repeated: true },
    { no: 3, name: "commission", kind: "message", T: DecCoin, repeated: true },
]);
export { QueryValidatorDistributionInfoResponse };
/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest
 */
class QueryValidatorOutstandingRewardsRequest extends Message {
    constructor(data) {
        super();
        /**
         * validator_address defines the validator address to query for.
         *
         * @generated from field: string validator_address = 1;
         */
        this.validatorAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryValidatorOutstandingRewardsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryValidatorOutstandingRewardsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryValidatorOutstandingRewardsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryValidatorOutstandingRewardsRequest, a, b);
    }
}
QueryValidatorOutstandingRewardsRequest.runtime = proto3;
QueryValidatorOutstandingRewardsRequest.typeName = "cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest";
QueryValidatorOutstandingRewardsRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryValidatorOutstandingRewardsRequest };
/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse
 */
class QueryValidatorOutstandingRewardsResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryValidatorOutstandingRewardsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryValidatorOutstandingRewardsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryValidatorOutstandingRewardsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryValidatorOutstandingRewardsResponse, a, b);
    }
}
QueryValidatorOutstandingRewardsResponse.runtime = proto3;
QueryValidatorOutstandingRewardsResponse.typeName = "cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse";
QueryValidatorOutstandingRewardsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "rewards", kind: "message", T: ValidatorOutstandingRewards },
]);
export { QueryValidatorOutstandingRewardsResponse };
/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 *
 * @generated from message cosmos.distribution.v1beta1.QueryValidatorCommissionRequest
 */
class QueryValidatorCommissionRequest extends Message {
    constructor(data) {
        super();
        /**
         * validator_address defines the validator address to query for.
         *
         * @generated from field: string validator_address = 1;
         */
        this.validatorAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryValidatorCommissionRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryValidatorCommissionRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryValidatorCommissionRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryValidatorCommissionRequest, a, b);
    }
}
QueryValidatorCommissionRequest.runtime = proto3;
QueryValidatorCommissionRequest.typeName = "cosmos.distribution.v1beta1.QueryValidatorCommissionRequest";
QueryValidatorCommissionRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryValidatorCommissionRequest };
/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 *
 * @generated from message cosmos.distribution.v1beta1.QueryValidatorCommissionResponse
 */
class QueryValidatorCommissionResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryValidatorCommissionResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryValidatorCommissionResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryValidatorCommissionResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryValidatorCommissionResponse, a, b);
    }
}
QueryValidatorCommissionResponse.runtime = proto3;
QueryValidatorCommissionResponse.typeName = "cosmos.distribution.v1beta1.QueryValidatorCommissionResponse";
QueryValidatorCommissionResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "commission", kind: "message", T: ValidatorAccumulatedCommission },
]);
export { QueryValidatorCommissionResponse };
/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 *
 * @generated from message cosmos.distribution.v1beta1.QueryValidatorSlashesRequest
 */
class QueryValidatorSlashesRequest extends Message {
    constructor(data) {
        super();
        /**
         * validator_address defines the validator address to query for.
         *
         * @generated from field: string validator_address = 1;
         */
        this.validatorAddress = "";
        /**
         * starting_height defines the optional starting height to query the slashes.
         *
         * @generated from field: uint64 starting_height = 2;
         */
        this.startingHeight = protoInt64.zero;
        /**
         * starting_height defines the optional ending height to query the slashes.
         *
         * @generated from field: uint64 ending_height = 3;
         */
        this.endingHeight = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryValidatorSlashesRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryValidatorSlashesRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryValidatorSlashesRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryValidatorSlashesRequest, a, b);
    }
}
QueryValidatorSlashesRequest.runtime = proto3;
QueryValidatorSlashesRequest.typeName = "cosmos.distribution.v1beta1.QueryValidatorSlashesRequest";
QueryValidatorSlashesRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "starting_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "ending_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "pagination", kind: "message", T: PageRequest },
]);
export { QueryValidatorSlashesRequest };
/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryValidatorSlashesResponse
 */
class QueryValidatorSlashesResponse extends Message {
    constructor(data) {
        super();
        /**
         * slashes defines the slashes the validator received.
         *
         * @generated from field: repeated cosmos.distribution.v1beta1.ValidatorSlashEvent slashes = 1;
         */
        this.slashes = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryValidatorSlashesResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryValidatorSlashesResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryValidatorSlashesResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryValidatorSlashesResponse, a, b);
    }
}
QueryValidatorSlashesResponse.runtime = proto3;
QueryValidatorSlashesResponse.typeName = "cosmos.distribution.v1beta1.QueryValidatorSlashesResponse";
QueryValidatorSlashesResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "slashes", kind: "message", T: ValidatorSlashEvent, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
export { QueryValidatorSlashesResponse };
/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryDelegationRewardsRequest
 */
class QueryDelegationRewardsRequest extends Message {
    constructor(data) {
        super();
        /**
         * delegator_address defines the delegator address to query for.
         *
         * @generated from field: string delegator_address = 1;
         */
        this.delegatorAddress = "";
        /**
         * validator_address defines the validator address to query for.
         *
         * @generated from field: string validator_address = 2;
         */
        this.validatorAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDelegationRewardsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDelegationRewardsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDelegationRewardsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDelegationRewardsRequest, a, b);
    }
}
QueryDelegationRewardsRequest.runtime = proto3;
QueryDelegationRewardsRequest.typeName = "cosmos.distribution.v1beta1.QueryDelegationRewardsRequest";
QueryDelegationRewardsRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryDelegationRewardsRequest };
/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryDelegationRewardsResponse
 */
class QueryDelegationRewardsResponse extends Message {
    constructor(data) {
        super();
        /**
         * rewards defines the rewards accrued by a delegation.
         *
         * @generated from field: repeated cosmos.base.v1beta1.DecCoin rewards = 1;
         */
        this.rewards = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDelegationRewardsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDelegationRewardsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDelegationRewardsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDelegationRewardsResponse, a, b);
    }
}
QueryDelegationRewardsResponse.runtime = proto3;
QueryDelegationRewardsResponse.typeName = "cosmos.distribution.v1beta1.QueryDelegationRewardsResponse";
QueryDelegationRewardsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "rewards", kind: "message", T: DecCoin, repeated: true },
]);
export { QueryDelegationRewardsResponse };
/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest
 */
class QueryDelegationTotalRewardsRequest extends Message {
    constructor(data) {
        super();
        /**
         * delegator_address defines the delegator address to query for.
         *
         * @generated from field: string delegator_address = 1;
         */
        this.delegatorAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDelegationTotalRewardsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDelegationTotalRewardsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDelegationTotalRewardsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDelegationTotalRewardsRequest, a, b);
    }
}
QueryDelegationTotalRewardsRequest.runtime = proto3;
QueryDelegationTotalRewardsRequest.typeName = "cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest";
QueryDelegationTotalRewardsRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryDelegationTotalRewardsRequest };
/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse
 */
class QueryDelegationTotalRewardsResponse extends Message {
    constructor(data) {
        super();
        /**
         * rewards defines all the rewards accrued by a delegator.
         *
         * @generated from field: repeated cosmos.distribution.v1beta1.DelegationDelegatorReward rewards = 1;
         */
        this.rewards = [];
        /**
         * total defines the sum of all the rewards.
         *
         * @generated from field: repeated cosmos.base.v1beta1.DecCoin total = 2;
         */
        this.total = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDelegationTotalRewardsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDelegationTotalRewardsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDelegationTotalRewardsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDelegationTotalRewardsResponse, a, b);
    }
}
QueryDelegationTotalRewardsResponse.runtime = proto3;
QueryDelegationTotalRewardsResponse.typeName = "cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse";
QueryDelegationTotalRewardsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "rewards", kind: "message", T: DelegationDelegatorReward, repeated: true },
    { no: 2, name: "total", kind: "message", T: DecCoin, repeated: true },
]);
export { QueryDelegationTotalRewardsResponse };
/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest
 */
class QueryDelegatorValidatorsRequest extends Message {
    constructor(data) {
        super();
        /**
         * delegator_address defines the delegator address to query for.
         *
         * @generated from field: string delegator_address = 1;
         */
        this.delegatorAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDelegatorValidatorsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDelegatorValidatorsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDelegatorValidatorsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDelegatorValidatorsRequest, a, b);
    }
}
QueryDelegatorValidatorsRequest.runtime = proto3;
QueryDelegatorValidatorsRequest.typeName = "cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest";
QueryDelegatorValidatorsRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryDelegatorValidatorsRequest };
/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse
 */
class QueryDelegatorValidatorsResponse extends Message {
    constructor(data) {
        super();
        /**
         * validators defines the validators a delegator is delegating for.
         *
         * @generated from field: repeated string validators = 1;
         */
        this.validators = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDelegatorValidatorsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDelegatorValidatorsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDelegatorValidatorsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDelegatorValidatorsResponse, a, b);
    }
}
QueryDelegatorValidatorsResponse.runtime = proto3;
QueryDelegatorValidatorsResponse.typeName = "cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse";
QueryDelegatorValidatorsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "validators", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
export { QueryDelegatorValidatorsResponse };
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest
 */
class QueryDelegatorWithdrawAddressRequest extends Message {
    constructor(data) {
        super();
        /**
         * delegator_address defines the delegator address to query for.
         *
         * @generated from field: string delegator_address = 1;
         */
        this.delegatorAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDelegatorWithdrawAddressRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDelegatorWithdrawAddressRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDelegatorWithdrawAddressRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDelegatorWithdrawAddressRequest, a, b);
    }
}
QueryDelegatorWithdrawAddressRequest.runtime = proto3;
QueryDelegatorWithdrawAddressRequest.typeName = "cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest";
QueryDelegatorWithdrawAddressRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryDelegatorWithdrawAddressRequest };
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse
 */
class QueryDelegatorWithdrawAddressResponse extends Message {
    constructor(data) {
        super();
        /**
         * withdraw_address defines the delegator address to query for.
         *
         * @generated from field: string withdraw_address = 1;
         */
        this.withdrawAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDelegatorWithdrawAddressResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDelegatorWithdrawAddressResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDelegatorWithdrawAddressResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDelegatorWithdrawAddressResponse, a, b);
    }
}
QueryDelegatorWithdrawAddressResponse.runtime = proto3;
QueryDelegatorWithdrawAddressResponse.typeName = "cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse";
QueryDelegatorWithdrawAddressResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "withdraw_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryDelegatorWithdrawAddressResponse };
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryCommunityPoolRequest
 */
class QueryCommunityPoolRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryCommunityPoolRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryCommunityPoolRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryCommunityPoolRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryCommunityPoolRequest, a, b);
    }
}
QueryCommunityPoolRequest.runtime = proto3;
QueryCommunityPoolRequest.typeName = "cosmos.distribution.v1beta1.QueryCommunityPoolRequest";
QueryCommunityPoolRequest.fields = proto3.util.newFieldList(() => []);
export { QueryCommunityPoolRequest };
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryCommunityPoolResponse
 */
class QueryCommunityPoolResponse extends Message {
    constructor(data) {
        super();
        /**
         * pool defines community pool's coins.
         *
         * @generated from field: repeated cosmos.base.v1beta1.DecCoin pool = 1;
         */
        this.pool = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryCommunityPoolResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryCommunityPoolResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryCommunityPoolResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryCommunityPoolResponse, a, b);
    }
}
QueryCommunityPoolResponse.runtime = proto3;
QueryCommunityPoolResponse.typeName = "cosmos.distribution.v1beta1.QueryCommunityPoolResponse";
QueryCommunityPoolResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pool", kind: "message", T: DecCoin, repeated: true },
]);
export { QueryCommunityPoolResponse };
//# sourceMappingURL=query_pb.js.map