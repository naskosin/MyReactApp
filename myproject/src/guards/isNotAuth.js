import { useAuthContext } from "../contexts/AuthContext"
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import * as baitService from '../services/baitService'



export const isAuth = (Component)=>{
let WrappedComponent=(props)=>{
const {userInfo} = useAuthContext();

return userInfo.email ? <Component {...props} /> : <Navigate to="/login" /> }

return WrappedComponent;
}
 
export const isNotAuth = (Component)=>{
    let WrappedComponent=(props)=>{
    const {userInfo} = useAuthContext();
    
    return userInfo.email ? <Navigate to="/"/> : <Component {...props} />    }
    
    return WrappedComponent;
    }

    export const isOwner = (Component)=>{
        let WrappedComponent=(props)=>{
        const {userInfo} = useAuthContext();
        const [owner, setOwner] = useState({});
        const { baitId } = useParams();
        console.log(owner)
        baitService.getOneBait(baitId)
        .then(res=>{setOwner(res); console.log(owner)})
        return userInfo._id===owner._ownerId ?  <Component {...props} /> : <Navigate to="/"/>   }
        
        return WrappedComponent;
        }