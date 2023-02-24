let age =20;
if(age<=10){
    console.log('you can drink cocola');
}
else if(age<=15){
    console.log('you can drink pepse')
}
else if(age>=20){
    console.log('you can drink cold water ')
}else{
    console.log('you cannot drink water');
}


let cup = 30;
switch (cup) {
    case 10:
        console.log('the value of cup is 10') 
        break;

        case 20:
            console.log('the value of cup is 20')
            break;

    default:
        console.log('the value of cup is ot found');
        break;
}


let number = 14;
switch (number % 2) {
    case 0:
        console.log(`${number} is even number`);
        break;
        case 1:
            console.log(`${number} is odd number`);
            break;
    default:
        console.log('that is not a number')
        break;
}