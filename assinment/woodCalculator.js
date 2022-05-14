function woodfunction(){
 let cheer = document.getElementById("cheer").value;
 let table = document.getElementById("table").value;
 let bed = document.getElementById('bed').value;
  
      let cheerWood = (cheer * 7);
      let tableWood = (table * 14);
      let bedWood = (bed * 40);

      let totalCubicFeetWood = (cheerWood + tableWood + bedWood)*0.00578704;
      totalCubicFeetWood = Math.round(totalCubicFeetWood);
      if(Number(totalCubicFeetWood) ){
            document.getElementById("result5").innerHTML = totalCubicFeetWood +" cubic Feet";
      }else{
            document.getElementById("result5").innerHTML = " Please ! give a any number";
      }
      

  
}