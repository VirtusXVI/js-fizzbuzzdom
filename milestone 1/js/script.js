let userOutput = "";


for(let i = 1; i <= 100 ; i++){
    // Controllo se il numero è divisibile per 3, 5, o entrambi
    if(i % 3 === 0 && i % 5 === 0){
        userOutput = "FizzBuzz";
    }else if(i % 5 === 0){
        userOutput = "Buzz";
    }else if(i % 3 === 0){
        userOutput = "Fizz";
    }else{
        userOutput = i;   
    };
    // Stampo nella console il risultato
    console.log(userOutput);
}; 