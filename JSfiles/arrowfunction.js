
        // function ubaid(what){
        //     console.log(what +'ubaid ullah');
        // }
        // ubaid('how are you  ');

        // fawad = (name)=>{
        //     console.log('hi my name is ' + name )
        // }
        // fawad('Ubaid ullah');
    //    setTimeout (function(){
    //     console.log("we are inside")
    //    },3000)
    // setTimeout(()=>{
    //     console.log('we are inside out of function')
    // },3000);

    // let sum = (a,b)=>{
    //     return a+b;
    // }
    //   sum();

    // let half = a => a/2; 
    // let mid = a => a+a-a/2; 

    // let two= (a,b) =>{
    //            return a+b/a;
    // } 
    // console.log(two(4,10));


    let ubaid={
        name:['Adil','Ahmad','Marwat'],
        fawad(){
            this.name.forEach((khan)=>{
                console.log('my name is '+ khan)
            });
        }
    }
    ubaid.fawad();
    let bbb={
        ssssss:'good morning',
        ddddd:['ubaid','khan','hadi'],
        speak(){
            this.ddddd.forEach((kkkkk)=>{
           console.log( this.ssssss +' hi my name is '  + kkkkk);
            });
        }
    }
    bbb.speak();
