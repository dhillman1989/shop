import React, { Fragment, useEffect, useState } from "react";

import "./styles/css/shopList.css";

import emptyCart from "./images/undraw_empty_cart_co35.svg";

import { stock } from "./stock";
import Product from "./Product";

function ShopList({ searchFilter, addToBasket }) {
  const [filteredStock, setFilteredStock] = useState(stock);

  useEffect(() => {
    searchFilter &&
      setFilteredStock(
        stock.filter(
          (i) =>
            i.name.includes(searchFilter) || i.category.includes(searchFilter)
        )
      );
  }, [searchFilter]);

  //////////MAIN OUTPUT //////////
  return (
    <Fragment>
      <h1>
        Showing {filteredStock.length} results for "{searchFilter}"
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
            <a href="./">Show All Products</a>
          </p>
        )}
      </ul>
    </Fragment>
  );
}

export default ShopList;
