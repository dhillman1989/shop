import "./styles/css/product.css";

function Product({ details, addToBasket }) {
  return (
    <li className="product">
      <div className="product__image">
        <img src={details.image} />
      </div>
      <h2 className="product__name">{details.name}</h2>
      <h4 className="product__category">{details.category.toUpperCase()}</h4>
      <h3 className="product__price">
        <span className="product__currency">£</span>
        {details.price.toFixed(2)}
      </h3>
      <button
        className="product__addToBasket"
        onClick={() => {
          addToBasket(details);
        }}
      >
        +
      </button>
    </li>
  );
}

export default Product;
