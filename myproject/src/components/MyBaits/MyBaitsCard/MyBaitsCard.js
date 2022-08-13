
import styles from './MyBaitsCard.module.css';



const MyBaitsCard = ({bait, index})=> {
    return (
        
            <li>
               <article className={styles.my__catches}> 
            <div className={styles.article__img__wrapper}> 
            <img className={styles.article__img}  src={bait.img} alt="" /> 
           
                 
             </div>
            <p className={styles.my__catches__description}>{bait.bait} </p> 
             </article></li>
    )
}
export default MyBaitsCard;