import { FC } from "react";
import { CashStack } from "react-bootstrap-icons";

import { TransactionEventComponentProps } from ".";

const UsedInCheckout: FC<TransactionEventComponentProps> = ({
  amount,
  createdAt,
  movement,
  Container,
}) => (
  <Container
    date={createdAt}
    amount={amount}
    movement={movement}
    color="bg-gray-200"
    Icon={CashStack}
    Description={() => (
      <span>
        <strong>Redeemed through the reorder</strong> code at checkout
      </span>
    )}
  />
);

export default UsedInCheckout;
