
// if (gesture_id <= 1) {
//   imgElem.src = './images/logo_inf.png';
// }

// else if (gesture_id <= 2) {
//   imgElem.src = './images/logo_inf_blue.png';
// }

// else {
//   imgElem.src = './images/logo_inf_yellow.png';
// }


const imgElem_light6 = new Image();
const imgElem_light7 = new Image();
const imgElem_light8 = new Image();
const imgElem_light9 = new Image();
const imgElem_light10 = new Image();

var arrLight = new Array(1000);
var arrLightNum = 0;

if (color == "light") {
  imgElem_light6.src = './images/6.png';
  imgElem_light7.src = './images/7.png';
  imgElem_light8.src = './images/8.png';
  imgElem_light9.src = './images/9.png';
  imgElem_light10.src = './images/10.png';
}


var canvas2 = document.getElementById('canvas2');
var canvas2_1 = document.getElementById('canvas2_1');
var canvas2_2 = document.getElementById('canvas2_2');
var canvas2_3 = document.getElementById('canvas2_3');
var canvas2_4 = document.getElementById('canvas2_4');
var canvas2_5 = document.getElementById('canvas2_5');
var canvas2_6 = document.getElementById('canvas2_6');
var canvas2_7 = document.getElementById('canvas2_7');

context2 = canvas2.getContext('2d');
context2_1 = canvas2_1.getContext('2d');
context2_2 = canvas2_2.getContext('2d');
context2_3 = canvas2_3.getContext('2d');
context2_4 = canvas2_4.getContext('2d');
context2_5 = canvas2_5.getContext('2d');
context2_6 = canvas2_6.getContext('2d');
context2_7 = canvas2_7.getContext('2d');



  function spark_1(drawX, drawY, randScale, aN) {
    context2.clearRect(drawX, drawY , randScale, randScale);
    context2.drawImage(imgElem_light6, drawX, drawY, randScale, randScale);
    randScale += 3;
    drawX -= 1.5;
    drawY -= 1.5;

    if (randScale >= arrLight[aN]) {
      context2.clearRect(drawX, drawY , randScale, randScale);
      return;
    }
    // console.log(drawY);

    requestAnimationFrame(spark_1.bind(window, drawX, drawY, randScale, aN));
  }

  function spark_2(drawX, drawY, randScale, aN) {
    context2_1.clearRect(drawX, drawY , randScale, randScale);
    context2_1.drawImage(imgElem_light7, drawX, drawY, randScale, randScale);
    randScale += 3;
    drawX -= 1.5;
    drawY -= 1.5;

    if (randScale >= arrLight[aN]) {
      context2_1.clearRect(drawX, drawY , randScale, randScale);
      return;
    }
    // console.log(drawY);

    requestAnimationFrame(spark_2.bind(window, drawX, drawY, randScale, aN));
  }

  function spark_3(drawX, drawY, randScale, aN) {
    context2_2.clearRect(drawX, drawY , randScale, randScale);
    context2_2.drawImage(imgElem_light8, drawX, drawY, randScale, randScale);
    randScale += 3;
    drawX -= 1.5;
    drawY -= 1.5;

    if (randScale >= arrLight[aN]) {
      context2_2.clearRect(drawX, drawY , randScale, randScale);
      return;
    }
    // console.log(drawY);

    requestAnimationFrame(spark_3.bind(window, drawX, drawY, randScale, aN));
  }

  function spark_4(drawX, drawY, randScale, aN) {
    context2_3.clearRect(drawX, drawY , randScale, randScale);
    context2_3.drawImage(imgElem_light9, drawX, drawY, randScale, randScale);
    randScale += 3;
    drawX -= 1.5;
    drawY -= 1.5;

    if (randScale >= arrLight[aN]) {
      context2_3.clearRect(drawX, drawY , randScale, randScale);
      return;
    }
    // console.log(drawY);

    requestAnimationFrame(spark_4.bind(window, drawX, drawY, randScale, aN));
  }

  function spark_5(drawX, drawY, randScale, aN) {
    context2_4.clearRect(drawX, drawY , randScale, randScale);
    context2_4.drawImage(imgElem_light10, drawX, drawY, randScale, randScale);
    drawX -= 1.5;
    drawY -= 1.5;
    randScale += 3;

    if (randScale >= arrLight[aN]) {
      context2_4.clearRect(drawX, drawY , randScale, randScale);
      return;
    }
    // console.log(drawY);

    requestAnimationFrame(spark_5.bind(window, drawX, drawY, randScale, aN));
  }

  function drawInit() {
    x = Math.random() * 800;
    y = Math.random() * 600;
    s = (Math.random() * 150) + 20;
    lightNum = Math.random() * 10;

    if (arrLightNum <1000) {
      arrLight[arrLightNum] = s * 1.5;
      arrLightNum += 1;
    }
    else {
      arrLightNum = 0;
      arrLight[arrLightNum] = s * 1.5;
      arrLightNum += 1;
    }
    


    if (lightNum < 2) {
      spark_1(x, y, s, arrLightNum);
    }
    else if (lightNum < 4) {
      spark_2(x, y, s, arrLightNum);
    }
    else if (lightNum < 6) {
      spark_3(x, y, s, arrLightNum);
    }
    else if (lightNum < 8) {
      spark_4(x, y, s, arrLightNum);
    }
    else {
      spark_5(x, y, s, arrLightNum);
    }
  }

  drawInit();

  setInterval(drawInit, 200);

  //크기를 저장해야 한다. 배열 돌아가면서 인덱싱 해서 넣도록 !! 1.3배까지 커지다가 사라지도록 하자




/*
1. 이미지가 나오는 속도가 너무 빠르다.
2. 샤샤샥이 되려면 점점 사라지게 해야하는데 어떻게 처리?
3. clearRect에서 투명도가 서서히 사라지도록 해서 샤샤샥 효과 주기
*/

/* clientY, clientX : 브라우저 기준
    layerX, layerY : 캔버스 기준 */