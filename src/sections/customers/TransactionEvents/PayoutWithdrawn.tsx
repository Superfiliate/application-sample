import { FC } from "react";
import { CurrencyDollar } from "react-bootstrap-icons";

import { TransactionEventComponentProps } from ".";

const PayoutWithdrawn: FC<TransactionEventComponentProps> = ({
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
    Icon={CurrencyDollar}
    Description={() => (
      <span>
        You have <strong>withdrawn money</strong> from your wallet balance
      </span>
    )}
  />
);

export default PayoutWithdrawn;
