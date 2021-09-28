

const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');

const imgElem = new Image();

var bool = confirm('?');

if (bool == 0) {
  imgElem.src = './images/logo_inf.png';
}

else {
  imgElem.src = './images/logo_inf_yellow.png';
}


// if (gesture_id <= 1) {
//   imgElem.src = './images/logo_inf.png';
// }

// else if (gesture_id <= 2) {
//   imgElem.src = './images/logo_inf_blue.png';
// }

// else {
//   imgElem.src = './images/logo_inf_yellow.png';
// }

imgElem.addEventListener('load', () => {


  /* 겹치는 내용이 많아서 함수 하나로 합쳐야 할 듯 !
    1. 랜덤한 수 생성해서 크기, 위치 정하고
    2. 일정 초마다 새로운 함수 호출하도록 --> 리턴 되는건 그냥 리턴 되는거대로 냅두고 몇초마다 한번 생성 이것만 정해주면 될 듯 --> 현재 시간 측정 이용 */


  //문제 : 변수가 매번 호출된다는 점 ..
  //drawInit이랑 draw로 나눌까?

  function draw(drawX, drawY, randScale) {
    context.clearRect(drawX, drawY, randScale, randScale);
    context.drawImage(imgElem, drawX, drawY, randScale, randScale);
    drawY -= 3;

    if (drawY <= -1 * randScale) {
      return;
    }
    console.log(drawY);

    requestAnimationFrame(draw.bind(window, drawX, drawY, randScale));
  }

  function drawInit() {
    x = Math.random() * 600;
    y = Math.random() * 400;
    s = (Math.random() * 100) + 50;
    draw (x, y, s);
  }

  drawInit();

  setInterval(drawInit, 400);



});


/*
1. 이미지가 나오는 속도가 너무 빠르다.
2. 샤샤샥이 되려면 점점 사라지게 해야하는데 어떻게 처리?
3. clearRect에서 투명도가 서서히 사라지도록 해서 샤샤샥 효과 주기
*/

/* clientY, clientX : 브라우저 기준
    layerX, layerY : 캔버스 기준 */