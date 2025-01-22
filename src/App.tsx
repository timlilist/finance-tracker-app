// import { Dashboard } from "./components/Dashboard components/Dashboard";
import "./App.css";
import { Categories } from "./components/Categories components/Categories";
import { useState } from "react";
import { Menu } from "./components/Menu components/Menu";
import { ReactComponent as MenuLogo } from "./logo/menuLogo.svg";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="mainWindow">
      <Menu open={openMenu} />
      <div className="menubtn">
        <MenuLogo onClick={() => setOpenMenu(!openMenu)} />
      </div>
      {/* <Dashboard openMenu={openMenu}/> */}
      <Categories openMenu={openMenu} />
    </div>
  );
}
// }

export default App;
