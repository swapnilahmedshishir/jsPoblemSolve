document.getElementById('btn').addEventListener('click',function(){
    let parentItem = document.getElementById('mylist');
    let childItem = document.createElement('li');
     let itemVlaue =  document.getElementById('item_add').value;
     
     
     if(itemVlaue == ""){
       let noData ="No item";
       childItem.innerHTML = noData;
     }else{
        childItem.innerHTML = itemVlaue;
        
     }
    
     parentItem.appendChild(childItem);
    
     document.getElementById('item_add').value = "" ;
});

document.getElementById('mylist').addEventListener('click',function(event){
    event.target.parentNode.removeChild(event.target);
});
