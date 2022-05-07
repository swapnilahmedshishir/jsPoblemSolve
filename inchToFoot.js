// const inch = prompt("Enter a inch Value");
function footFunction(){

    let inch = document.getElementById('inch').value;
    console.log(inch);
    
    function convertInches(inch){
        let foot = inch / 12;
        document.getElementById('result2').innerHTML=(foot + "F");
    }
    convertInches(inch);


}

