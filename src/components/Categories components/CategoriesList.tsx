import "./categoriesList.css";
import { ListItem } from "./ListItem";
import { useSelector } from "react-redux";
import { DataProvider } from "./DataProvider";

import { ReactComponent as ShopLogo } from "../../logo/shopLogo.svg";
import { ReactComponent as SalaryLogo } from "../../logo/salaryLogo.svg";
import { ReactComponent as СashbackLogo } from "../../logo/cashBackLogo.svg";
import { ReactComponent as SocialPaymentsLogo } from "../../logo/SocialPaymentsLogo.svg";
import { ReactComponent as UserLogo } from "../../logo/userLogo.svg";
import { ReactComponent as HousingLogo } from "../../logo/housingLogo.svg";
import { ReactComponent as TransportLogo } from "../../logo/transportLogo.svg";
import { ReactComponent as HealthLogo } from "../../logo/healthLogo.svg";
import { ReactComponent as EducationLogo } from "../../logo/educationLogo.svg";
import { ReactComponent as RelaxationLogo } from "../../logo/relaxationLogo.svg";
import { ReactComponent as ClothesLogo } from "../../logo/clothesLogo.svg";
import { ReactComponent as CustomLogo } from "../../logo/customLogo.svg";

interface listItem {
  type: string;
  title: string;
  logo: React.ReactNode;
  id: string;
  remove: boolean;
  checked: boolean;
  isEditMode: boolean;
}

interface CategoryElements {
  [key: string]: React.ReactNode;
  Salary: React.ReactNode;
  Socialpayments: React.ReactNode;
  Сashback: React.ReactNode;
  Transfer: React.ReactNode;
  Housing: React.ReactNode;
  Food: React.ReactNode;
  Transport: React.ReactNode;
  Health: React.ReactNode;
  Education: React.ReactNode;
  Entertainment: React.ReactNode;
  Clothes: React.ReactNode;
}

const componentMap: CategoryElements = {
  Salary: <SalaryLogo className="logo" />,
  Socialpayments: <SocialPaymentsLogo className="logo" />,
  Сashback: <СashbackLogo className="logo" />,
  Transfer: <UserLogo className="logo" />,
  Housing: <HousingLogo className="logo" />,
  Food: <ShopLogo className="logo" />,
  Transport: <TransportLogo className="logo" />,
  Health: <HealthLogo className="logo" />,
  Education: <EducationLogo className="logo" />,
  Entertainment: <RelaxationLogo className="logo" />,
  Clothes: <ClothesLogo className="logo" />,
};

const sortlist = (a: any, b: any) => {
  if (!a.remove && b.remove)
    return -1;

  if (a.remove && !b.remove)
    return 1;

  if (!a.remove && !b.remove)
    return a.title.localeCompare(b.title);

  return a.title.localeCompare(b.title);
}

export const CategoriesList = () => {
  const listItems = useSelector((state: any) => state.categories.items);
  let sortedListItems: any = [...listItems];
  sortedListItems.sort(sortlist);

  return (
    <div className="listContainer">
      <DataProvider />
      <div className="listPart border">
        <div className="listName">Income</div>
        <ul className="list">
          {sortedListItems.map((item: listItem) => {
            if (item.type === "income") {
              let SvgComponent = componentMap[item.title.replace(/\s+/g, "")];
              if (!SvgComponent) {
                SvgComponent = <CustomLogo className="logo" />;
              }
              return (
                <ListItem
                  remove={item.remove}
                  isEditMode={item.isEditMode}
                  picture={SvgComponent}
                  name={item.title}
                  key={item.id}
                  id={item.id}
                  checked={item.checked}
                />
              );
            }
          })}
        </ul>
      </div>
      <div className="listPart">
        <div className="listName">Outcome</div>
        <ul className="list">
          {sortedListItems.map((item: listItem) => {
            if (item.type === "outcome") {
              let SvgComponent = componentMap[item.title.replace(/\s+/g, "")];
              if (!SvgComponent) {
                SvgComponent = <CustomLogo className="logo" />;
              }
              return (
                <ListItem
                  remove={item.remove}
                  isEditMode={item.isEditMode}
                  picture={SvgComponent}
                  name={item.title}
                  key={item.id}
                  id={item.id}
                  checked={item.checked}
                />
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};
