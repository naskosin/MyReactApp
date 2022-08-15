const apiUrl = 'https://nasko-fish.herokuapp.com/data/';
export function getAllComments(baitId){
  const query= encodeURIComponent(`baitId="${baitId}"`)

   return fetch(`https://nasko-fish.herokuapp.com/data/comments?where=${query}`)
     .then(res=>res.json())
   
 }
 export async function createComment(token, text){
    let res = await fetch('https://nasko-fish.herokuapp.com/data/comments', {
       method: 'POST',
       headers: {
         'content-type': 'applications/json',
         'X-Authorization' : token,
         
       },
       body: JSON.stringify(text)
     });
     let result = await res.json();
     return result;
    };

    export async function editOneComment(token, text, id){
        let res = await fetch(`https://nasko-fish.herokuapp.com/data/comments/${id}`, {
           method: 'PUT',
           headers: {
             'content-type': 'applications/json',
             'X-Authorization' : token,
             
           },
           body: JSON.stringify(text)
         });
         let result = await res.json();
         return result;
        };
  
        export async function deleteOneComment(token, id){
          let res = await fetch(`https://nasko-fish.herokuapp.com/data/comments/${id}`, {
             method: 'DELETE',
             headers: {
               'content-type': 'applications/json',
               'X-Authorization' : token,
               
             }
           });
           let result = await res.json();
           return result;
          }; 