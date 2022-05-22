document.getElementById('btn').addEventListener('click',function(){
    let parentItem = document.getElementById('mylist');
    let childItem = document.createElement('li');
     childItem.innerHTML = document.getElementById('item_add').value;
     parentItem.appendChild(childItem);
    
});

document.getElementById('mylist').addEventListener('click',function(event){
    event.target.parentNode.removeChild(event.target);
});