import "./transactionHistory.css";
import shopLogo from "../logo/shopLogo.svg";
import deliveryLogo from "../logo/deliveryLogo.svg";
import restaurantLogo from "../logo/restaurantLogo.svg";
import userLogo from "../logo/userLogo.svg";

export const TransactionHistory = () => {
  return (
    <div className="transactionHistoryContainer">
      <div className="transactionTitle"> Transaction history</div>
      <table className="transactionTable">
        <thead>
          <tr className="tableHeader">
            <th className="tableName">Reciever</th>
            <th className="tableName --active">Type</th>
            <th className="tableName">Date</th>
            <th className="tableName endStyle">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="recieverCell">
              <img src={shopLogo} alt="" />
              Tesco Market
            </td>
            <td className="detailsCell --active">Shopping</td>
            <td className="detailsCell">11 Nov 2024</td>
            <td className="amountCell">$75.67</td>
          </tr>
          <tr>
            <td className="recieverCell">
              <img src={deliveryLogo} alt="" />
              ElectroMen Market
            </td>
            <td className="detailsCell --active">Shopping</td>
            <td className="detailsCell">12 Nov 2024</td>
            <td className="amountCell">$250.00</td>
          </tr>
          <tr>
            <td className="recieverCell">
              <img src={restaurantLogo} alt="" />
              Fiorgio Restaurant
            </td>
            <td className="detailsCell --active">Food</td>
            <td className="detailsCell">10 Nov 2024</td>
            <td className="amountCell">$19.50</td>
          </tr>
          <tr>
            <td className="recieverCell">
              <img src={userLogo} alt="" />
              John Mathew Kayne
            </td>
            <td className="detailsCell --active">Sport</td>
            <td className="detailsCell">09 Nov 2024</td>
            <td className="amountCell">$350</td>
          </tr>
          <tr>
            <td className="recieverCell">
              <img src={userLogo} alt="" />
              Anna Marlin
            </td>
            <td className="detailsCell --active">Shopping</td>
            <td className="detailsCell">01 Nov 2024</td>
            <td className="amountCell">$450</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
