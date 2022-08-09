import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BaitDetailsCard from "./BaitDetailsCard/BaitDetailscard";
import { useNavigate } from "react-router-dom";
import * as baitService from "../../services/baitService";
import * as commentService from "../../services/commentService";
import Comment from "./Comments/Comment";
import { useAuthContext } from "../../contexts/AuthContext";
import { useCommentValidator } from "../../hooks/useCommentValidator";
import ConfirmDialog from "../Common/ConfirmDialog/ConfirmDialog";
import { useNotifyContext } from "../../contexts/NotifyContext";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Details.module.css";

const Details = () => {
  const initialState  = { text: "" };
  const [error, setError, isFormValid] = useCommentValidator(initialState);

  const [bait, setBait] = useState({});
  const [comments, setComments] = useState([]);
  const { userInfo } = useAuthContext();
  const { baitId } = useParams();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const { errorNotification, notification } = useNotifyContext();

  const navigate = useNavigate();

  console.log(baitId);

  const token = userInfo.accessToken;

  const email = userInfo.email;

  useEffect(() => {
    commentService.getAllComments(baitId).then((res) => {
    

      setComments(res);
    });
    baitService.getOneBait(baitId).then((res) => {
      setBait(res);
    });
  }, []);

  const deleteBait = () => {
    baitService
      .deleteOneBait(token, bait._id)
      .then(() => navigate("/gallery"))
      .catch((err) => {
        notification(err);
        console.log(errorNotification)})
  }
  const createYourComment = (e) => {
    e.preventDefault();
    let { text } = Object.fromEntries(new FormData(e.currentTarget));
    console.log(text);
    let commentData = { text, email, baitId };
    commentService
      .createComment(token, commentData)
      .then((res) => setComments((state) => [...state, res]));
    e.target.reset();
  };

  return (
    <>
      <ConfirmDialog
        show={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        onSave={deleteBait}
      />
      {
        <BaitDetailsCard
          bait={bait}
          setShowDeleteDialog={setShowDeleteDialog}
        />
      }
      {comments.length > 0 ? (
        <section>
          {comments.map((x) => (
            <Comment
              key={x._id}
              comment={x}
              commentId={x._id}
              baitId={baitId}
              comments={comments}
              setComments={setComments}
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
            onBlur={setError}
          ></textarea>
 {error.text !== "Filled" && error.text ? <p className={styles.errorParagraph}>{error.text}</p> : ""}
          <button disabled={!isFormValid} className={styles.button}>Comment</button>
        </form>
      </div>
    </>
  );
};
export default Details;

