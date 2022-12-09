"use strict";

// HW 1



function sumPositive(...n){

    let sum = 0;

    for(let x = 0; x < n.length; x++){
        if(n[x] > 0){
            sum += n[x];
        }
    }
    return sum

}

let result1 = sumPositive(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(result1);

    
    
  
// HW 2

function numsum(...numbers) {

    let sum = 0;

   for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
   }
   return sum
   
}
let resultsum = numsum(10, 50, 6, 7, 8, 11, 6, 3, 9)
console.log(resultsum);




// HW 3

let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }

  function printNameUser(user){
    if(user.isloggedin){
        return user.firstname + " " + user.lastname;
    } 
        return false;
    
  }
  let resultFunction = printNameUser(user);
  console.log(resultFunction);

 


 

// HW 4

function getMax(...array) {
  // console.log(Math.max(...array));

  let maxValue = 0;
  for(let item of array){
    if(item > maxValue){
        maxValue = item;
    }
  }
  return maxValue;
  
}
let result = getMax(1, 20, -3, 45, -91, 105);

console.log(result);



// HW 5

let array = ['html', 'css', 'python', 'javascript', 'bootstrap'];

for(let item of array){
    if(item.length > 4 && item.includes('av')){
        console.log(item);
    }
}


array.forEach(function(element) {
    if (element.length > 4 && element.includes('av')) {
        console.log(element);
    }
})