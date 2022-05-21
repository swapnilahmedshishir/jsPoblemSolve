let backgorund= document.getElementById('body_color_btn').addEventListener('click', function(){
    document.body.style.backgroundColor = "green";
});

document.getElementById('text-change_btn').addEventListener('click', function(){
    document.getElementById('text_change').innerHTML ="Yeah! I change text in JavaScript"; 
});

document.getElementById("text_color_change_btn").addEventListener('click',function(){
    let text = document.getElementById('text_color_change');
     
     text.style.backgroundColor = "green";
     text.style.padding = " 10px ";
     text.style.color = "white";
     text.style.textAlign = "center";
     text.style.fontSize = "30px ";
    
    
  
});