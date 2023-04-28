import { FC } from "react";
import { CurrencyDollar } from "react-bootstrap-icons";

import { TransactionEventComponentProps } from ".";

const DefaultRemovedBalance: FC<TransactionEventComponentProps> = ({
  shopName,
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
        <strong>{shopName}</strong> adjusted your balance
      </span>
    )}
  />
);

export default DefaultRemovedBalance;
