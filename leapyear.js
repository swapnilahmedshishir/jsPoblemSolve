

function leapYearFunction(){

    let Year = document.getElementById('number').value;
    console.log(Year);
    function leapYear(Year){
        if((Year % 400 == 0)&& (Year % 100 == 0)||(Year % 4 == 0)){
            document.getElementById('result').innerHTML = (Year + " is a leap Year"); 
        } else{
            document.getElementById('result').innerHTML = (Year + " is not a leap Year");
        }
    }
    leapYear(Year);


}
