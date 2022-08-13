import {Navigate, Outlet} from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const LoggedGuardedRoute = ()=>{
    const {isLogged} = useAuthContext();
    return isLogged ?  <Navigate to='/'/>:<Outlet/> 
}
export default LoggedGuardedRoute;