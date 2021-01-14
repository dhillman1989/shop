import React, { Fragment, useEffect, useState } from "react";
import { Button } from "@material-ui/core";

import { withRouter } from "react-router-dom";
import "./styles/css/shopList.css";

import emptyCart from "./images/undraw_empty_cart_co35.svg";

import Product from "./Product";

function ShopList({ history, match, addToBasket, stock }) {
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
  }, [match.params.filter, stock]);

  //////////MAIN OUTPUT //////////
  return (
    <Fragment>
      {!match.params.filter ? (
        <h1>Showing All Products</h1>
      ) : (
        <h1>
          Showing {filteredStock.length} results for "{match.params.filter}"
        </h1>
      )}

      <ul className="shopList">
        {filteredStock && filteredStock.length > 0 ? (
          filteredStock.map((p) => (
            <Product details={p} addToBasket={addToBasket} key={p.id} />
          ))
        ) : (
          <Fragment>
            <p className="shopList__noresults">
              <img
                src={emptyCart}
                className="shopList__emptyCartImage"
                alt="empty trolley"
              />
            </p>
            <h4>Oops!</h4>
            <p>
              We didnt find anything that matched your search. Try changing your
              search criteria or look for another product.
            </p>
            <Button
              onClick={() => {
                history.push("/");
              }}>
              Show All Products
            </Button>
          </Fragment>
        )}
      </ul>
    </Fragment>
  );
}

export default withRouter(ShopList);
