/* 
   console.log('ubaid ullah khan')
 async function ubaid(){
    console.log('khan')
    const response = await fetch('https://api.github.com/users');
    console.log('before response')
    return response;
}
console.log('before calling ubaid')
let a =ubaid();
console.log('After calling ubaid')
   console.log(a)
   a.then(data => console.log(data));
   console.log('last line of the code') */

   const ubaid = async () => {
      return await fetch(`https://dad-jokes.p.rapidapi.com/random/joke`)
   }

   const apiresponse = ubaid();
   apiresponse.then((data)=>{
      const res = data.json()
      
   })