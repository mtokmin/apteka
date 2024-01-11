import classes from "./Search.module.scss";

function Search() {
  return ( 
    <form className={classes.form} action="POST">
      <input className={classes.input} type="text" placeholder="Поиск по каталогу" name="searhInput"/>
      <button className={classes.button} type="submit">Найти</button>
    </form>
   );
}

export default Search;