import styles from './Contacts.module.css';


const Contacts =()=>{

return (

<section className={styles.top}>
    <div className={styles.left__wrapper}>
        <p className={styles.contacts__paragraph}>Life could be joy, when you share your fish of lifetime</p>
    </div>
  <article className={styles.contacts__article}>
      <h1>Contact us at:</h1>
     <div  className={styles.img__wrapper}> <a href="https://www.facebook.com/groups/2861971267356482" ><img src="MyReactApp/assets/n.jpg" alt=""/></a></div>
    <ul className={styles.list}>
        <li>
            <p>Extress fishing</p>
        </li>
        <li>
            <p>16 Daskalov street</p>
        </li>
        <li>
            <p>Pazardzhik</p>
        </li>
        <li>
            <p>4400</p>
        </li>
        <li>
            <p>Bulgaria</p>
        </li>
        <li>
            <p>Email: kinjalat@abv.bg</p>
        </li>
        
    </ul>
  </article>
</section>)
}
export default Contacts;