import "./outcomeStatistics.css";
import { ReactComponent as ShopLogo } from "../../logo/shopLogo.svg";
import { ReactComponent as DeliveryLogo } from "../../logo/deliveryLogo.svg";
import { OutcomeItem } from "./OutcomeItem";
import { ReactComponent as UserLogo } from "../../logo/userLogo.svg";

export const OutcomeStatistics = () => {
  return (
    <div className="outcomeStatisticsContainer">
      <div className="outcomeTitle">Outcome Statistics</div>
      <div className="outcomeList">
        <OutcomeItem
          logo={<ShopLogo className="orangeLogo" />}
          color="orange"
          appointment="Shopping"
          percent={52}
        />
        <OutcomeItem
          logo={<DeliveryLogo className="greenLogo" />}
          color="green"
          appointment="Electronics"
          percent={21}
        />
        <OutcomeItem
          logo={<UserLogo className="blueLogo" />}
          color="blue"
          appointment="Remittance"
          percent={74}
        />
      </div>
    </div>
  );
};
