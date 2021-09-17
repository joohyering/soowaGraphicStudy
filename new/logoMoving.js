// document.write('hi');
// width : 600, height : 400



const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');

//자바스크립트에서 이미지 객체를 만들어서 그 이미지 객체를 canvas에 불러오는 형식
const imgElem = new Image();
// === const imgElem = document.creatElement('img');

cnt = 0;

drawYFirst = Math.random() * 400;
drawYSecond = Math.random() * 400;
drawYThird= Math.random() * 400;

drawXFirst = Math.random() * 600;
drawXSecond = Math.random() * 600;
drawXThird = Math.random() * 600;

imgElem.src = './images/logo_inf.png';
imgElem.addEventListener('load', () => {

  // function clickHandler(e) {
  //   cnt += 1;
  //   context.drawImage(imgElem, e.layerX, e.layerY, 30, 30);
  //   if (cnt >50) {
  //     context.clearRect(0, 0, canvas.width, canvas.height);
  //     cnt = 0;
  //   }
  // }
  // canvas.addEventListener('mousemove', clickHandler);

  function drawFirst() {
    context.clearRect(drawXFirst, drawYFirst, 50, 50);
    context.drawImage(imgElem, drawXFirst, drawYFirst, 50, 50);
    drawYFirst -= 3

    if (drawYFirst >= canvas.height - 50) {
      return;
    }

    requestAnimationFrame(drawFirst);
  }

  

  function drawSecond() {
    context.clearRect(drawXSecond, drawYSecond, 50, 50);
    context.drawImage(imgElem, drawXSecond, drawYSecond, 50, 50);
    drawYSecond -= 3

    if (drawYSecond >= canvas.height - 50) {
      return;
    }

    requestAnimationFrame(drawSecond);
  }

  drawFirst();
  drawSecond();



});

/*
1. 이미지가 나오는 속도가 너무 빠르다.
2. 샤샤샥이 되려면 점점 사라지게 해야하는데 어떻게 처리?
3. clearRect에서 투명도가 서서히 사라지도록 해서 샤샤샥 효과 주기
*/

/* clientY, clientX : 브라우저 기준
    layerX, layerY : 캔버스 기준 */