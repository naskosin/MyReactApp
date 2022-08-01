import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyBaitsCard from "./MyBaitsCard/MyBaitsCard";
import styles from "./MyBaits.module.css";
import * as baitServices from "../../services/baitService";
import { useAuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

const MyBaits = () => {
  const { userInfo } = useAuthContext();
  const [baits, setBaits] = useState([]);

  useEffect(() => {
    baitServices.getAllBaits().then((data) => {
      let mycatches = data.filter((x) => x._ownerId === userInfo._id);
      setBaits(mycatches);
    });
  }, []);

  return (
    <section className={styles.my_catches}>
      <div className={styles.article__header__img__wrapper}>
        <img
          className={styles.article__header__img}
          src="assets/05.jpg"
          alt="No picture yet"
        />
      </div>
      <p className={styles.user}>Catcher: {userInfo.email}</p>

      {baits.length == 0 ? (
        <div className={styles.nocatches}>
          {" "}
          <p>Oooops! no catches, change the bait!</p>
        </div>
      ) : (
        <div className={styles.catches}>
          <p>My catches gallery:</p>
          <ul className={styles.mybaits__ul}>
            {baits.map((bait, index) => (
              <MyBaitsCard key={bait._id} bait={bait} index={index} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
export default MyBaits;
