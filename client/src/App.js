import "./styles/css/App.css";
import React, { Fragment, useState } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import ShopList from "./ShopList";
import ProductPage from "./ProductPage";
import Search from "./Search";
import Basket from "./Basket";
import Checkout from "./Checkout";
import Payments from "./Payments";

function App() {
  const [filter, setFilter] = useState();
  const [basket, updateBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );

  ////ADD ITEM TO BASKET
  const addToBasket = async (item) => {
    const index = basket.findIndex((i) => i.details.id === item.id);
    if (index == -1) {
      const newBasket = [
        ...basket,
        { details: item, quantity: 1, id: uuidv4() },
      ];
      localStorage.setItem("basket", JSON.stringify([...newBasket]));
      updateBasket([...newBasket]);
    } else {
      console.log(index);
      const newBasket = [...basket];
      newBasket[index].quantity = newBasket[index].quantity + 1;
      localStorage.setItem("basket", JSON.stringify([...newBasket]));
      updateBasket([...newBasket]);
    }
  };

  ////adjust quantity (ADJUST BY 1 OR -1)
  const adjustQuantity = (id, num) => {
    console.log(id);
    const index = basket.findIndex((i) => i.id == id);
    if (index >= 0 && basket[index].quantity == 1 && num == -1) {
      const newBasket = basket.filter((i) => i.id !== id);
      localStorage.setItem("basket", JSON.stringify([...newBasket]));
      updateBasket([...newBasket]);
    } else {
      const newBasket = basket;
      newBasket[index].quantity = newBasket[index].quantity + num;
      localStorage.setItem("basket", JSON.stringify([...newBasket]));
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
      localStorage.setItem("basket", JSON.stringify([...newBasket]));
      updateBasket([...newBasket]);
    }
  };

  //////////MAIN OUTPUT /////////////

  return (
    <div className="App">
      <BrowserRouter>
        <Basket
          basket={basket}
          adjustQuantity={(id, num) => adjustQuantity(id, num)}
          removeAllOfItem={(id) => removeAllOfItem(id)}
        />
        <Search setFilter={(value) => setFilter(value)} />
        <Fragment>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <ShopList
                  {...props}
                  addToBasket={(item) => addToBasket(item)}
                />
              )}
            />
            <Route
              path="/search/:filter"
              render={(props) => (
                <ShopList
                  {...props}
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
            <Route
              exact
              path="/payments"
              render={(props) => <Payments {...props} />}
            />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;