import styles from './BaitDetailsCard.module.css';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import * as baitService from '../../../services/baitService';
import { Link } from 'react-router-dom';



const BaitDetailsCard =({bait})=>{
const navigate = useNavigate();
const { userInfo } = useAuthContext();
const token = userInfo.accessToken;

 
    const deletePost = () => {
        console.log()
        baitService.deleteOneBait(token, bait._id).then((data) => console.log(data));
        navigate("/");
      };


  return (

<section className={styles.sectionmain}>
        <article className={styles.main}>
          <div className={styles.mainimgwrapper}>
            <img src={bait.img} className={styles.mainimg} alt="No picture" />
          </div>
          <div className={styles.detailsdiv}>
            <p>
              <span>Fish species: </span> {bait.species}{" "}
            </p>
            <p>
              <span className={styles.span}>Bait: </span> {bait.bait}
            </p>
            <p>
              {" "}
              <span>The story: </span>
              {bait.story}
            </p>

            <p>
              <span>Weight: </span>
              {bait.weight}kg.
            </p>
            {userInfo._id === bait._ownerId ? (
              <div>
                <button className={styles.delete}>
                  <Link to={`/gallery/edit/${bait._id}`}>Edit article</Link>
                </button>
                <button className={styles.edit} onClick={deletePost} >
                  Delete article
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </article>
      </section>
     


  )  
}

export default BaitDetailsCard;