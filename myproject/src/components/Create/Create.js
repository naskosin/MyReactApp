import { isAuth } from "../../guards/isAuth";
import * as baitService from "../../services/baitService";
import styles from "./Create.module.css";
import { useAuthContext } from "../../contexts/AuthContext";
import { useHandler } from "../../hooks/useCreateEditValidator";
import { useNavigate } from "react-router-dom";
const initialState = { species: "", weight: "", bait: "", img: "", fish_img: "", story: "" };

const Create = () => {
  const { userInfo } = useAuthContext();
  const [error, setError, isFormValid] = useHandler(initialState);
  let navigate = useNavigate();
  

  console.log(userInfo);

  const create = (e) => {
    e.preventDefault();

    const token = userInfo.accessToken;
    console.log(token);
    const { baitType, bait, img, fish_img, story, weight } = Object.fromEntries(
      new FormData(e.currentTarget)
    );
    let petData = { baitType, bait, img, fish_img, story, weight };
    console.log(petData);
    baitService
      .createOne(token, petData)

      .then((data) => {
        console.log(data);
        navigate("/gallery");
      });
  };

  return (
    <div className={styles.createcontainerinfo}>
      <img src="MyReactApp/assets/03.png" alt="Loading..." />

      <form className={styles.containertext} onSubmit={create}>
        <h2>Create Catch</h2>
        <p className={styles.paragraph}>Add your fish of lifetime!</p>

        <label htmlFor="title">Bait Type:</label>
        <input
          type="text"
          id="title"
          placeholder="Trout"
          name="baitType"
          onBlur={setError}
          className={
            error.baitType && error.baitType !== "Filled"
              ? styles.inputerror
              : styles.input
          }
        />
        {error.baitType && error.baitType !== "Filled" ? (
          <p className={styles.errorParagraph}>{error.baitType}</p>
        ) : (
          ""
        )}

        <label htmlFor="bait">Bait:</label>
        <input
          type="text"
          id="bait"
          placeholder="Lure"
          name="bait"
          onBlur={setError}
          className={
            error.bait && error.bait !== "Filled"
              ? styles.inputerror
              : styles.input
          }
        />
        {error.bait && error.bait !== "Filled" ? (
          <p className={styles.errorParagraph}>{error.bait}</p>
        ) : (
          ""
        )}

        <label htmlFor="picture">Bait picture:</label>
        <input
          type="text"
          id="picture"
          placeholder="http://..."
          name="img"
          onBlur={setError}
          className={
            error.img && error.img !== "Filled"
              ? styles.inputerror
              : styles.input
          }
        />

<label htmlFor="fish_img">Fish picture:</label>
        <input
          type="text"
          id="fish_img"
          placeholder="http://..."
          name="fish_img"
          onBlur={setError}
          className={
            error.fish_img && error.fish_img!== "Filled"
              ? styles.inputerror
              : styles.input
          }
        />
        {error.fish_img && error.fish_img !== "Filled" ? (
          <p className={styles.errorParagraph}>{error.fish_img}</p>
        ) : (
          ""
        )}

        <label htmlFor="certificate">Story:</label>
        <textarea
          type="text"
          placeholder="This day..."
          id="certificate"
          rows="5"
          name="story"
          onBlur={setError}
          className={
            error.story && error.story !== "Filled"
              ? styles.inputerror
              : styles.input
          }
        ></textarea>
        {error.story && error.story !== "Filled" ? (
          <p className={styles.errorParagraph}>{error.story}</p>
        ) : (
          ""
        )}

        <label htmlFor="weight">Weight of the fish:</label>
        <input
          type="text"
          id="weight"
          placeholder="1"
          name="weight"
          onBlur={setError}
          className={
            error.weight && error.weight !== "Filled"
              ? styles.inputerror
              : styles.input
          }
        />
        {error.weight && error.weight !== "Filled" ? (
          <p className={styles.errorParagraph}>{error.weight}</p>
        ) : (
          ""
        )}

        <button disabled={!isFormValid} className={styles.button}>
          Create
        </button>
      </form>
    </div>
  );
};
export default isAuth(Create);
