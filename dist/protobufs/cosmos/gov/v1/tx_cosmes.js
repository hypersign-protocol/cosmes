// Since: cosmos-sdk 0.46
// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file cosmos/gov/v1/tx.proto (package cosmos.gov.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { MsgDeposit, MsgDepositResponse, MsgExecLegacyContent, MsgExecLegacyContentResponse, MsgSubmitProposal, MsgSubmitProposalResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgVote, MsgVoteResponse, MsgVoteWeighted, MsgVoteWeightedResponse } from "./tx_pb.js";
const TYPE_NAME = "cosmos.gov.v1.Msg";
/**
 * SubmitProposal defines a method to create new proposal given the messages.
 *
 * @generated from rpc cosmos.gov.v1.Msg.SubmitProposal
 */
export const MsgSubmitProposalService = {
    typeName: TYPE_NAME,
    method: "SubmitProposal",
    Request: MsgSubmitProposal,
    Response: MsgSubmitProposalResponse,
};
/**
 * ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
 * to execute a legacy content-based proposal.
 *
 * @generated from rpc cosmos.gov.v1.Msg.ExecLegacyContent
 */
export const MsgExecLegacyContentService = {
    typeName: TYPE_NAME,
    method: "ExecLegacyContent",
    Request: MsgExecLegacyContent,
    Response: MsgExecLegacyContentResponse,
};
/**
 * Vote defines a method to add a vote on a specific proposal.
 *
 * @generated from rpc cosmos.gov.v1.Msg.Vote
 */
export const MsgVoteService = {
    typeName: TYPE_NAME,
    method: "Vote",
    Request: MsgVote,
    Response: MsgVoteResponse,
};
/**
 * VoteWeighted defines a method to add a weighted vote on a specific proposal.
 *
 * @generated from rpc cosmos.gov.v1.Msg.VoteWeighted
 */
export const MsgVoteWeightedService = {
    typeName: TYPE_NAME,
    method: "VoteWeighted",
    Request: MsgVoteWeighted,
    Response: MsgVoteWeightedResponse,
};
/**
 * Deposit defines a method to add deposit on a specific proposal.
 *
 * @generated from rpc cosmos.gov.v1.Msg.Deposit
 */
export const MsgDepositService = {
    typeName: TYPE_NAME,
    method: "Deposit",
    Request: MsgDeposit,
    Response: MsgDepositResponse,
};
/**
 * UpdateParams defines a governance operation for updating the x/gov module
 * parameters. The authority is defined in the keeper.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.gov.v1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
    typeName: TYPE_NAME,
    method: "UpdateParams",
    Request: MsgUpdateParams,
    Response: MsgUpdateParamsResponse,
};
//# sourceMappingURL=tx_cosmes.js.map