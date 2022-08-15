import { Link } from 'react-router-dom';
import styles from './Header.module.css'; 
import * as authService from '../../services/authService';
import { useNotifyContext } from "../../contexts/NotifyContext";
import {AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Header =(

)=>{
  const navigate = useNavigate();
const {userInfo, logout} =useContext(AuthContext);
let token = userInfo.accessToken;
const {errorNotification} = useNotifyContext();
const logOut = () =>{
  authService.loginOut(token)
  .then(res=>{console.log(res)
    logout(); navigate('/')}

  )
  
}
let loggedNavigation =  
  
<nav className={styles.isLogged}>
 <p className={styles.username} >Hi, <span className={styles.username__span}>{userInfo.email}</span>!</p> 
<ul>
  <li>
    <Link className={styles.header__a} to="/">Home</Link>
  </li>
  <li>
    <Link className={styles.header__a} to="/allbaits">All Baits</Link>
  </li>
  <li>
    <Link className={styles.header__a} to="/postbait">Post bait</Link>
  </li>
  
  <li>
    <Link  className={styles.header__a} to="/biggestfishes">Biggest Fishes</Link>
  </li>
  <li><Link  className={styles.header__a} to="search">Search</Link></li>
  <li>
    <Link  className={styles.header__a} to="/mybaits">My baits</Link>

  </li>
  <li>
  
  < button  className={styles.header__button} href ="#" onClick = {logOut}>Logout</button >
  </li>
</ul>


</nav> 

 let guestNavigation = 
 <nav  className={styles.not__logged}>
 <ul>
   <li>
     <Link className={styles.header__a} to="/">Home</Link>
   </li>

   <li> <Link  className={styles.header__a} to="/register">Register</Link></li>
   <li>
   <Link className={styles.header__a}  to="/login">Login</Link>
   </li>
   <li>
   <Link  className={styles.header__a} to="/allbaits">All Baits</Link>
   </li>
   <li>
   <Link  className={styles.header__a} to="/biggestfishes">Biggest Fishes</Link>
   </li>
 </ul>
</nav>;




    return (<header className={styles.header}>
    <h1>Best trout baits</h1>
    {userInfo.email ? loggedNavigation : guestNavigation}
     
    {errorNotification ? <p className={styles.notification} >{errorNotification} </p> : ''} 
   
  </header>
  )
};
export default Header;