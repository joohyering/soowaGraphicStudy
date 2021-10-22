


const imgElem = new Image();
imgElem.src = './images/waiting_source.png';



var canvas2 = document.getElementById('canvas2'),
context2 = canvas2.getContext('2d');
var cnt = 0;
var i = 0;
var drawX = 279;

// function sleep(ms) {
//   return new Promise((r) => setTimeout(r, ms));
// }

imgElem.addEventListener('load', () => {

//18.75
//13번? 12번?

for (i=0; i<12; i++) {
  context2.drawImage(imgElem, drawX, 331.25, 10, 10);
  drawX += 18.75;
}

});




/*
1. 이미지가 나오는 속도가 너무 빠르다.
2. 샤샤샥이 되려면 점점 사라지게 해야하는데 어떻게 처리?
3. clearRect에서 투명도가 서서히 사라지도록 해서 샤샤샥 효과 주기
*/

/* clientY, clientX : 브라우저 기준
    layerX, layerY : 캔버스 기준 */