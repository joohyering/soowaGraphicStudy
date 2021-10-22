
var canvas3 = document.getElementById('canvas3'),
context3 = canvas3.getContext('2d');

const imgElem = new Image();
imgElem.src = './waiting_white.png';

imgElem.addEventListener('load', () => {


    context3.drawImage(imgElem, 100, 100);


});