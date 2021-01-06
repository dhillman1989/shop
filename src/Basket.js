import React, { useState } from "react";

import "./styles/css/basket.css";

function Basket({ basket }) {
  const [showBasket, setShowBasket] = useState(false);

  return (
    <div className={`basket ${showBasket && "visible"}`}>
      <div className="basket__main">
        <h2>Basket</h2>
        <ul className="basket__list">
          {basket && basket.length > 0 ? (
            basket.map((item) => {
              return <li className="basket__item">{item.details.name}</li>;
            })
          ) : (
            <p>Empty! Click + on an item to add to basket</p>
          )}
        </ul>
      </div>
      <div
        className="basket__tab"
        id="basketTab"
        onClick={() => {
          setShowBasket(!showBasket);
        }}
      >
        <div className="basket__tab-icon">
          <i className="fas fa-shopping-basket basket-icon"></i>
        </div>
      </div>
    </div>
  );
}

export default Basket;
