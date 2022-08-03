import { isAuth } from "../../guards/isAuth";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BaitDetailsCard from "./BaitDetailsCard/BaitDetailscard";
import styles from "./Details.module.css";
import * as baitService from "../../services/baitService";
import * as commentService from "../../services/commentService";
import Comment from "./Comments/Comment";
import { useAuthContext } from "../../contexts/AuthContext";

const Details = () => {
  const [bait, setBait] = useState([]);
  const [comments, commentsState] = useState([]);
  const { userInfo } = useAuthContext();
  const { baitId } = useParams();
  console.log(baitId);

  const token = userInfo.accessToken;

  const email = userInfo.email;

  useEffect(() => {
    commentService.getAllComments(baitId).then((res) => {
      console.log(res);

      commentsState(res);
    });
    baitService.getOneBait(baitId).then((res) => {
      setBait(res);
    });
  }, []);

  const createYourComment = (e) => {
    e.preventDefault();
    let { text } = Object.fromEntries(new FormData(e.currentTarget));
    console.log(text);
    let commentData = { text, email, baitId };
    commentService
      .createComment(token, commentData)
      .then((res) => commentsState((state) => [...state, res]));
    e.target.reset();
  };

  return (
    <>
      {<BaitDetailsCard bait={bait} />}
      {comments.length > 0 ? (
        <section>
          {comments.map((x) => (
            <Comment
              key={x._id}
              comment={x}
              commentId={x._id}
              baitId={baitId}
              comments={comments}
              setComments={commentsState}
            />
          ))}
        </section>
      ) : (
        <div className={styles.no__comments}>
          <p className={styles.no__comments}>No comments yet!</p>
        </div>
      )}

      <div className={styles.container}>
        <form className={styles.form__container} onSubmit={createYourComment}>
          <h2>Comment</h2>

          <textarea
            type="text"
            id="uses"
            placeholder="This day"
            name="text"
          ></textarea>

          <button>Comment</button>
        </form>
      </div>
    </>
  );
};
export default isAuth(Details);
