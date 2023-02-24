
    function greet(name){
        console.log('hello good morning ' + name);
    }
    timeOut =  setTimeout(greet, 5000 ,'uabid ullah khan'); 
    console.log(timeOut);
    clearTimeout(timeOut);
    function myfunction(name){
        console.log('how are you '+ name)
    }
    timeOut = setTimeout(myfunction , 1000 ,' ubaid ullah')
    console.log(timeOut);
    clearTimeout(timeOut)
    // setInterval(myfunction ,1000 , 'Ahamd ali');

    let time = new Date(2023,02,26); 
    console.log(time);
    time.setMonth(2);

    let year = time.getFullYear();
    console.log('the year is now ' ,year)