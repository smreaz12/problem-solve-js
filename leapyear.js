//Leap-Year//

function leapYear(year){
if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
    return year+" is a leap year";
   }

else{
    return year+" isn't a leap year"
   }   
}

const leapYear_input = leapYear(2068);
console.log(leapYear_input);