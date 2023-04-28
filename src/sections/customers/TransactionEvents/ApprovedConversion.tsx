import { Conversion } from "graphql-sdk/src/lib/__generated__/internal";
import { FC } from "react";
import { ArrowClockwise, CartCheck } from "react-bootstrap-icons";

import { TransactionEventComponentProps } from ".";

const ApprovedConversion: FC<TransactionEventComponentProps> = ({
  amount,
  createdAt,
  movement,
  source,
  Container,
}) => {
  const conversion = source as Conversion;
  const { conversionObject } = conversion;

  if (
    conversionObject.__typename === "RechargeOrder" &&
    conversionObject.orderType === "RECURRING"
  ) {
    return (
      <Container
        date={createdAt}
        amount={amount}
        movement={movement}
        color="bg-[#ECFDF5] text-success"
        Icon={ArrowClockwise}
        Description={() => (
          <span>
            <strong>{conversion.customer.name}</strong> renewed their
            subscription with the brand
          </span>
        )}
      />
    );
  }

  return (
    <Container
      date={createdAt}
      amount={amount}
      movement={movement}
      color="bg-[#ECFDF5] text-success"
      Icon={CartCheck}
      Description={() => (
        <span>
          <strong>{conversion.customer.name}</strong> made a purchase through
          the gift code
        </span>
      )}
    />
  );
};

export default ApprovedConversion;
