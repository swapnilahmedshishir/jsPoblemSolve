function bricksfunction(){
   let number  =  document.getElementById("brick").value;
       let brick;
       if(number >= 1 && number <= 15){
           brick = (number * 15)* 1000 ;
       }else if(number >= 16 && number <= 30 ){
           brick = (number * 12)* 1000;
       }else if (number >= 31 && number <= 45){
                brick = ( number * 10 ) * 1000;
       }else if ( number > 46 ){
           brick = " This bullding Bangladesh is not available";
       }else {
           brick = " Hava a any poblem Try to again";
       }
   document.getElementById("result6").innerHTML = brick;
}