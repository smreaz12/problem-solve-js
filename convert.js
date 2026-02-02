//mile to kilometer//

function mileToKilo(mile){
    const kilo = mile*1.60934;
    return kilo;
}

const result = mileToKilo(5);
console.log(result);

//
function mileToKilo(mile){
    const kilo = mile * 1.60934;
    return kilo;
}

console.log(mileToKilo(5));





//Kilometer to mile//

function kiloToMile(kilo){
    const mile = kilo*0.6213711922;
    return mile;
}

const result2 = kiloToMile(10);
console.log(10,"kilometer =",result2,"miles.");
//
console.log(kiloToMile(10));


//professional way-----------
function kiloToMile(kilo){
    const mile = kilo*0.6213711922;
    return mile;
}

const kiloInput = 10;
const result3 = kiloToMile(kiloInput);
console.log(kiloInput,"kilometer =", result3,"miles.");






//Temperature Convert--celsius to fahrenheit//

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(30));


//Temperature Convert--Fahrenheit to celsius//

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

console.log(fahrenheitToCelsius(86));

