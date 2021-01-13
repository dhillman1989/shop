import React from "react";

import "./styles/css/payments.css";

function Payments({ history, basket, updateBasket }) {
  return (
    <div className="payments">
      <h1 className="payments__header">Please provide your payment details</h1>
      <form
        className="payments__form"
        onSubmit={(e) => {
          e.preventDefault();
          window.alert("your order has been processed");
          localStorage.setItem("basket", JSON.stringify([]));
          history.push("/");
        }}>
        <input
          className="payments__input"
          name="name"
          id="name"
          placeholder="Name (as shown on card)"
        />
        <input
          className="payments__input"
          name="cardnumber"
          id="cardnumber"
          placeholder="Card Number (eg. 1234 0000 1010 2323)"
        />
        <input
          className="payments__input"
          name="expiry"
          id="expiry"
          placeholder="Expiry Date (MM/YY)"
        />
        <input
          type="password"
          className="payments__input"
          name="securtiynum"
          id="securitynum"
          placeholder="Security Number (usually the last 3 digits on the signature strip)"
        />
        <button className="payments__input">Submit Payment</button>
      </form>
    </div>
  );
}

export default Payments;
