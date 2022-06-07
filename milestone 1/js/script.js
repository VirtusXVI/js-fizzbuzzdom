let userContainer = document.querySelector(".container");


for(let i = 1; i <= 1000 ; i++){
    
    let newBox = `<div class="box">${i}</div>`;

    userContainer.innerHTML += newBox;
};