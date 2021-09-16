// document.write('hi');



const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');

//자바스크립트에서 이미지 객체를 만들어서 그 이미지 객체를 canvas에 불러오는 형식
const imgElem = new Image();
// === const imgElem = document.creatElement('img');
imgElem.src = './images/logo_inf.png';
imgElem.addEventListener('load', () => {

  function clickHandler(e) {
    context.drawImage(imgElem, e.layerX, e.layerY, 30, 30);
  }
  canvas.addEventListener('click', clickHandler);

});

/* clientY, clientX : 브라우저 기준
    layerX, layerY : 캔버스 기준 */