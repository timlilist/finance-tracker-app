import "./menu.css";
import MenuItem from "./MenuItem";
import dashboardLogo from "../logo/dashboardLogo.svg"
import transactionsLogo from "../logo/transactionsLogo.svg"
import newTransactionLogo from "../logo/newTransactionLogo.svg"
import categoriesLogo from "../logo/categoriesLogo.svg"
import avatar from "../logo/avatar.jpg"
import logOutLogo from "../logo/logoutLogo.svg"

export default function Menu( {open, setOpen} ) {
    return(
        <div className={open ? 'menu active' : 'menu'}>
            <div className="userInfo">
                <img className="userPhoto" src={avatar} alt="avatar" />
                <div className="userName">Ivanov Ivan Ivanovich</div>
            </div>
            <ul className="menuList">
                <MenuItem itemLogo={dashboardLogo} itemName='Dashboard'/>
                <MenuItem itemLogo={transactionsLogo} itemName='Transactions'/>
                <MenuItem itemLogo={newTransactionLogo} itemName='New transaction'/>
                <MenuItem itemLogo={categoriesLogo} itemName='Categories'/>
            </ul>
            <button className="logBtn">
                <img src={logOutLogo} alt="" />
                Log Out
            </button>
        </div>
    )
}