
const apiUrl = 'https://fishes.onrender.com/users';


async function resulter(res){
    let jsonResult = await res.json();
    
    if (res.ok){
      return jsonResult;
    }else{
      throw jsonResult.message;
    }
}





export async function register(email, password){
    let res = await fetch(`${apiUrl}/register`, {
       method: 'POST',
       headers: {
         'content-type': 'applications/json',
         
       },
       body: JSON.stringify({email, password})
      
     });
    
     return resulter(res)
   
   
   
   };

   export async function login(email, password){
    let res = await fetch(`${apiUrl}/login`, {
       method: 'POST',
       headers: {
         'content-type': 'applications/json',
         
       },
       body: JSON.stringify({email, password})
      
     });
    
     return resulter(res)
   
   
   
   };

   export  function loginOut(token){
   return fetch(`${apiUrl}/logout`, {
       method: 'GET',
       headers: {
         'content-type': 'applications/json',
         'X-Authorization' : token,
       }
    
      
     })

   
   
   
   };