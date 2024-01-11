import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../index";
import { ABOUT_ROUTE, CONDITIONS_ROUTE, SHOP_ROUTE } from "../../../utils/consts";

import classes from "./NavBar.module.scss";

function NavBar() {
  const  { user } = useContext(Context)
  return ( 
    <nav className={classes.content}>
      <ul>
        <li><Link to={SHOP_ROUTE}>Главная</Link></li>
        <li><Link to={CONDITIONS_ROUTE}>Условия бронирования</Link></li>
        <li><Link to={ABOUT_ROUTE} >О компании</Link></li>
      </ul>
    </nav>
   );
}

export default NavBar;