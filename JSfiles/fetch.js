

let p =fetch('https://community-open-weather-map.p.rapidapi.com/weather?q=London%252Cuk')
p.then((value1)=>{
    return value1.json();
}).then((value2)=>{
    console.log(value2)
})
// console.log(p)