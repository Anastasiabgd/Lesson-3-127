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

let result = sumPositive(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(result);

    
    
  
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

  let names = function(x){
    if(isloggedin == true){
        return ('firstname') + " " + ('lastname');
    }false;
  }
  let fullName = names('true');
  console.log(fullName);

//   ვერ გამოვიყვანე


 

// HW 4

function maxnum(...numbers) {
    let x = numbers[0];

    numbers.forEach(function(y){
        if(y > x) x = y;
    });
    return x
}
maxnum(1, 20, -3, 45, -91, 105);



// HW 5

// let array = ['html', 'css', 'python', 'javascript', 'bootstrap'];


