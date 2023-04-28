import { RechargeOrder } from "graphql-sdk/src/lib/__generated__/internal";
import { FC } from "react";
import { ArrowRepeat } from "react-bootstrap-icons";

import { TransactionEventComponentProps } from ".";

const UsedInUpcomingCharge: FC<TransactionEventComponentProps> = ({
  amount,
  createdAt,
  movement,
  source,
  Container,
}) => {
  const rechargeOrder = source as RechargeOrder;
  const rechargeSubscriptions = rechargeOrder.rechargeSubscriptions?.nodes;
  const productTitle =
    rechargeSubscriptions?.length && rechargeSubscriptions[0]?.productTitle;

  return (
    <Container
      date={createdAt}
      amount={amount}
      movement={movement}
      color="bg-[#E6E6E6]"
      Icon={ArrowRepeat}
      Description={() => (
        <span>
          <strong>Auto-applied the store credit</strong> in the{" "}
          <strong>{productTitle}</strong>
        </span>
      )}
    />
  );
};

export default UsedInUpcomingCharge;
