let numbers = [5, 10, 15, 20, 25, 55, 12, 17, 19, 35];

let sum = 0;
let count = 0;

for (let i = 0; i < numbers.length; i++) {

  if (numbers[i] % 2 === 1) {   
    sum = sum + numbers[i];
    count = count + 1;
  }

}

let average = sum / count;

console.log("odd numbers average is:",average);
