import React from "react";

import "./card.css";

export const Card = ({ catFood }) => {
  const { taste, content, weight, description } = catFood;

  return (
    <div>
      <div className="card">
        <div className="info">
          <p className="subtitle">Сказачное заморское яство</p>
          <h2 className="title bold">Нямушка</h2>
          <h3 className="ingredient bold">с {taste}</h3>
          <p className="description">
            {content.portionCnt} порций{" "}
            {content.mouseCnt === 1
              ? "мышь"
              : content.mouseCnt >= 2 && content.mouseCnt <= 4
              ? `${content.mouseCnt} мыши`
              : `${content.mouseCnt} мышей`}{" "}
            в подарок {content.addInfo ? content.addInfo : ""}
          </p>
        </div>
        <div className="weight">
          <h2>
            {weight}
            <br />
            кг
          </h2>
        </div>
      </div>
      <div className="footer">{description}</div>
    </div>
  );
};
