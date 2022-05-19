function addEiFi(num){

    for(let i = 0 ; i <= num.length; i++){
        let element = num[i];
        if( element % 2 == 0){
            console.log(element, 'this even number');
        }else{
            console.log(element, 'this odd number');
        }
    }
}
const friend_age = [45,56,41,25,36,58,25,55,25,89];
addEiFi(friend_age);
const roll_number = [5,6,7,20,58,35,45,25,69,36,25,69,59,25,58,36,36,89];
addEiFi(roll_number);