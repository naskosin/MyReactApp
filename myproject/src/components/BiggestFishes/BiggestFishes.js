import { useEffect } from 'react';
import { useState } from 'react';
import FishCard from './FishCard/FishCard';
import styles from './BiggestFishes.module.css';
import * as baitService from '../../services/baitService';


const BiggestFishes =()=>{

const [fishes, setFishes] = useState([]);
useEffect(()=>{
    baitService.getAllBaits()
    .then(data=>{
    let topfishes = data.sort((a,b)=>{return b.weight-a.weight});
    setFishes(topfishes)
    })
})


return(
    <> 
<section  >
{fishes ? fishes.map((fish,index)=><FishCard  key = {fish._id} fish={fish} index={index}/>) : <div className={styles.no_fishes} ><p><span>Ooops!</span> There's no pretenders for top five, be the first!</p></div>}

</section>

</>
)
}
export default BiggestFishes;