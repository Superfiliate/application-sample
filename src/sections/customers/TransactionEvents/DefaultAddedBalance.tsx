import { FC } from "react";
import { CurrencyDollar } from "react-bootstrap-icons";

import { TransactionEventComponentProps } from ".";

const ShopAddedMoney: FC<TransactionEventComponentProps> = ({
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
    color="bg-[#ECFDF5] text-success"
    Icon={CurrencyDollar}
    Description={() => (
      <span>
        {shopName} <strong>added money</strong> to this wallet
      </span>
    )}
  />
);

export default ShopAddedMoney;
