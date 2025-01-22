import "./card.css";
import { CashMove } from "./CashMove";

export const Card = () => {
  return (
    <div className="cardContainer">
      <div className="cardTitle">Card</div>
      <div className="cardAndBalance">
        <div className="card">
          <div className="cardName">SuperBank</div>
          <div className="cardNumber">
            <div>5589</div>
            <div>****</div>
            <div>****</div>
            <div>3004</div>
          </div>
          <div className="cardInfo">
            <div className="cardHolder">Ivanov Ivan</div>
            <div className="cardExpire">11/27</div>
          </div>
        </div>
        <div className="balanceInfo">
          <CashMove
            amount={1500}
            appointment="Current balance"
            moneyclass="balance"
          />
          <CashMove amount={2000} appointment="Income" moneyclass="income" />
          <CashMove amount={500} appointment="Outcome" moneyclass="outcome" />
        </div>
      </div>
    </div>
  );
};
