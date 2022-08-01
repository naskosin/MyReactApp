import { useAuthContext } from "../contexts/AuthContext"
import { Navigate } from "react-router-dom";



export const isAuth = (Component)=>{
let WrappedComponent=(props)=>{
const {userInfo} = useAuthContext();

return userInfo.email ? <Component {...props} /> : <Navigate to="/login" /> }

return WrappedComponent;
}