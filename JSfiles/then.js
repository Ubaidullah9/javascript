

// console.log('hello first');

//    setTimeout(function(){
//       console.log('hello second')
//    },3000);

// console.log('hello third');

// let mypromise  = new Promise(function(resolve , reject){
//              resolve(56);           
// })
// console.log(mypromise);


// setTimeout(function(){
//     console.log('ubaid ullah')
// },5000)  




// let p1 = new Promise((resolve , reject)=>{
//     console.log('ubaid ullah');
//     setTimeout(()=>{
//         // console.log('i am resolve')
//        resolve(true)
//     },5000)
// });


// let p2 = new Promise((resolve , reject)=>{
//     console.log('ubaid ullah');
//     setTimeout(()=>{
//         // console.log('i am rejected')
//          reject(new Error('i am rejected'))
//     },5000) 
// });

// p1.then((value)=>{
//     console.log(value);
// })

// p2.catch((Error)=>{
//        console.log('p2 have some error');
// })


// console.log(p1 , p2);




// let p1 = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         console.log('ubaid ullah');
//         resolve(56)
//     },3000)
// })
// p1.then((value)=>{
//     console.log(value);

//     let p2 = new Promise((resolve , reject)=>{
//                resolve('i am promise')
//     }) 
//     return p2;

// }).then((value)=>{
//       setTimeout(()=>{
//         console.log('ubaid ullah is done')
//       },4000);

// }).then((value)=>{
//     console.log('i want to done ubaid ullah');

//      p3= new Promise((resolve  , reject)=>{
//               resolve('i am not done')
//      })
//      return p3;
// }).then((value)=>{ 
//     console.log('i am fully done')
     
//      let p4 = new Promise((resolve  ,reject)=>{
//         setTimeout(()=>{
//             console.log('Sorry i am very lait')
//         },5000)
//      })
//      }).then((value)=>{
//         console.log('Sorry i am  lait')
// })

//    const loadScript = ()=>{

//     return new Promise(resolve =>{    let script = document.createElement('script')
//     script.type = "text/javascript"
//     script.src = src
//     document.body.appendChild(src)
//     script.onload = () =>{
//         resolve(1);
//     }
// })
//    }



// let p5 = loadScript('https://locallhost.com/')
// p5.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log('we are not done');
// })
// console.log(p5);

const mypromise = new Promise((resolve , reject)=>{
    const error = false;
    if(!error){
        resolve('yes resolve the pormise')
    }else{
        reject('OH the promise is rejected')
    }
});
console.log(mypromise);