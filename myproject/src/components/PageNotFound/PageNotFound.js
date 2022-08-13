import styles from './PageNotFound.module.css';
import { Link } from 'react-router-dom';

const PageNotFound = ()=>{
      return (
 <>
      <div className={styles.mainbox}>
          <div className={styles.err}>4</div>
          <div className={styles.err1}> <i class="far fas fa-spinner fa-pulse"></i></div>
          <div className={styles.err2}>4</div>
          <div className={styles.msg}>Ooops! Page Not Found<p>Let's go <Link to="/">home</Link> and try from there.</p>
          </div>
          </div>
          </>
      );
}

export default PageNotFound;