import { Card } from "./Card";
import "./dashboard.css";
import { Graph } from "./Graph";
import { OutcomeStatistics } from "./OutcomeStatistics";
import { TransactionHistory } from "./TransactionHistory";
import classNames from "classnames";

interface dashboardProps {
  openMenu: boolean,
}

export const Dashboard = ({ openMenu } : dashboardProps) => {
  const infoContainerClass = classNames("dashboardContainer", {
    "--active": openMenu,
  });
  return (
    <div className={infoContainerClass}>
      <div className="infoContainer">
      <div className="pageName">Dashboard</div>
        <div className="partContainer">
          <div className="leftPart">
            <Card />
            <TransactionHistory />
          </div>
          <div className="rightPart">
            <OutcomeStatistics />
            <Graph />
          </div>
        </div>
      </div>
    </div>
  );
};
