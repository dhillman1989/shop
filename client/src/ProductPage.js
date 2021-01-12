import "./styles/css/productpage.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import React from "react";
import { withRouter } from "react-router-dom";
import { stock } from "./stock";

const useStyles = makeStyles({
  addToBasket: {
    padding: "0.5rem 1rem",
    marginTop: "1rem",
    marginBottom: "1rem",
    fontSize: "0.8rem",
    backgroundColor: "rgba(144,200,200)",
    borderRadius: "2.5rem",
    width: "100%",
    "&:hover": {
      backgroundColor: "rgba(144,200,220)",
    },
  },
});

function ProductPage({ match, addToBasket }) {
  const classes = useStyles();
  const id = match.params.id;
  const product = stock.find((p) => p.id === id);
  return (
    <div className="productpage">
      <h1>{`${product.name}`}</h1>
      <img src={`${product.image}`} className="productpage__image" />
      <p class="productpage__price">£{`${product.price.toFixed(2)}`}</p>
      <p class="productpage__desc">{`${product.desc}`}</p>
      <Button
        className={classes.addToBasket}
        variant="contained"
        onClick={() => {
          addToBasket(product);
        }}
      >
        Add to Basket
      </Button>
    </div>
  );
}

export default withRouter(ProductPage);
