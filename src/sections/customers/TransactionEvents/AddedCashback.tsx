import { FC } from "react";
import { Wallet2 } from "react-bootstrap-icons";
import { currency, date } from "utils";

import { TransactionEventComponentProps } from ".";
import DefaultAddedBalance from "./DefaultAddedBalance";

const Cashback: FC<TransactionEventComponentProps> = ({
  shopName,
  amount,
  createdAt,
  expiresAt,
  movement,
  source,
  Container,
}) => {
  if (source?.__typename !== "ShopifyOrder" || !source.subtotalPrice) {
    return (
      <DefaultAddedBalance
        shopName={shopName}
        amount={amount}
        source={source}
        createdAt={createdAt}
        movement={movement}
        Container={Container}
      />
    );
  }

  const orderPrice = source.subtotalPrice;
  const cashbackPercentage = ((amount / orderPrice) * 100).toFixed(1);

  return (
    <Container
      date={createdAt}
      amount={amount}
      movement={movement}
      color="bg-[#ECFDF5] text-success"
      Icon={Wallet2}
      Description={() => (
        <>
          <span>
            <strong>
              Earned {cashbackPercentage.replace(/\.0$/, "")}% cashback
            </strong>{" "}
            on {currency.fullFormat(orderPrice)} purchase
          </span>
          {expiresAt && (
            <div className="text-xs italic">
              This cashback will expire in{" "}
              {date.toLongDate(new Date(expiresAt))}
            </div>
          )}
        </>
      )}
    />
  );
};

export default Cashback;
