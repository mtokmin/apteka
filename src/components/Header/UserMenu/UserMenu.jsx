import { Link } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../../../utils/consts";
import { useContext } from "react";
import { observer } from "mobx-react";

import classes from './UserMenu.module.scss';
import { Context } from "../../../index";


const UserMenu = observer(()=> {
  const { user } = useContext(Context)

  return (
    <ul className={classes.content}>
      {user.isAuth && user.isAdmin ?  
        <li>
          <Link to={ADMIN_ROUTE}>Панель администратора</Link>
        </li> 
        : 
        ""
      }
      {user.isAuth ?
        <li>
          <Link to={SHOP_ROUTE} onClick={() => user.setIsAuth(false)}>Выйти</Link>
        </li>
        :
        <>
          <li>
            <Link to={LOGIN_ROUTE}>Вход</Link>
          </li>
          <li>
            <Link to={REGISTRATION_ROUTE}>Регистрация</Link>
          </li>
        </>
      } 
    </ul>
  );
});

export default UserMenu;