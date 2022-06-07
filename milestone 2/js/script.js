let userContainer = document.querySelector(".container");
let userOutput = "";
let userList = document.querySelector("ul")

for(let i = 1; i <= 100 ; i++){

    // Cerco di capire se il numero è un divisibile per 3, 5, o entrambi
    if(i % 3 === 0 && i % 5 === 0){
        userOutput = "FizzBuzz";
    }else if(i % 5 === 0){
        userOutput = "Buzz";
    }else if(i % 3 === 0){
        userOutput = "Fizz";
    }else{
        userOutput = i;   
    };

    // Assegno alla variabile newPoint il codice che andrà inserito nell'HTML
    let newPoint = `<li>${userOutput}</li>`;
    
    // Inserisco nell'HTML il codice
    userList.innerHTML += newPoint;
};