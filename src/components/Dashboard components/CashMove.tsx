import React from "react";
import "./cashMove.css";

type CashMoveProps = {
  amount: number;
  appointment: string;
  moneyclass: string;
};

export const CashMove = ({
  amount,
  appointment,
  moneyclass,
}: CashMoveProps) => {
  return (
    <div className="cashMoveInfo">
      <div className={moneyclass}>${amount}</div>
      <div className="appointmentCash">{appointment}</div>
    </div>
  );
};
