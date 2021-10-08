
this.canvas3 = document.createElement('canvas');
document.body.appendChild(this.canvas);
this.ctx3 = this.canvas.getContext('2d');

const imgElem = new Image();
imgElem.src = './images/waiting_white.png';

imgElem.addEventListener('load', () => {


    context3.drawImage(imgElem, 100, 100);


});