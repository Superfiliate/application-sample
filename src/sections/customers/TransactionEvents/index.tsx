import { Movement, TransactionSource } from "graphql-sdk";

import { TransactionEventContainerProps } from "../TransactionEventContainer";
import AddedCashback from "./AddedCashback";
import ApprovedConversion from "./ApprovedConversion";
import DefaultAddedBalance from "./DefaultAddedBalance";
import DefaultRemovedBalance from "./DefaultRemovedBalance";
import ExpiredCashback from "./ExpiredCashback";
import PayoutWithdrawn from "./PayoutWithdrawn";
import UsedInCheckout from "./UsedInCheckout";
import UsedInUpcomingCharge from "./UsedInUpcomingCharge";

export interface TransactionEventComponentProps {
  shopName: string;
  amount: number;
  createdAt: string;
  expiresAt?: string;
  movement: Movement;
  source?: TransactionSource | null;
  Container: React.FC<TransactionEventContainerProps>;
}

export {
  AddedCashback,
  ApprovedConversion,
  DefaultAddedBalance,
  DefaultRemovedBalance,
  ExpiredCashback,
  PayoutWithdrawn,
  UsedInCheckout,
  UsedInUpcomingCharge,
};
