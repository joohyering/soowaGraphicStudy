

const imgElem_bubble1 = new Image();
const imgElem_bubble2 = new Image();
const imgElem_bubble3 = new Image();
const imgElem_bubble4 = new Image();
const imgElem_bubble5 = new Image();

var arr = new Array(1000);
var arrNum = 0;

if (color == "light") {
  imgElem_bubble1.src = './images/bubble1.png';
  imgElem_bubble2.src = './images/bubble2.png';
  imgElem_bubble3.src = './images/bubble3.png';
  imgElem_bubble4.src = './images/bubble4.png';
  imgElem_bubble5.src = './images/bubble5.png';
}


var canvas4 = document.getElementById('canvas4');
var canvas4_1 = document.getElementById('canvas4_1');
var canvas4_2 = document.getElementById('canvas4_2');
var canvas4_3 = document.getElementById('canvas4_3');
var canvas4_4 = document.getElementById('canvas4_4');

context4 = canvas4.getContext('2d');
context4_1 = canvas4_1.getContext('2d');
context4_2 = canvas4_2.getContext('2d');
context4_3 = canvas4_3.getContext('2d');
context4_4 = canvas4_4.getContext('2d');

canvas4.style.width="100%";
canvas4.style.height="100%";



  function bubble_1(drawX, drawY, randScale, aN) {
    context4.clearRect(drawX, drawY , randScale, randScale);
    context4.drawImage(imgElem_bubble1, drawX, drawY, randScale, randScale);
    randScale += 1;
    drawX -= 0.5;
    drawY -= 0.5;

    if (randScale >= arr[aN]) {
      context4.clearRect(drawX, drawY , randScale, randScale);
      return;
    }
    // console.log(drawY);

    requestAnimationFrame(bubble_1.bind(window, drawX, drawY, randScale, aN));
  }

  function bubble_2(drawX, drawY, randScale, aN) {
    context4_1.clearRect(drawX, drawY , randScale, randScale);
    context4_1.drawImage(imgElem_bubble2, drawX, drawY, randScale, randScale);
    randScale += 1;
    drawX -= 0.5;
    drawY -= 0.5;

    if (randScale >= arr[aN]) {
      context4_1.clearRect(drawX, drawY , randScale, randScale);
      return;
    }
    // console.log(drawY);

    requestAnimationFrame(bubble_2.bind(window, drawX, drawY, randScale, aN));
  }

  function bubble_3(drawX, drawY, randScale, aN) {
    context4_2.clearRect(drawX, drawY , randScale, randScale);
    context4_2.drawImage(imgElem_bubble3, drawX, drawY, randScale, randScale);
    randScale += 1;
    drawX -= 0.5;
    drawY -= 0.5;

    if (randScale >= arr[aN]) {
      context4_2.clearRect(drawX, drawY , randScale, randScale);
      return;
    }
    // console.log(drawY);

    requestAnimationFrame(bubble_3.bind(window, drawX, drawY, randScale, aN));
  }

  function bubble_4(drawX, drawY, randScale, aN) {
    context4_3.clearRect(drawX, drawY , randScale, randScale);
    context4_3.drawImage(imgElem_bubble4, drawX, drawY, randScale, randScale);
    randScale += 1;
    drawX -= 0.5;
    drawY -= 0.5;

    if (randScale >= arr[aN]) {
      context4_3.clearRect(drawX, drawY , randScale, randScale);
      return;
    }
    // console.log(drawY);

    requestAnimationFrame(bubble_4.bind(window, drawX, drawY, randScale, aN));
  }

  function bubble_5(drawX, drawY, randScale, aN) {
    context4_4.clearRect(drawX, drawY , randScale, randScale);
    context4_4.drawImage(imgElem_bubble5, drawX, drawY, randScale, randScale);
    randScale += 1;
    drawX -= 0.5;
    drawY -= 0.5;

    if (randScale >= arr[aN]) {
      context4_4.clearRect(drawX, drawY , randScale, randScale);
      return;
    }
    // console.log(drawY);

    requestAnimationFrame(bubble_5.bind(window, drawX, drawY, randScale, aN));
  }

  function drawInit() {
    x = Math.random() * 800;
    y = Math.random() * 600;
    s = (Math.random() * 100) + 50;
    lightNum = Math.random() * 10;

    if (arrNum <1000) {
      arr[arrNum] = s * 1.2;
      arrNum += 1;
    }
    else {
      arrNum = 0;
      arr[arrNum] = s * 1.2;
      arrNum += 1;
    }
    


    if (lightNum < 2) {
      bubble_1(x, y, s, arrNum);
    }
    else if (lightNum < 4) {
      bubble_2(x, y, s, arrNum);
    }
    else if (lightNum < 6) {
      bubble_3(x, y, s, arrNum);
    }
    else if (lightNum < 8) {
      bubble_4(x, y, s, arrNum);
    }
    else {
      bubble_5(x, y, s, arrNum);
    }
  }

  drawInit();

  setInterval(drawInit, 800);

  //크기를 저장해야 한다. 배열 돌아가면서 인덱싱 해서 넣도록 !! 1.3배까지 커지다가 사라지도록 하자




/*
1. 이미지가 나오는 속도가 너무 빠르다.
2. 샤샤샥이 되려면 점점 사라지게 해야하는데 어떻게 처리?
3. clearRect에서 투명도가 서서히 사라지도록 해서 샤샤샥 효과 주기
*/

/* clientY, clientX : 브라우저 기준
    layerX, layerY : 캔버스 기준 */