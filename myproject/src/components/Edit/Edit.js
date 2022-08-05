import * as baitService from "../../services/baitService";
import styles from "./Edit.module.css";
import { useHandler } from "../../hooks/useCreateEditValidator";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const initialState = {
  baitType: "Filled",
  weight: "Filled",
  bait: "Filled",
  img: "Filled",
  story: "Filled",
  fish_img: "Filled",
};
const Edit = () => {
  const navigate = useNavigate();
  const { baitId } = useParams();
  const { userInfo } = useAuthContext();
  const [bait, baitState] = useState({});
  const [error, setError, isFormValid] = useHandler(initialState);
  const editOne = (e) => {
    e.preventDefault();
    const token = userInfo.accessToken;
    console.log(token);
    const { baitType, bait, img, story, weight } = Object.fromEntries(
      new FormData(e.currentTarget)
    );
    let petData = { baitType, bait, img, story, weight };
    console.log(petData);
    baitService
      .editOneBait(token, petData, baitId)
      .then((data) => console.log(data));
    navigate(`/gallery/${baitId}`);
  };
  useEffect(() => {
    baitService
      .getOneBait(baitId)

      .then((data) => {
        baitState(data);
      });
  }, []);

  let baitd = bait._id;

  return (
    <div className={styles.createcontainerinfo}>
      <img src="assets/01-azores-baiting.jpg" alt="image" />

      <form className={styles.containertext} onSubmit={editOne}>
        <h2>Edit Catch</h2>
        <p>Add your bait of lifetime!</p>

        <label htmlFor="title">Bait Type:</label>
        <input
          type="text"
          id="title"
          placeholder="Trout"
          name="baitType"
          onBlur={setError}
          defaultValue={bait.baitType}
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

        <label htmlFor="painting-tech">Bait:</label>
        <input
          type="text"
          id="painting-tech"
          placeholder="Lure"
          name="bait"
          onBlur={setError}
          defaultValue={bait.bait}
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
          defaultValue={bait.img}
          className={
            error.img && error.img !== "Filled"
              ? styles.inputerror
              : styles.input
          }
        />

        {error.img && error.img !== "Filled" ? (
          <p className={styles.errorParagraph}>{error.img}</p>
        ) : (
          ""
        )}

        <label htmlFor="fish_img">Fish picture:</label>
        <input
          type="text"
          id="picture"
          placeholder="http://..."
          name="fish_img"
          onBlur={setError}
          defaultValue={bait.fish_img}
          className={
            error.fish_img && error.fish_img !== "Filled"
              ? styles.inputerror
              : styles.input
          }
        />

        {error.img && error.img !== "Filled" ? (
          <p className={styles.errorParagraph}>{error.img}</p>
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
          defaultValue={bait.story}
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

        <label htmlFor="weight">Weight of the bait:</label>
        <input
          type="text"
          id="weight"
          placeholder="1"
          name="weight"
          onBlur={setError}
          defaultValue={bait.weight}
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
          Edit article
        </button>
      </form>
    </div>
  );
};

export default Edit;
