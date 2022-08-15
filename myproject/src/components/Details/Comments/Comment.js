import { useAuthContext } from "../../../contexts/AuthContext";
import {  useState } from "react";



import styles from "./Comments.module.css";

export const Comment = ({ comment, deleteComment, editComment}) => {
    


  const { userInfo } = useAuthContext();
 
  const [editMode, setMode] = useState(false);
  const edit = () => {
    setMode(true);

  };
  //const editComment = (e) => {
  //  e.preventDefault();
  //  console.log(comment._id)
  // let { text } = Object.fromEntries(new FormData(e.currentTarget));
  //  let commentData = { text, email, baitId };
  //  console.log(text)
  // commentService.editOneComment(token, commentData, comment._id)
  // .then((data) => {
  //  
  //      console.log(data.text)
  //      let arr = comments;
  //      arr.map((x) => {
  //        if (x._id === comment._id) {
  //          console.log(x._id);
  //          console.log({x});
  //          return x.text= data.text ;
  //        }
  //        return x;
  //      });
  //      
  //      setComments(arr);
  //      
  //      setMode(false)
  //    
  //    });
  //   
  //   
  //}
 //
 //
 //
 
 
 
 


const cancelEdit =() =>{
    setMode(false);
}
  let viewMode = 
    (<div>
        <div className={styles.comment__text}>
          <p>{comment.text}</p>
        </div>

        {userInfo.email === comment.email ? 
          <div className={styles.comments__buttons}>
            <button className={styles.comments__buttons__delete} onClick={deleteComment}>Delete</button>
            <button className={styles.comments__buttons__edit} onClick={edit} id={comment._id}>
              Edit
            </button>
          </div>: ""}</div>) ;
     
    

let editView =
(<form className={styles.edit__mode} onSubmit={editComment} >
  <textarea 
    type="text"

    placeholder="This day"
    name="text"
    defaultValue={comment.text}
  ></textarea>

  <div className={styles.comments__buttons__edit__mode}>
    <button  className={styles.comments__buttons__edit__mode__save}  >
      Save 
    </button>
    <button className={styles.comments__buttons__edit__mode__cancel} onClick ={cancelEdit}>
      Cancel
    </button>
  </div>
</form>);




  return (
    <div className={styles.comments} >
        <div className={styles.comment}>
      <p className={styles.comment__user}>
        User: <span>{comment.email}</span>, commented
      </p>
      
      {editMode ? 
        editView
       : 
        viewMode
      }
      
    </div>
    </div>
  );
};
export default Comment;