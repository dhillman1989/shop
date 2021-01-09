import React, { Fragment, useEffect, useState } from "react";
import { Button } from "@material-ui/core";

import { withRouter } from "react-router-dom";
import "./styles/css/shopList.css";

import emptyCart from "./images/undraw_empty_cart_co35.svg";

import { stock } from "./stock";
import Product from "./Product";

function ShopList({ history, match, addToBasket }) {
  const [filteredStock, setFilteredStock] = useState(stock);

  useEffect(() => {
    !match.params.filter
      ? setFilteredStock(stock)
      : setFilteredStock(
          stock.filter(
            (i) =>
              i.name.includes(match.params.filter) ||
              i.category.includes(match.params.filter)
          )
        );
  }, [match]);

  //////////MAIN OUTPUT //////////
  return (
    <Fragment>
      <h1>
        Showing {filteredStock.length} results for "{match.params.filter}"
      </h1>
      <ul className="shopList">
        {filteredStock.length > 0 ? (
          filteredStock.map((p) => (
            <Product details={p} addToBasket={addToBasket} />
          ))
        ) : (
          <p className="shopList__noresults">
            <img
              src={emptyCart}
              className="shopList__emptyCartImage"
              alt="empty trolley"
            />
            <p>
              <h4>Oops!</h4> We didnt find anything that matched your search.
              Try changing your search criteria or look for another product.
            </p>
            <Button
              onClick={() => {
                history.push("/");
              }}
            >
              Show All Products
            </Button>
          </p>
        )}
      </ul>
    </Fragment>
  );
}

export default withRouter(ShopList);
