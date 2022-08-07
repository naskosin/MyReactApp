import styles from "./Search.module.css";
import * as baitServices from "../../services/baitService";
import BaitCard from "../Gallery/BaitCard/BaitCard";

import { useState } from "react";

const Search = () => {
  const [baits, setBaits] = useState();
  const searchHandler = (e) => {
    e.preventDefault();
    const { searchText } = Object.fromEntries(new FormData(e.currentTarget));
    console.log(searchText);
    baitServices.getSearchedBaits(searchText).then((res) => setBaits(res));
  };

  return (
    <section className={styles.section__main}>
      <form className={styles.search__form} onSubmit={searchHandler}>
        <label className={styles.search__label} for="uses">
          Search for baits:
        </label>
        <input
          className={styles.search__form__input}
          type="text"
          for="uses"
          name="searchText"
        />
        <button className={styles.search__button}>Search</button>
      </form>
      <section className={styles.section__second}>
        <div>
          {baits ? (
            <ul>
              {baits.length > 0 ? (
                baits.map((x) => <BaitCard bait={x} key={x._id} />)
              ) : (
                <div className={styles.no_fishes}>
                  <p>
                    <span>Ooops!</span> There's no fishes from searched species!
                  </p>
                </div>
              )}
            </ul>
          ) : (
            ""
          )}
        </div>
      </section>
    </section>
  );
};
export default Search;
