import { createContext } from "react";
import { useContext } from 'react';
import { useState } from "react";


export const NotifyContext = createContext();







  

export const NotifyProvider = ({children}) =>{
    const [errorNotification, setErrorNotification] = useState();

    
    const notification=(error)=>{
        setErrorNotification(error)
        setTimeout(()=>
        setErrorNotification('')
      , 4000)
    
    }
    


     return(
         <NotifyContext.Provider value={{errorNotification, notification }}>
             {children}
         </NotifyContext.Provider>
     )
};
 export const useNotifyContext=()=>{
     const notifyState = useContext(NotifyContext);
return notifyState;
 }