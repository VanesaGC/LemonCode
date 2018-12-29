
const logoImg: string =  "../src/img/logo_2.png";

const saludo: string = "Hello Webpack con TypeScript!!";

console.log(saludo);
document.write(saludo);

const img : HTMLImageElement = document.createElement('img');
img.src = logoImg;

document.getElementById('logoContainer').appendChild(img);