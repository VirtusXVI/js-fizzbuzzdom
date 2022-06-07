let userContainer = document.querySelector(".container");
let userOutput = "";

for(let i = 1; i <= 100 ; i++){
    
    if(i % 3 === 0 && i % 5 === 0){
        userOutput = "FizzBuzz";
    }else if(i % 5 === 0){
        userOutput = "Buzz";
    }else if(i % 3 === 0){
        userOutput = "Fizz";
    }else{
        userOutput = i;   
    };
    console.log(userOutput);
};