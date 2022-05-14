
function arrayFunction(){
   let number = [52,20,63,14,60];
   
    let max = number[0];
    for( let i = 0 ; i< number.length; i++){
        let element = number[i];
        if(element > max){
            max = element ; 
        }
    }
    
    document.getElementById('result3').innerHTML= "Max Value : " +max;
}

