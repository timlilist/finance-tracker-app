import './transactionHistory.css';
import shopLogo from '../logo/shopLogo.svg';
import deliveryLogo from '../logo/deliveryLogo.svg';
import restaurantLogo from '../logo/restaurantLogo.svg';
import userLogo from '../logo/userLogo.svg';


export default function TransactionHistory() {
    const amountHeaderClasses = ['tableName', 'endStyle']
    return(
        <div className="transactionHistoryContainer">
            <div className='transactionTitle'> Transaction history</div>
            <table className='transactionTable'>
                <tr className='tableHeader'>
                    <th className='tableName'>Reciver</th>
                    <th className='tableName active'>Type</th>
                    <th className='tableName'>Date</th>
                    <th className={amountHeaderClasses.join(' ')}>Amount</th>
                </tr>
                <tr>
                    <td className='reciverCell'>
                        <img src={shopLogo} alt="" />
                        Tesco Market
                    </td>
                    <td className='ditailsCell active'>Shopping</td>
                    <td className='ditailsCell'>11 Nov 2024</td>
                    <td className='amountCell'>$75.67</td>
                </tr>
                <tr>
                    <td className='reciverCell'>
                        <img src={deliveryLogo} alt="" />
                        ElectroMen Market
                    </td>
                    <td className='ditailsCell active'>Shopping</td>
                    <td className='ditailsCell'>12 Nov 2024</td>
                    <td className='amountCell'>$250.00</td>
                </tr>
                <tr>
                    <td className='reciverCell'>
                        <img src={restaurantLogo} alt="" />
                         Fiorgio Restaurant
                    </td>
                    <td className='ditailsCell active'>Food</td>
                    <td className='ditailsCell'>10 Nov 2024</td>
                    <td className='amountCell'>$19.50</td>
                </tr>
                <tr>
                    <td className='reciverCell'>
                        <img src={userLogo} alt="" />
                        John Mathew Kayne
                    </td>
                    <td className='ditailsCell active'>Sport</td>
                    <td className='ditailsCell'>09 Nov 2024</td>
                    <td className='amountCell'>$350</td>
                </tr>
                <tr>
                    <td className='reciverCell'>
                        <img src={userLogo} alt="" />
                        Anna Marlin
                    </td>
                    <td className='ditailsCell active'>Shopping</td>
                    <td className='ditailsCell'>01 Nov 2024</td>
                    <td className='amountCell'>$450</td>
                </tr>
            </table>

        </div>
    )
}