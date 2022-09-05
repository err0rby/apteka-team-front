import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../Header/Header.module.css";
import AWW2 from './img/AWW2.png'
import logo from './img/logo.png'
import basket from './img/basket.png'
import medicine from './img/medicine.png'
import icon1 from './img/icon1.png'
import icon2 from './img/icon2.png'
import icon3 from './img/icon3.png'
import icon4 from './img/icon4.png'
import icon5 from './img/icon5.png'
import icon6 from './img/icon6.png'
import Basket from "../Basket/Basket";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { fetchUsers } from "../../feauters/usersSlice";

const Header = () => {
  const [open, setOpen] = useState(false)
  const token = useSelector((state) => state.applicationSlice.token)
const dispatch = useDispatch()
  function handleBasketOpen(){
    setOpen(!open)
  }

 const handleClean = () => {
  localStorage.clear()
  window.location.reload()
 }

  return (
    <div className={styles.header}>
      <div className={styles.header_img}>
        <img src={AWW2} alt="" />
        <div className={styles.logotype}><Link to="/"><img src={icon5} alt="#" /></Link></div>
      </div>
      <div className={styles.header_text}>
        <div className={styles.link}>
          <Link to="/alldrugs" className={styles.text}> Поиск </Link>
          <Link to="/category" className={styles.text}> Категории </Link>
          <Link to="/contacts" className={styles.text}> Контакты </Link>
        </div>
        <div className={styles.btns}>
          {token ? <button className={styles.exitBtn3} onClick={handleClean}>Выход</button> : <><Link to='/login' className={styles.line}><button className={styles.exitBtn2}>Вход</button></Link>
          <Link to='/auth' className={styles.line}><button  className={styles.exitBtn}>Регистрация</button></Link></>}
        </div>
        <div className={styles.butt}>
          <button onClick={handleBasketOpen}> <img src={basket} alt="q" /> </button>
          {
          open ? 
          <Basket />
          :
          false
        }
        </div>
      </div>
    </div>
  );
};

export default Header;
