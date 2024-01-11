import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

import classes from './Auth.module.scss';

function Auth() {
  const location = useLocation(); //Смотрим какой адрес в вдресной строке
  const isLogin = location.pathname === LOGIN_ROUTE; //true если маршрут совпадает с LOGIN_ROUTE

  return (
    <div className={classes.container}>
      <h2 className={classes.form__header}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
      <form className={classes.form} action="" method="post">
        <input className={classes.input__text} type="email" name="auth_email" id="auth_email" placeholder="Введите ваш email" required/>
        <input className={classes.input__text} type="password" name="auth_pass" id="auth_pass" placeholder="Введите ваш пароль" required/>
        <div className={classes.form__controls}>
          {isLogin ?
            <div>
              Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
            </div>
            :
            <div>
              Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
            </div>
          }
          <button className={classes.auth__button} type="submit">{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
        </div>

      </form>
    </div>
  );
}

export default Auth;