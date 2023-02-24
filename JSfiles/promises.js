

let promise = new Promise(function(resolve , rejeect) {
    alert('hello')
    promise(56)
})

console.log('hello ubaid first')
setTimeout(()=>{
    console.log('hello ubaid second')
},3000);
console.log('hello ubaid third')
console.log(promise);


// setTimeout(()=>{
//     console.log('ubaid ullah');
// },3000);

// let promisee = new promise (function(resolve , rejeect){
//     alert('hello')
//     console.log(promisee);

// })

let mypromise = new Promise((resolve , reject)=>{
    const error = fal;
    if(!error){
        resolve('yes! resolve the promise');
    }else{
        reject('no! rejected the promises');
    }
});
console.log(mypromise)


