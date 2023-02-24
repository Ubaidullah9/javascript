

class railwayform{
      submit(){
        alert( this.name +' your form is submitted the train number is '+ this.trainno );
      }
      cancels(){
        alert( this.name + ' Your form is canceled the train number is ' + this.trainno);
      }
      fill(fname , trainno){
        this.name = fname;
        this.trainno = trainno;
      }
}

let ubaid = new railwayform();
ubaid.fill('ubaid' , 12345);
let Adil = new railwayform();
let Adil1 = new railwayform();

Adil.fill('Adil' ,56789);
Adil1.fill('Adil' ,12345);



ubaid.submit()
Adil.submit()
Adil.cancels()
Adil1.submit()