import { useEffect } from "react";

export const HeaderComponent = ({ MoneyIcon }) => {
  return (
    <header className="Header">
      <div className="headerButton" id="moneyCount">
        <div id="moneyIconContainer">
          <MoneyIcon />
        </div>
        <div id="moneyValue">1001</div>
      </div>
    </header>
  );
};
