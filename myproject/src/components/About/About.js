
import styles from './About.module.css';

const About = ()=>{

return(
    <section className={styles.top}>
    <div className={styles.top__img__wrapper}>
        <img src="./4.jpg" alt=""/>
    </div>
  <article className={styles.about__article} >
      <h1>About Us</h1>
    <p>
    Lures can be a confusing topic for a new angler. 
    There are so many to choose from, and each type of lure performs differently. 
    To get the lowdown on the best lures for the job, visit our sections. First off, generally, there are hard baits and soft baits. 
    Soft baits will typically be added to a hook you’ve tied on. Things like worms, lizards, grubs, fake fish are all soft plastics and are an extremely effective way to fish as well as being lighter on the wallet. Hard baits typically tie directly to your line, and as they’re reeled in, will elicit some kind of action on their own. 
    In some cases that action can also be influenced by you.
    We are dedicated to helping trout anglers to choose right bait!”
    </p>

    
    <p ><q className={styles.quote}>Give a man a fish, and you feed him for a day. Teach a man to fish, and you feed him for a lifetime.</q>
   
      
    </p>
    
  </article>
</section>
)

}
export default About;