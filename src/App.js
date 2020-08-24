import React from "react";

import { Card } from "./card";
import { catFoods } from "./mocks/catfoods";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="header">Ты сегодня покормил кота?</h1>
      <div className="cards">
        {catFoods.map((catFood) => (
          <Card key={catFood.id} catFood={catFood} />
        ))}
      </div>
    </div>
  );
};

export default App;
