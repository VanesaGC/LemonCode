import '../sass/mystyles.scss';

const logoImg = require('../img/logo_2.png');

const saludo: string = "Hello Parcel con TypeScript!!";

console.log(saludo);
//document.write(saludo);

const title: HTMLHeadingElement = document.createElement('h4');
title.textContent = saludo;

const img: HTMLImageElement = document.createElement('img');
img.src = logoImg;

document.getElementById('logoContainer').appendChild(img);
document.getElementById('logoContainer').appendChild(title);