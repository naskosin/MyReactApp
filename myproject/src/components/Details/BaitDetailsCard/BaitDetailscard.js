import styles from './BaitDetailsCard.module.css';
import { useAuthContext } from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';



const BaitDetailsCard =({bait,  deleteClick})=>{
const { userInfo } = useAuthContext();




 
const ownerButtons = <div className={styles.ownerButtons}>
<button  className={styles.edit}>
  <Link to={`/gallery/edit/${bait._id}`}>Edit article</Link>
</button>
<button className={styles.delete} onClick={deleteClick} >
  Delete article
</button>
</div>;



  return (

<section className={styles.sectionmain}>
        <article className={styles.main}>
          <div className={styles.mainimgwrapper}>
            <img src={bait.img} className={styles.mainimg} alt="Bait" />
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