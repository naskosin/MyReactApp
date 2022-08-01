
import styles from './About.module.css';

const About = ()=>{

return(
    <section className={styles.top}>
    <div className={styles.top__img__wrapper}>
        <img src="assets/Ontario-brook-trout-1920x1280.jpeg" alt=""/>
    </div>
  <article className={styles.about__article} >
      <h1>About Us</h1>
   
    
    <p><q>Give a man a fish, and you feed him for a day. Teach a man to fish, and you feed him for a lifetime.</q>
   
      
    </p>
    <p>Today fishing has new morals and ethics, fish is not a food. Fishing is
        sport and best memories are fishes that we catch, photographing and
        release .
      In Biggest catches we are give a fisherman joy to publish his biggest
      catch, his “once-in-a-lifetime fish” with the story and details. Because
      memories are our inner fire and faith in future!
    </p>
  </article>
</section>
)

}
export default About;