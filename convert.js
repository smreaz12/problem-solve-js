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







//meter to feet//

function meterToFeet(meter){
    return meter*3.28084;
}

console.log(meterToFeet(50));


//feet to meter//

function feetToMeter(feet){
    return feet / 3.28084;
}

console.log(feetToMeter(50));








//Kg to Pound//

function kgToPound(kg){
    return kg*2.20462;
}

console.log(kgToPound(10));


//pound to kg//

function poundToKg(pound){
    return pound*0.453592;
}

console.log(poundToKg(10));








//Time Convert -- Minute to Second//

function minuteToSecond(Minute){
    return Minute*60;
}

console.log(minuteToSecond(10));



//Time Convert -- Second to minute//

function secondToMinute(second){
    return second/60;
}

console.log(secondToMinute(600));


//Time Convert -- second to Hour + Minute + Second//

function secondToHMS(totalSecond) {
  const hour = Math.floor(totalSecond / 3600);
  const remainingAfterHour = totalSecond % 3600;
  const minute = Math.floor(remainingAfterHour / 60);
  const second = remainingAfterHour % 60;

  return `${hour}h ${minute}m ${second}s`;
}

console.log(secondToHMS(3890)); 
