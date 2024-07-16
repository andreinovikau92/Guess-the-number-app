// const computer = Math.floor(Math.random()*100);
const computer = Math.floor(Math.random()*100);
console.log(computer);

function game(user, computer){
    if (user == computer) {
        console.log("You picked the correct number!");
    }else if (user > computer) {
        console.log("Too high.");
    }else if (user < computer) {
        console.log("Too low.");
    }
}

document.getElementById('myform').addEventListener('submit', function(e){
    const user = document.getElementById("userinput").value;
    
    game(user, computer);
    
    e.preventDefault();
});