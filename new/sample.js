document.write('hi');

const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');

//자바스크립트에서 이미지 객체를 만들어서 그 이미지 객체를 canvas에 불러오는 형식
const imgElem = new Image();
// === const imgElem = document.creatElement('img');
imgElem.src = './images/logo_inf.png';
imgElem.addEventListener('load', () => {
  context.drawImage(imgElem, 10, 10);
  context.drawImage(imgElem, 20, 20, 100, 100);
  context.drawImage(imgElem, 100, 100, 200, 200, 0, 0, 50, 50);
  //x,y 50,50만큼 떨어진 곳에
});