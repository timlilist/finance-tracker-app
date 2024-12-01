import React from "react";
import "./outcomeItem.css";

interface OutcomeItemProps {
  logo: React.ReactNode;
  color: string;
  appointment: string;
  percent: number;
}

export const OutcomeItem = ({
  logo,
  color,
  appointment,
  percent,
}: OutcomeItemProps) => {
  return (
    <div className="outcomeItem">
      {logo}
      <div className="outStatistic">
        <div className={color}></div>
        <div className="statisticName">{appointment}</div>
      </div>
      <div>{percent}%</div>
    </div>
  );
};
