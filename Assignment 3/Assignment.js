
const randomNumber = Math.random();

if(randomNumber>0.7){
    alert('Greater than or equal to 0.7');
}else{
    alert('Not greater');
}

//Array
const number = [3,2,5,4,1,6];

//Forloop

for(let i=0; i<number.length; i++){
    console.log(number[i]);
}

//while loop
 let counter = 0;
 while(counter < number.length){
    console.log(number[counter]);
    counter++;
 }

 //for loop backward
 for(let i = number.length-1 ; i>=0 ; i--){
    console.log(number[i]);
 }

 //AND operation

const randomNumber2 = Math.random();

console.log(randomNumber);
console.log(randomNumber2);

if((randomNumber>0.7 && randomNumber2>0.7) || 
   randomNumber<=0.2 || 
   randomNumber2<=0.2)
{
    alert('Greater than 0.7 or Smaller than 0.2');
}
