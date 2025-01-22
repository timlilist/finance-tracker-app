import React from "react";
import "./menu.css";
import { MenuItem } from "./MenuItem";
import { ReactComponent as DashboardLogo } from "../../logo/dashboardLogo.svg";
import { ReactComponent as TransactionsLogo } from "../../logo/transactionsLogo.svg";
import { ReactComponent as NewTransactionLogo } from "../../logo/newTransactionLogo.svg";
import { ReactComponent as CategoriesLogo } from "../../logo/categoriesLogo.svg";
import avatar from "../../logo/avatar.jpg";
import { ReactComponent as LogOutLogo } from "../../logo/logoutLogo.svg";
import classNames from "classnames";

type MenuProps = {
  open: boolean;
};
export const Menu = ({ open }: MenuProps) => {
  const menuClass = classNames("menu", {
    "--active": open,
  });
  return (
    <div className={menuClass}>
      <div className="userInfo">
        <img className="userPhoto" src={avatar} alt="avatar" />
        <div className="userName">Ivanov Ivan Ivanovich</div>
      </div>
      <ul className="menuList">
        <MenuItem itemLogo={<DashboardLogo />} itemName="Dashboard" />
        <MenuItem itemLogo={<TransactionsLogo />} itemName="Transactions" />
        <MenuItem
          itemLogo={<NewTransactionLogo />}
          itemName="New transaction"
        />
        <MenuItem itemLogo={<CategoriesLogo />} itemName="Categories" />
      </ul>
      <button className="logBtn">
        <LogOutLogo />
        Log Out
      </button>
    </div>
  );
};
