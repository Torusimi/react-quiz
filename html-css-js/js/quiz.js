console.log("Js LOADED"); 



const correctIndex = 1;

const buttons = document.querySelectorAll(".option-btn");
const result = document.getElementById("result");

buttons.forEach((button) => {
    button.addEventListener("click",(event) =>  { 
        event.preventDefault();

        const selectedIndex = Number(button.dataset.index);

        if (selectedIndex === correctIndex) {
            result.textContent = "正解！";
            setTimeout(() => {
                window.location.href = "result.html";
            }, 800);

        } else{
            result.textContent = "不正解!";
            setTimeout(() => {
                result.textContent = "";
            }, 1000);
        }
    });
});


  const x = 10;
  const y = 5;
console.log(x + y);
console.log(x == y);
console.log(x >= 8 && y < 3);
console.log(x <= 6);

const dad = (a,b) =>{
    return a + b;
};
const abb = dad(3,4);
console.log(abb);

/*const score = 85;

if(score>=90) {
    console.log("優");
} else if (score >= 80) {
    console.log("普通");
} else {
    console.log("不可");
};

for (let i = 3; i <= 9; i++){
    console.log(i)
};*/

// const colorDark = '#333'
// if(new Date().getHours() >=0 ){
//     document.body.style.backgroundColor = colorDark;
// }
// if(user.setting.darkMode === true){
//     document.body.style.backgroundColor = colorDark;
// };

// const fetchData = (callback) => {
//     setTimeout(() =>{
//         const data = "データ";
//         callback(data);
//     },1000);
// }

// fetchData((data) =>{
//     console.log(data);
// });


// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout (() =>{
//             const data ="データ";
//             resolve(data);
//         }, 1000);
//     });
// };

// fetchData()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// const fetchData = async () => {
//     return new Promise ((resolve, reject) =>{
//         setTimeout(() =>{
//             const data = "データ";
//             resolve(data);
//         },1000);
//     });
// }

// const main = async () =>  {
//     try{
//         const data = await fetchData();
//         console.log(data);
//     } catch(error){
//         console.error(error);
//     }
// }
// main();

// const user = { name: "透"};
// user.name = "Mike";
// console.log(user.name);

const test = async () => {
    console.log("A");
    await new Promise (resolve => {
        setTimeout(resolve,1000);
    });
    
    console.log("B");
}

test();
console.log("C");

const fetchData = async (id) =>{
    return "ユーザーID:" +id;
};
const main = async() => {
    const result = await fetchData(10);
    console.log(result);
};

main();

const add = (a,b) => {
    return a*b;
};

console.log(add(5,8));