function mileFunction(){
   let feet =  document.getElementById("feet").value;
    function feetToMile(feet){
        let mile =feet/5280; 
        if(Number(mile) ){
            document.getElementById("result4").innerHTML = mile+"M" ;
      }else{
        document.getElementById("result4").innerHTML =  " Please ! give a any number"; 
      }
        
       
    }
    feetToMile(feet);
}


