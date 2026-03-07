const button = document.querySelector(".start-btn");

button.addEventListener("click",(event) =>{
    event.preventDefault();

    document.getElementById("text").textContent = "Let's Go"

    setTimeout(() =>{
        window.location = "quiz.html";
    },800);
});