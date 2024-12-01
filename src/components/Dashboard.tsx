import { Card } from "./Card";
import "./dashboard.css";
import { Graph } from "./Graph";
import { Menu } from "./Menu";
import { OutcomeStatistics } from "./OutcomeStatistics";
import { TransactionHistory } from "./TransactionHistory";
import { ReactComponent as MenuLogo } from "../logo/menuLogo.svg";
import { useState } from "react";
import classNames from "classnames";

export const Dashboard = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const infoContainerClass = classNames("infoContainer", {
    "--active": openMenu,
  });
  return (
    <div className="dashboardContainer">
      <Menu open={openMenu} />
      <div className="menubtn">
        <MenuLogo onClick={() => setOpenMenu(!openMenu)} />
      </div>
      <div className={infoContainerClass}>
        <div className="menuDashboard">
          <div className="pageName">Dashboard</div>
        </div>

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
