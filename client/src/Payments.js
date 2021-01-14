import axios from "axios";
import React, { useEffect, useState } from "react";
import Basket from "./Basket";

import "./styles/css/payments.css";

function Payments({ history, basket, updateBasket }) {
  const [inputForm, setInputForm] = useState({
    name: "",
    cardnumber: "",
    expiry: "",
    securitynum: "",
    address: "",
  });
  const { name, cardnumber, expiry, securitynum, address } = inputForm;

  //control inputs
  const setInputs = (e) => {
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  let totalCost = basket.reduce((acc, curr) => {
    let itemCost = curr.details.price * curr.quantity;
    return acc + itemCost;
  }, 0);

  return (
    <div className="payments">
      <h1 className="payments__header">Please provide your payment details</h1>
      <form
        className="payments__form"
        onSubmit={async (e) => {
          e.preventDefault();
          let newOrder = { basket, address, totalCost };
          await axios.post("/orders", { ...newOrder });
          const emptyBasket = [];
          localStorage.setItem("basket", JSON.stringify(emptyBasket));
          history.push("/");
        }}>
        <input
          className="payments__input"
          name="name"
          id="name"
          onChange={(e) => setInputs(e)}
          value={inputForm.name}
          placeholder="Name (as shown on card)"
        />
        <input
          className="payments__input"
          name="cardnumber"
          id="cardnumber"
          onChange={(e) => setInputs(e)}
          value={inputForm.cardnumber}
          placeholder="Card Number (eg. 1234 0000 1010 2323)"
        />
        <input
          className="payments__input"
          name="expiry"
          id="expiry"
          onChange={(e) => setInputs(e)}
          value={inputForm.expiry}
          placeholder="Expiry Date (MM/YY)"
        />
        <input
          type="password"
          className="payments__input"
          name="securitynum"
          id="securitynum"
          onChange={(e) => setInputs(e)}
          value={inputForm.securitynum}
          placeholder="Security Number (usually the last 3 digits on the signature strip)"
        />
        <h2>Delivery Address</h2>
        <input
          className="payments__input"
          name="address"
          id="address"
          onChange={(e) => setInputs(e)}
          value={inputForm.address}
          placeholder="Delivery Address"
        />
        <button className="payments__input">Submit Payment</button>
      </form>
    </div>
  );
}

export default Payments;
