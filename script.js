const resetButton = document.getElementById("reset");
const downButton = document.getElementById("down");
const plusButton = document.getElementById("plus");
const mainContent = document.getElementById("maincontent");

let count = 0;
resetButton.onclick = function() {
    count = 0;
    mainContent.textContent = count;
}
downButton.onclick = function(){
    count--;
    mainContent.textContent = count;
}
plusButton.onclick = function(){
    count++;
    mainContent.textContent =count;
}

document.getElementById("greetings").textContent = `Hello ${name}`;