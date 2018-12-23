import logoImg from '../img/logo_2.png';

console.log("Hello Webpack!!");
document.write("Hello Webpack!!");

const img = document.createElement('img');
img.src = logoImg;

document.getElementById('logoContainer').appendChild(img);