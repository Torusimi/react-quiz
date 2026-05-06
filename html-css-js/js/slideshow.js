
const list = [
  'images/01.jpg',
  'images/02.jpg',
  'images/03.jpg',
  'images/04.jpg',
  'images/05.jpg',
  'images/06.jpg',
  'images/07.jpg',
  'images/08.jpg',
  'images/09.jpg',
  'images/10.jpg',
];

const img = document.getElementById('main');
const [leftArrow,rightArrow] = document.getElementsByTagName('span');

let imgN = 0; 

const p = document.createElement('p');
p.style.color = 'gray';

const div = document.getElementById('photo'); /* 親要素の取得 */
div.insertBefore(p, img.nextElementSibling)/* img要素の下にP要素をついか */


const setImage = () =>{
    img.src = list[imgN];
    p.textContent = `${imgN + 1} / ${list.length}`
}


document.addEventListener('DOMContentLoaded', () =>{
    setImage();
})


rightArrow.addEventListener('click', () =>{
    imgN += 1;
    if(imgN >= list.length){
        imgN = list.length - 1; 
    }  
    setImage();
})


leftArrow.addEventListener('click', () => {
    imgN -= 1;
    if(imgN < 0){
        imgN = 0; 
    }
    setImage();
})

const button = document.createElement('button');
button.textContent = '自動再生';
div.appendChild(button);


let autoplay = false;  
button.addEventListener('click', () => {
    if(autoplay == false){   
        button.textContent = '停止する';
        autoplay = setInterval(() =>{
            imgN += 1;
            if(imgN >=list.length){
                imgN = 0;
            }
            setImage();
        },500)
    }else{
        clearInterval(autoplay); 
        autoplay = false;
        button.textContent = '自動再生'
    }
})
