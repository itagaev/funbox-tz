import React from "react";

import "./css/card.css";

export const Card = ({ catFood, onBuyClicked }) => {
  const {
    id,
    taste,
    content,
    weight,
    description,
    choosed,
    available,
  } = catFood;

  const getCardClass = (block) => {
    if (!available) return block + " not-available";
    return choosed ? block + " choosed" : block + " available";
  };

  const renderFooterText = () => {
    if (!available)
      return (
        <p style={{ color: "#FFFF66" }}>Печалька, с {taste} закончился.</p>
      );

    return choosed === false ? (
      <p>
        Чего сидишь? Порадуй котэ,{" "}
        <span className="buy-text" onClick={() => onBuyClicked(id)}>
          купи.
        </span>
      </p>
    ) : (
      description
    );
  };

  return (
    <div>
      <div className={getCardClass("card")} onClick={() => onBuyClicked(id)}>
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
        <div className={getCardClass("weight")}>
          <h2>
            {weight}
            <br />
            кг
          </h2>
        </div>
      </div>
      <div className="footer">{renderFooterText()}</div>
    </div>
  );
};
