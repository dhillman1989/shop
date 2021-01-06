import "./App.css";
import React, { useState } from "react";

import ShopList from "./ShopList";
import Search from "./Search";
import Basket from "./Basket";

function App() {
  const data = window.location.search;
  const params = new URLSearchParams(data);
  const search = params.get("query");

  const [basket, updateBasket] = useState([]);

  return (
    <div className="App">
      <Basket basket={basket} />
      <Search />
      {search ? <h1>{search}</h1> : <h1>Showing all items</h1>}
      <ShopList
        filter={search}
        addToBasket={(item) => {
          const index = basket.findIndex((i) => i.details.name == item.name);
          if (index < 0) {
            updateBasket([...basket, { details: item, quantity: 1 }]);
          } else {
            const newBasket = [...basket];
            newBasket[index].quantity = newBasket[index].quantity + 1;
            updateBasket([...newBasket]);
          }
        }}
      />
    </div>
  );
}

export default App;
