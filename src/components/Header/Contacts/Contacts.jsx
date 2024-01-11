import classes from "./Contacts.module.scss";

function Contacts() {
  return ( 
    <div className={classes.content}>
      <p>Ежедневно 8:00 до 20:00</p>
      <a href="tel:+79224067384">+7 (922) 406-73-84</a>
    </div>
   );
}

export default Contacts;