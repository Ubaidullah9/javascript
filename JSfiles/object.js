
        const car={
            name: "BMW",
            model:{
                mod:303,
                engin:3500,
            },
            speed:120,
            break:{
                main:"break",
                mid:'excelater',
                last:'gair',
            },
            ubaid:['adil', 'ahmad' , 'hadi'],
            fawad: function(){
                return 'hi my name is ubaid how are you bro';
            },
        };
        console.log(`the name of the car is ${car.name} and the  name  of the engin is ${car.model.engin} ${car.ubaid} ${car.fawad()}`);


        const mobile={
             model:202,
            mobname:'samsung',
        };
        

        mobile.version = 'opera';
        mobile.hardisk = function(){
            return 'Adil Khan';
        }
            // delete mobile.model;


        const properties = Object.create(mobile);
        properties.ram = 3+'GB';
        properties.storage = 32+ "GB";

        properties.mobname = 'OPPO';
        console.log(`my mobie name is ${properties.mobname} and thay have ${properties.ram} Ram and ${properties.storage} Storage ${properties.mobname}`);
        console.log(Object.values(mobile));
        for(let job in properties){
            console.log(properties[job]);
            console.log(`${job} ${properties[job]}`)
        }
        console.log(mobile.version)
        console.log(mobile.hardisk());
   

        const {mobname: nameee , model: mmmmmmmm } = mobile;
        console.log(nameee);
        console.log(mmmmmmmm);

        const {mobname , model} =mobile;
        console.log(mobile);
        
        // console.log(`the nobile name is ${mobile.mobname}`);