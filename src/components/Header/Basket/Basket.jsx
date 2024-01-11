import { Link } from "react-router-dom";
import { CART_ROUTE } from "../../../utils/consts";

import classes from "./Basket.module.scss"


function Basket() {
  return ( 
    <Link className={classes.content} to={CART_ROUTE}>Корзина</Link>
   );
}

export default Basket;