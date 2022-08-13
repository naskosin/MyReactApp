import {Navigate, Outlet} from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const GuardedRoute = ()=>{
    const {isLogged} = useAuthContext();
    return isLogged ? <Outlet/> : <Navigate to='/login'/>
}
export default GuardedRoute;