import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import ShopList from "./ShopList";
import ProductPage from "./ProductPage";
import Search from "./Search";
import Basket from "./Basket";
import Checkout from "./Checkout";

function App() {
  const [filter, setFilter] = useState();
  const [basket, updateBasket] = useState([]);

  ////ADD ITEM TO BASKET
  const addToBasket = (item) => {
    const index = basket.findIndex((i) => i.details.id == item.id);
    if (index < 0) {
      updateBasket([...basket, { details: item, quantity: 1, id: uuidv4() }]);
    } else {
      const newBasket = [...basket];
      newBasket[index].quantity = newBasket[index].quantity + 1;
      updateBasket([...newBasket]);
    }
  };

  ////adjust quantity (ADJUST BY 1 OR -1)
  const adjustQuantity = (id, num) => {
    console.log(id);
    const index = basket.findIndex((i) => i.id == id);
    if (index >= 0 && basket[index].quantity == 1) {
      const newBasket = basket.filter((i) => i.id !== id);
      updateBasket([...newBasket]);
    } else {
      const newBasket = basket;
      newBasket[index].quantity = newBasket[index].quantity + num;
      updateBasket([...newBasket]);
    }
  };

  ////REMOVE ALL OF ITEM
  const removeAllOfItem = (id) => {
    if (
      window.confirm(
        "Are you sure you want to remove all of this item from your basket?"
      )
    ) {
      const newBasket = basket.filter((i) => i.id !== id);
      updateBasket([...newBasket]);
    }
  };

  //////////MAIN OUTPUT /////////////

  return (
    <div className="App">
      <Basket
        basket={basket}
        adjustQuantity={(id, num) => adjustQuantity(id, num)}
        removeAllOfItem={(id) => removeAllOfItem(id)}
      />
      <Search setFilter={(e) => setFilter(e.target.value)} />
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <ShopList
                {...props}
                searchFilter={filter}
                addToBasket={(item) => addToBasket(item)}
              />
            )}
          />

          <Route
            exact
            path="/viewproduct/:id"
            render={(props) => (
              <ProductPage
                {...props}
                addToBasket={(item) => addToBasket(item)}
              />
            )}
          />
          <Route
            exact
            path="/checkout"
            render={(props) => <Checkout {...props} basket={basket} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
