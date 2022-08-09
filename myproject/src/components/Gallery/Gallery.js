import styles from "./Gallery.module.css";
import { useEffect, useState } from "react";
import BaitCard from "./BaitCard/BaitCard";
import * as baitServices from "../../services/baitService";

const AllBaits = () => {
  const [baits, setBaits] = useState([]);
  useEffect(() => {
    baitServices.getAllBaits().then((result) => {
      console.log(result);
      setBaits(result);
    });
  }, []);
  return (
    <section className={styles.section__main}>
      <article className={styles.main}>
        <div className={styles.main__img__wrapper}>
          <img
            className={styles.main__img}
            src="assets/15.jpg"
            alt="Loading..."
          />
        </div>
        <div className={styles.main__div}>
          <h1>Fishing is passion, buying a new bat s the same!</h1>
          <p>
            Fish early, and fish late. Many species of fish bite best right at
            dawn and dusk, in ambient sunlight. During the mid-day hours cloud
            cover can make for better fishing, and in direct sunlight
            (especially during the heat of summer) look for areas with shade.
            Fish often seek out shade when it’s hot and sunny and become more
            active during the cool hours of the day, just as you or I might.
          </p>
        </div>
      </article>
      <section className={styles.section__second}>
      {baits ? (baits.length>0 ? <div>
          
             
              <ul>
                {baits.map((x) => <BaitCard bait={x} key={x._id} />)}
               </ul></div>
            : (
              <p className={styles.no_fishes}>
                <span>Ooops!</span> There's no fishes in the dock. Change your
                bait and try again!
              </p>
            )) :
            
            <p className={styles.loading}>Loading...</p>
            }
          
        
      </section>
    </section>
  );
};
export default AllBaits;
