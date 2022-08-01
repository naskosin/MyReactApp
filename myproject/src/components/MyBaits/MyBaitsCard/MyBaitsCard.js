
import styles from './MyBaitsCard.module.css';



const MyBaitsCard = ({bait, index})=> {
    return (
        
            <li>
               <article className={styles.my__catches}> 
            <div className={styles.article__img__wrapper}> 
            <img className={styles.article__img}  src={bait.img} alt="" /> 
           
                 
             </div>
            <p class= "my__catches__description"><span class= "my__catches__description__span">Catched on:</span> {index+1}</p> 
             </article></li>
    )
}
export default MyBaitsCard;