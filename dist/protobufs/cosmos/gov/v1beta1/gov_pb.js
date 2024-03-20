// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/gov/v1beta1/gov.proto (package cosmos.gov.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Any, Duration, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";
/**
 * VoteOption enumerates the valid vote options for a given governance proposal.
 *
 * @generated from enum cosmos.gov.v1beta1.VoteOption
 */
export var VoteOption;
(function (VoteOption) {
    /**
     * VOTE_OPTION_UNSPECIFIED defines a no-op vote option.
     *
     * @generated from enum value: VOTE_OPTION_UNSPECIFIED = 0;
     */
    VoteOption[VoteOption["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * VOTE_OPTION_YES defines a yes vote option.
     *
     * @generated from enum value: VOTE_OPTION_YES = 1;
     */
    VoteOption[VoteOption["YES"] = 1] = "YES";
    /**
     * VOTE_OPTION_ABSTAIN defines an abstain vote option.
     *
     * @generated from enum value: VOTE_OPTION_ABSTAIN = 2;
     */
    VoteOption[VoteOption["ABSTAIN"] = 2] = "ABSTAIN";
    /**
     * VOTE_OPTION_NO defines a no vote option.
     *
     * @generated from enum value: VOTE_OPTION_NO = 3;
     */
    VoteOption[VoteOption["NO"] = 3] = "NO";
    /**
     * VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.
     *
     * @generated from enum value: VOTE_OPTION_NO_WITH_VETO = 4;
     */
    VoteOption[VoteOption["NO_WITH_VETO"] = 4] = "NO_WITH_VETO";
})(VoteOption || (VoteOption = {}));
// Retrieve enum metadata with: proto3.getEnumType(VoteOption)
proto3.util.setEnumType(VoteOption, "cosmos.gov.v1beta1.VoteOption", [
    { no: 0, name: "VOTE_OPTION_UNSPECIFIED" },
    { no: 1, name: "VOTE_OPTION_YES" },
    { no: 2, name: "VOTE_OPTION_ABSTAIN" },
    { no: 3, name: "VOTE_OPTION_NO" },
    { no: 4, name: "VOTE_OPTION_NO_WITH_VETO" },
]);
/**
 * ProposalStatus enumerates the valid statuses of a proposal.
 *
 * @generated from enum cosmos.gov.v1beta1.ProposalStatus
 */
export var ProposalStatus;
(function (ProposalStatus) {
    /**
     * PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status.
     *
     * @generated from enum value: PROPOSAL_STATUS_UNSPECIFIED = 0;
     */
    ProposalStatus[ProposalStatus["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
     * period.
     *
     * @generated from enum value: PROPOSAL_STATUS_DEPOSIT_PERIOD = 1;
     */
    ProposalStatus[ProposalStatus["DEPOSIT_PERIOD"] = 1] = "DEPOSIT_PERIOD";
    /**
     * PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
     * period.
     *
     * @generated from enum value: PROPOSAL_STATUS_VOTING_PERIOD = 2;
     */
    ProposalStatus[ProposalStatus["VOTING_PERIOD"] = 2] = "VOTING_PERIOD";
    /**
     * PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
     * passed.
     *
     * @generated from enum value: PROPOSAL_STATUS_PASSED = 3;
     */
    ProposalStatus[ProposalStatus["PASSED"] = 3] = "PASSED";
    /**
     * PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
     * been rejected.
     *
     * @generated from enum value: PROPOSAL_STATUS_REJECTED = 4;
     */
    ProposalStatus[ProposalStatus["REJECTED"] = 4] = "REJECTED";
    /**
     * PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
     * failed.
     *
     * @generated from enum value: PROPOSAL_STATUS_FAILED = 5;
     */
    ProposalStatus[ProposalStatus["FAILED"] = 5] = "FAILED";
})(ProposalStatus || (ProposalStatus = {}));
// Retrieve enum metadata with: proto3.getEnumType(ProposalStatus)
proto3.util.setEnumType(ProposalStatus, "cosmos.gov.v1beta1.ProposalStatus", [
    { no: 0, name: "PROPOSAL_STATUS_UNSPECIFIED" },
    { no: 1, name: "PROPOSAL_STATUS_DEPOSIT_PERIOD" },
    { no: 2, name: "PROPOSAL_STATUS_VOTING_PERIOD" },
    { no: 3, name: "PROPOSAL_STATUS_PASSED" },
    { no: 4, name: "PROPOSAL_STATUS_REJECTED" },
    { no: 5, name: "PROPOSAL_STATUS_FAILED" },
]);
/**
 * WeightedVoteOption defines a unit of vote for vote split.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.gov.v1beta1.WeightedVoteOption
 */
export class WeightedVoteOption extends Message {
    constructor(data) {
        super();
        /**
         * option defines the valid vote options, it must not contain duplicate vote options.
         *
         * @generated from field: cosmos.gov.v1beta1.VoteOption option = 1;
         */
        this.option = VoteOption.UNSPECIFIED;
        /**
         * weight is the vote weight associated with the vote option.
         *
         * @generated from field: string weight = 2;
         */
        this.weight = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new WeightedVoteOption().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new WeightedVoteOption().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new WeightedVoteOption().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(WeightedVoteOption, a, b);
    }
}
WeightedVoteOption.runtime = proto3;
WeightedVoteOption.typeName = "cosmos.gov.v1beta1.WeightedVoteOption";
WeightedVoteOption.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "option", kind: "enum", T: proto3.getEnumType(VoteOption) },
    { no: 2, name: "weight", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * TextProposal defines a standard text proposal whose changes need to be
 * manually updated in case of approval.
 *
 * @generated from message cosmos.gov.v1beta1.TextProposal
 */
export class TextProposal extends Message {
    constructor(data) {
        super();
        /**
         * title of the proposal.
         *
         * @generated from field: string title = 1;
         */
        this.title = "";
        /**
         * description associated with the proposal.
         *
         * @generated from field: string description = 2;
         */
        this.description = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TextProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TextProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TextProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TextProposal, a, b);
    }
}
TextProposal.runtime = proto3;
TextProposal.typeName = "cosmos.gov.v1beta1.TextProposal";
TextProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 *
 * @generated from message cosmos.gov.v1beta1.Deposit
 */
export class Deposit extends Message {
    constructor(data) {
        super();
        /**
         * proposal_id defines the unique id of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protoInt64.zero;
        /**
         * depositor defines the deposit addresses from the proposals.
         *
         * @generated from field: string depositor = 2;
         */
        this.depositor = "";
        /**
         * amount to be deposited by depositor.
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 3;
         */
        this.amount = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Deposit().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Deposit().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Deposit().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Deposit, a, b);
    }
}
Deposit.runtime = proto3;
Deposit.typeName = "cosmos.gov.v1beta1.Deposit";
Deposit.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "depositor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin, repeated: true },
]);
/**
 * Proposal defines the core field members of a governance proposal.
 *
 * @generated from message cosmos.gov.v1beta1.Proposal
 */
export class Proposal extends Message {
    constructor(data) {
        super();
        /**
         * proposal_id defines the unique id of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protoInt64.zero;
        /**
         * status defines the proposal status.
         *
         * @generated from field: cosmos.gov.v1beta1.ProposalStatus status = 3;
         */
        this.status = ProposalStatus.UNSPECIFIED;
        /**
         * total_deposit is the total deposit on the proposal.
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin total_deposit = 7;
         */
        this.totalDeposit = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Proposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Proposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Proposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Proposal, a, b);
    }
}
Proposal.runtime = proto3;
Proposal.typeName = "cosmos.gov.v1beta1.Proposal";
Proposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "content", kind: "message", T: Any },
    { no: 3, name: "status", kind: "enum", T: proto3.getEnumType(ProposalStatus) },
    { no: 4, name: "final_tally_result", kind: "message", T: TallyResult },
    { no: 5, name: "submit_time", kind: "message", T: Timestamp },
    { no: 6, name: "deposit_end_time", kind: "message", T: Timestamp },
    { no: 7, name: "total_deposit", kind: "message", T: Coin, repeated: true },
    { no: 8, name: "voting_start_time", kind: "message", T: Timestamp },
    { no: 9, name: "voting_end_time", kind: "message", T: Timestamp },
]);
/**
 * TallyResult defines a standard tally for a governance proposal.
 *
 * @generated from message cosmos.gov.v1beta1.TallyResult
 */
export class TallyResult extends Message {
    constructor(data) {
        super();
        /**
         * yes is the number of yes votes on a proposal.
         *
         * @generated from field: string yes = 1;
         */
        this.yes = "";
        /**
         * abstain is the number of abstain votes on a proposal.
         *
         * @generated from field: string abstain = 2;
         */
        this.abstain = "";
        /**
         * no is the number of no votes on a proposal.
         *
         * @generated from field: string no = 3;
         */
        this.no = "";
        /**
         * no_with_veto is the number of no with veto votes on a proposal.
         *
         * @generated from field: string no_with_veto = 4;
         */
        this.noWithVeto = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TallyResult().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TallyResult().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TallyResult().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TallyResult, a, b);
    }
}
TallyResult.runtime = proto3;
TallyResult.typeName = "cosmos.gov.v1beta1.TallyResult";
TallyResult.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "yes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "abstain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "no", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "no_with_veto", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 *
 * @generated from message cosmos.gov.v1beta1.Vote
 */
export class Vote extends Message {
    constructor(data) {
        super();
        /**
         * proposal_id defines the unique id of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protoInt64.zero;
        /**
         * voter is the voter address of the proposal.
         *
         * @generated from field: string voter = 2;
         */
        this.voter = "";
        /**
         * Deprecated: Prefer to use `options` instead. This field is set in queries
         * if and only if `len(options) == 1` and that option has weight 1. In all
         * other cases, this field will default to VOTE_OPTION_UNSPECIFIED.
         *
         * @generated from field: cosmos.gov.v1beta1.VoteOption option = 3 [deprecated = true];
         * @deprecated
         */
        this.option = VoteOption.UNSPECIFIED;
        /**
         * options is the weighted vote options.
         *
         * Since: cosmos-sdk 0.43
         *
         * @generated from field: repeated cosmos.gov.v1beta1.WeightedVoteOption options = 4;
         */
        this.options = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Vote().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Vote().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Vote().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Vote, a, b);
    }
}
Vote.runtime = proto3;
Vote.typeName = "cosmos.gov.v1beta1.Vote";
Vote.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "option", kind: "enum", T: proto3.getEnumType(VoteOption) },
    { no: 4, name: "options", kind: "message", T: WeightedVoteOption, repeated: true },
]);
/**
 * DepositParams defines the params for deposits on governance proposals.
 *
 * @generated from message cosmos.gov.v1beta1.DepositParams
 */
export class DepositParams extends Message {
    constructor(data) {
        super();
        /**
         * Minimum deposit for a proposal to enter voting period.
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin min_deposit = 1;
         */
        this.minDeposit = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DepositParams().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DepositParams().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DepositParams().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(DepositParams, a, b);
    }
}
DepositParams.runtime = proto3;
DepositParams.typeName = "cosmos.gov.v1beta1.DepositParams";
DepositParams.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "min_deposit", kind: "message", T: Coin, repeated: true },
    { no: 2, name: "max_deposit_period", kind: "message", T: Duration },
]);
/**
 * VotingParams defines the params for voting on governance proposals.
 *
 * @generated from message cosmos.gov.v1beta1.VotingParams
 */
export class VotingParams extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new VotingParams().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new VotingParams().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new VotingParams().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(VotingParams, a, b);
    }
}
VotingParams.runtime = proto3;
VotingParams.typeName = "cosmos.gov.v1beta1.VotingParams";
VotingParams.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "voting_period", kind: "message", T: Duration },
]);
/**
 * TallyParams defines the params for tallying votes on governance proposals.
 *
 * @generated from message cosmos.gov.v1beta1.TallyParams
 */
export class TallyParams extends Message {
    constructor(data) {
        super();
        /**
         * Minimum percentage of total stake needed to vote for a result to be
         * considered valid.
         *
         * @generated from field: bytes quorum = 1;
         */
        this.quorum = new Uint8Array(0);
        /**
         * Minimum proportion of Yes votes for proposal to pass. Default value: 0.5.
         *
         * @generated from field: bytes threshold = 2;
         */
        this.threshold = new Uint8Array(0);
        /**
         * Minimum value of Veto votes to Total votes ratio for proposal to be
         * vetoed. Default value: 1/3.
         *
         * @generated from field: bytes veto_threshold = 3;
         */
        this.vetoThreshold = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TallyParams().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TallyParams().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TallyParams().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TallyParams, a, b);
    }
}
TallyParams.runtime = proto3;
TallyParams.typeName = "cosmos.gov.v1beta1.TallyParams";
TallyParams.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "quorum", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "threshold", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "veto_threshold", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
//# sourceMappingURL=gov_pb.js.map