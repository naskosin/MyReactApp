import { useEffect, useState } from "react";
import MyBaitsCard from "./MyBaitsCard/MyBaitsCard";
import styles from "./MyBaits.module.css";
import * as baitServices from "../../services/baitService";
import { useAuthContext } from "../../contexts/AuthContext";


const MyBaits = () => {
  const { userInfo } = useAuthContext();
  const [baits, setBaits] = useState([]);

  useEffect(() => {
    baitServices.getAllBaits().then((data) => {
      let mycatches = data.filter((x) => x._ownerId === userInfo._id);
      setBaits(mycatches);
    });
  });

  return (
    <section className={styles.my_catches}>
      <div className={styles.article__header__img__wrapper}>
        <img
          className={styles.article__header__img}
          src="assets/05.jpg"
          alt="User..."
        />
      </div>
      <p className={styles.user}><span className={styles.owner__span}> Owner: </span>{userInfo.email}</p>

      {baits.length === 0 ? (
        <div className={styles.nocatches}>
          <p>Oooops!No baits, post your favourite bait!</p>
        </div>
      ) : (
        <div className={styles.catches}>
          <p>My baits gallery:</p>
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