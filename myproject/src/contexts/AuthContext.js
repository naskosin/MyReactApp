import { createContext } from "react";
import { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalstorage';

export const AuthContext = createContext();



const initialState = 

    {accessToken: '', email: '', _id: ''};




  

export const AuthProvider = ({children}) =>{
    const [userInfo, setUserInfo] = useLocalStorage('user', initialState);
    console.log(userInfo)
    const login=(authData)=>{
        setUserInfo(authData)
      }
    const logout=()=>{
        setUserInfo( {accessToken: '', email: '', _id: ''})
    }

     return(
         <AuthContext.Provider value={{userInfo, login, logout, isLogged: userInfo.email }}>
             {children}
         </AuthContext.Provider>
     )
};
export const useAuthContext=()=>{
    const authState = useContext(AuthContext);
return authState;
 }
// export const authContext=()=>{
//    const authState = useContext(AuthContext);
//return authState;
 //}