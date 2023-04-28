import { PortalsCredit } from "graphql-sdk/src/lib/__generated__/internal";
import { FC } from "react";
import { ClockHistory } from "react-bootstrap-icons";
import { date } from "utils";

import { TransactionEventComponentProps } from ".";

const ExpiredCashback: FC<TransactionEventComponentProps> = ({
  amount,
  createdAt,
  movement,
  Container,
  source,
}) => {
  const expiredCredit = source as PortalsCredit;
  const creditSource = expiredCredit.source;
  const cashbackEarnedAt = expiredCredit.createdAt;
  let cashbackPercentage = "";

  if (
    expiredCredit.originalAmount &&
    creditSource?.__typename == "ShopifyOrder" &&
    creditSource?.subtotalPrice
  ) {
    cashbackPercentage = (
      (expiredCredit.originalAmount / creditSource.subtotalPrice) *
      100
    ).toFixed(1);
  }

  return (
    <Container
      date={createdAt}
      amount={amount}
      movement={movement}
      color="bg-[#E6E6E6]"
      Icon={ClockHistory}
      Description={() => (
        <span>
          {cashbackPercentage && ` ${cashbackPercentage.replace(/\.0$/, "")}%`}{" "}
          cashback credit earned on{" "}
          {date.toLongDate(new Date(cashbackEarnedAt))}
          <strong> has expired</strong>
        </span>
      )}
    />
  );
};

export default ExpiredCashback;
