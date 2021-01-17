import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import "./styles/css/basket.css";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  payNowButton: {
    padding: "3rem",
    backgroundColor: "rgba(144,200,200)",
    "&:hover": {
      backgroundColor: "rgba(144,200,220)",
    },
  },
});

function Basket({ basket, adjustQuantity, removeAllOfItem, totalCost }) {
  const [showBasket, setShowBasket] = useState(false);
  const classes = useStyles();
  return (
    <div className={`basket ${showBasket && "visible"}`}>
      <div className="basket__main">
        <h2>Basket</h2>
        <ul className="basket__list">
          {basket && basket.length > 0 ? (
            basket.map((item) => {
              return (
                <li className="basket__item" key={item.id}>
                  <span className="qty">{item.quantity}</span>
                  <span className="item-name">{item.details.name}</span>
                  <span className="price">
                    {(item.details.price * item.quantity).toFixed(2)}
                  </span>
                  <div className="basket__controls">
                    <button
                      className="basket__btn"
                      onClick={(id, num) => adjustQuantity(item.id, -1)}>
                      -
                    </button>
                    <button
                      className="basket__btn"
                      onClick={(id, num) => adjustQuantity(item.id, +1)}>
                      +
                    </button>

                    <button
                      className="basket__btn"
                      onClick={(id) => removeAllOfItem(item.id)}>
                      <i className="fas fa-trash basket__btn"></i>
                    </button>
                  </div>
                </li>
              );
            })
          ) : (
              <p>Empty! Click + on an item to add to basket</p>
            )}
        </ul>
        {!basket.length <= 0 && (
          <Link
            to="/checkout"
            variant="contained"
            color="primary"
            className={classes.payNowButton}
            onClick={() => setShowBasket(false)}>
            Pay Now
          </Link>
        )}
      </div>
      <div
        className="basket__tab"
        id="basketTab"
        onClick={() => {
          setShowBasket(!showBasket);
        }}>
        <div className="basket__tab-icon">
          <i className="fas fa-shopping-basket basket-icon"></i>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Basket);
