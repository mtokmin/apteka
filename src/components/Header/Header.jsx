import { useContext } from "react";
import { Context } from "../../index";

import classes from './Header.module.scss';

import logoImg from '../../img/logo.png';
import NavBar from "./NavBar/NavBar";
import UserMenu from "./UserMenu/UserMenu";
import Search from "./Search/Search";
import Contacts from "./Contacts/Contacts";
import Basket from "./Basket/Basket";



function Header() {
  const { user } = useContext(Context);
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <img className={classes.logo} src={logoImg} alt="Логотип аптеки" width={191} height={61.5} />
        <div className={classes.content}>
          <div className={classes.content__top}>
            <NavBar />
            <UserMenu />
          </div>
          <div className={classes.content__bottom}>
            <Search />
            <Contacts />
            <Basket />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;