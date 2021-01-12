import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

import "./styles/css/checkout.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { stock } from "./stock";

const useStyles = makeStyles({
  pay: {
    padding: "1.5rem 2rem",
    fontSize: "1rem",
  },
});

function Checkout({ history, basket }) {
  const classes = useStyles();

  return (
    <div className="checkout">
      <h1>CHECKOUT</h1>
      {basket && basket.length ? (
        <Fragment>
          <p>
            If you would like to checkout now, please double check your order
            and then proceed with payment when you are ready.
          </p>
          <ul className="basket__list">
            {basket.map((item) => (
              <li className="basket__item" key={item.id}>
                <img className="checkout__image" src={item.details.image}></img>
                <p>
                  {" "}
                  {item.quantity} <span>*</span> {item.details.name}
                </p>
                <span className="basket__price">
                  {(item.details.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
            <li>
              TOTAL: £{" "}
              {basket
                .reduce((acc, i) => {
                  return acc + i.details.price.toFixed(2) * i.quantity;
                }, 0)
                .toFixed(2)}
            </li>
          </ul>
          <Button
            onClick={() => history.push("./payments")}
            className={classes.pay}
            variant="contained"
            color="primary"
          >
            CHECKOUT AND PAY NOW
          </Button>
        </Fragment>
      ) : null}
    </div>
  );
}

export default withRouter(Checkout);
