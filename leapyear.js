const Year = prompt("Enter a Year");
function leapYear(Year){
    if((Year % 400 == 0)&& (Year % 100 == 0)||(Year % 4 == 0)){
        console.log(Year + " is a leap Year"); 
    } else{
        console.log(Year + " is not a leap Year");
    }
}
leapYear(Year);