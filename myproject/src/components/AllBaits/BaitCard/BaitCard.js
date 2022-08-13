import styles from './BaitCard.module.css';

import {Link} from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContext';

const BaitCard = ({bait})=>{
    const {userInfo} = useAuthContext();
 
    return (
<li className={styles.baitcard__li}><article className={styles.baitcard__article}>
    <div className={styles.article__img__wrapper}>
    <img className={styles.article__img} src={bait.img} alt=""/></div>
    
        
        <p className={styles.baitcard__paragraph}>{bait.bait}</p>
        {userInfo.email ? <div className={styles.div__details__button}><button  className={styles.details__button}>
          <Link to={`/gallery/${bait._id}`}>Details </Link></button></div> : '' } 
  
   
</article></li>  
    );

};
export default BaitCard;