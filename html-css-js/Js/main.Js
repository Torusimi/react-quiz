console.log("Js LOADED") 

const startBtn = document.getElementById("startBtn");

if(startBtn){
startBtn.addEventListener("click" , () => {
    alert("Let`s GO!")
})
}

const correctIndex =1;

const buttons = document .querySelectorAll (".option-btn");

const result = document.getElementById("result");

buttons.forEach((button) => {
    button.addEventListener("click",(event) =>  { 
        event.preventDefault();

        const selectedIndex = Number(button.dataset.index);

        if (selectedIndex ===correctIndex) {
            result.textContent =" 正解！";
            setTimeout(() => {
                window.location.href ="result.html";
            }, 800)
        } else{
            result.textContent ="不正解！";

        }
    });

});