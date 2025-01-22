import React from "react";
import "./menuItem.css";

type MenuItemProps = {
  itemLogo: React.ReactNode;
  itemName: string;
};

export const MenuItem = ({ itemLogo, itemName }: MenuItemProps) => {
  return (
    <li className="menuItem">
      {itemLogo}
      {itemName}
    </li>
  );
};
