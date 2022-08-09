import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className={styles.description}>
        <img className={styles.footer__img} src="assets/61.jpg" alt="" />
        <p className={styles.description__p}>
          Spinning is one of the most widespread and popular techniques around
          the world for that can be done in both saltwater and freshwater.
        </p>
      </div>
      <nav>
        <ul className={styles.description__ul}>
          <li className={styles.footer__li}>
            <i className="fab fa-facebook"></i>
            <a
              className={styles.footer__a}
              href="https://www.facebook.com/groups/262191725221158"
            >
              Facebook
            </a>
          </li>
          <li className={styles.footer__li}>
            <i className="fab fa-twitter"></i>
            <a className={styles.footer__a} href="https://twitter.com">
              Twitter
            </a>
          </li>
          <li className={styles.footer__li}>
            <i className="fab fa-instagram"></i>
            <a className={styles.footer__a} href="https://instagram.com">
              Instagram
            </a>
          </li>
        </ul>
      </nav>
      <ul>
        <li className={styles.footer__li}>
          <i className="fa-solid fa-fish"></i>
          <Link className={styles.footer__a} to="/about">
            About
          </Link>
        </li>
        <li className={styles.footer__li}>
          <i className="fa-solid fa-fish"></i>
          <Link className={styles.footer__a} to="/contacts">
            Contacts
          </Link>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;

