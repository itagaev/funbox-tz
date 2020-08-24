import React from "react";

import { Card } from "./card";
import { mockCatFoods } from "./mocks/catfoods";

import "./css/App.css";

const App = () => {
  const [catFoods, setCatFoods] = React.useState(mockCatFoods);

  const onBuyClicked = (id) => {
    const newCatFoods = [...catFoods];
    newCatFoods[id].choosed = !newCatFoods[id].choosed;
    setCatFoods(newCatFoods);
  };

  return (
    <div className="container">
      <h1 className="header">Ты сегодня покормил кота?</h1>
      <div className="cards">
        {catFoods.map((catFood) => (
          <Card
            key={catFood.id}
            catFood={catFood}
            onBuyClicked={onBuyClicked}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
