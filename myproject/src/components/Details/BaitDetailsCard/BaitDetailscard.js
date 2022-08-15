import styles from './BaitDetailsCard.module.css';
import { useAuthContext } from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';



const BaitDetailsCard =({bait,  setShowDeleteDialog})=>{

const { userInfo } = useAuthContext();
const token = userInfo.accessToken;


const deleteClick =()=>{
  setShowDeleteDialog(true)
}
 
const ownerButtons = <div>
<button  className={styles.edit}>
  <Link to={`/gallery/edit/${bait._id}`}>Edit article</Link>
</button>
<button className={styles.delete} onClick={deleteClick} >
  Delete article
</button>
</div>;

    //const deletePost = () => {
    //  
    //    baitService.deleteOneBait(token, bait._id).then((data) => console.log('deleted'));
    //    navigate("/");
    //  };
//

  return (

<section className={styles.sectionmain}>
        <article className={styles.main}>
          <div className={styles.mainimgwrapper}>
            <img src={bait.img} className={styles.mainimg} alt="No picture" />
          </div>
          <div className={styles.detailsdiv}>
            <p>
              <span>Bait type: </span> {bait.baitType}{" "}
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
            {userInfo._id === bait._ownerId ? 
              ownerButtons
             : 
              " "}
          </div>
        </article>
      </section>
     


  )  
}

export default BaitDetailsCard;