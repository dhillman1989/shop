import "./styles/css/product.css";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

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
  viewProduct: {
    padding: "0.5rem 1rem",
    display: "block",
    width: "100%",
    fontSize: "0.8rem",
    color: "#000",
    fontWeight: 500,
    backgroundColor: "rgba(144,200,200)",
    borderRadius: "2.5rem",

    "&:hover": {
      backgroundColor: "rgba(144,200,220)",
      textDecoration: "none",
    },
  },
});

function Product({ details, addToBasket }) {
  const classes = useStyles();

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
      <Button
        className={classes.addToBasket}
        variant="contained"
        onClick={() => {
          addToBasket(details);
        }}>
        Add to Basket
      </Button>
      <Link to={`./viewproduct/${details._id}`} className={classes.viewProduct}>
        More Info
      </Link>
    </li>
  );
}

export default withRouter(Product);
