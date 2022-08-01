import { useState } from "react";




export const useValidateHandler=(initialState )=>{
 

const [error, setError] = useState(initialState);

const setItem = (e) =>{


   let field = e.currentTarget.name;
   console.log(field)
   if(field==="email"){
       let email = e.currentTarget.value;
   if (email.length === 0) {
    setError((state) => ({ ...state, email: "Invalid email!" }));
    
  } else if (!email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
    setError((state) => ({ ...state, email: "Wrong email!" }));
  } else {
    setError((state) => ({ ...state, email: "Filled" }))
    
}
}else if(field==="password"){
    let password = e.currentTarget.value;
    console.log(password)
  if (password.length === 0) {
    setError((state) => ({ ...state, password: "Password required!"}));
  } else {
          
        setError((state) => ({ ...state, password: "Filled" }))
       
      }

    }
    else if(field==="rePassword"){
        let rePassword = e.currentTarget.value;
        console.log(rePassword)
      if (rePassword.length === 0) {
        setError((state) => ({ ...state, rePassword: "Password required!" }));
      } else {
              
            setError((state) => ({ ...state, rePassword: "Filled" }));
         
    
        }
      }
      
}
console.log(error)
let isFormValid = error.email ==="Filled"  && error.rePassword=== "Filled" && error.password=== "Filled";
console.log(isFormValid)


return [error, setItem,  isFormValid]


}