
const imgElem = new Image();
const FWHeart = new Image();
const SWHeart = new Image();
const FPHeart = new Image();
const SPHeart = new Image();

FWHeart.src = './images/fingerHeartWhite.png';
SWHeart.src = './images/fingerHeartWhiteFull.png';
FPHeart.src = './images/fingerHeart.png';
SPHeart.src = './images/fingerHeartFull.png';

var arr = new Array(1000);
var arrNum = 0;

var canvas2 = document.getElementById('canvas2');
var canvas2_1 = document.getElementById('canvas2_1');
var canvas2_2 = document.getElementById('canvas2_2');
var canvas2_3 = document.getElementById('canvas2_3');
var canvas2_4 = document.getElementById('canvas2_4');

context2 = canvas2.getContext('2d');
context2_1 = canvas2_1.getContext('2d');
context2_2 = canvas2_2.getContext('2d');
context2_3 = canvas2_3.getContext('2d');
context2_4 = canvas2_4.getContext('2d');


var color = prompt("pink or yellow?");

if (color == "pink") {
  imgElem.src = './images/logo_inf.png';
}

else if (color == "yellow") {
  imgElem.src = './images/logo_inf_yellow.png';
}

else if (color == "heart") {
  FWHeart.addEventListener('load', () => {
    SWHeart.addEventListener('load', () => {
      FPHeart.addEventListener('load', () => {
        SPHeart.addEventListener('load', () => {

          function drawSPHeart(x, y, s) {
            context2.clearRect(x, y, s, s);
            context2.drawImage(FWHeart, x, y, s, s);
            y -= 3;

            if (y <= -1 * s) {
              context2_1.clearRect(x, y , s, s);
              return;
            }

            requestAnimationFrame(drawSPHeart.bind(window, x, y, s));
          }

          function drawFWHeart(x, y, s) {
            context2_1.clearRect(x, y, s, s);
            context2_1.drawImage(FWHeart, x, y, s, s);
            y -= 3;

            if (y <= -1 * s) {
              context2_1.clearRect(x, y , s, s);
              return;
            }

            requestAnimationFrame(drawFWHeart.bind(window, x, y, s));
          }
        

          function drawFPHeart(x, y, s) {
            context2_2.clearRect(x, y, s, s);
            context2_2.drawImage(FWHeart, x, y, s, s);
            y -= 3;

            if (y <= -1 * s) {
              context2_2.clearRect(x, y , s, s);
              return;
            }

            requestAnimationFrame(drawFPHeart.bind(window, x, y, s));
          }

          function drawSWHeart(x, y, s) {
            context2_3.clearRect(x, y, s, s);
            context2_3.drawImage(FWHeart, x, y, s, s);
            y -= 3;

            if (y <= -1 * s) {
              context2_3.clearRect(x, y , s, s);
              return;
            }

            requestAnimationFrame(drawSWHeart.bind(window, x, y, s));
          }

          function drawHeartInit() {
            x = Math.random() * 800;
            y = Math.random() * 600;
            s = (Math.random() * 100);
            sequenceNum = Math.random() * 800;
            
        
        
            if (sequenceNum < 200) {
              drawFWHeart(x,y,s,arrNum);
            }
            else if (sequenceNum < 400) {
              drawFPHeart(x,y,s,arrNum);
            }
            else if (sequenceNum < 400) {
              drawSPHeart(x,y,s,arrNum);
            }
            else {
              drawSWHeart(x,y,s,arrNum);
            }
          }

          setInterval(drawHeartInit, 400);



        });
      });
    });
  });
}


else if (color == "seart") {
  FWHeart.addEventListener('load', () => {
    SWHeart.addEventListener('load', () => {
      FPHeart.addEventListener('load', () => {
        SPHeart.addEventListener('load', () => {
          fingerLeftX = parseInt(prompt("left x"));
          fingerRightX = parseInt(prompt("right x"));
          fingerLeftY = parseInt(prompt("left y"));
          smallScale = fingerRightX - fingerLeftX;
          //갱신x

          function drawSHeart(x, y, scale) {
            context2.clearRect(x, y, scale, scale);
            context2.drawImage(SPHeart, x, y, scale, scale);
            scale += 1;
            x -= 0.5;
            y -= 0.5;

            if ( scale > smallScale * 1.5) {
              context2.clearRect(x, y, scale, scale);
              return;
            }

            requestAnimationFrame(drawSHeart.bind(window, x, y, scale));
          }

          function drawFWHeart(x, y, s, aN) {
            context2_1.clearRect(x, y , s, s);
            context2_1.drawImage(FWHeart, x, y, s, s);
            s += 1;
            x -= 0.5;
            y -= 0.5;
        
            if (s >= arr[aN]) {
              context2_1.clearRect(x, y , s, s);
              return;
            }
            requestAnimationFrame(drawFWHeart.bind(window, x, y, s, aN));
          }
        

          function drawFPHeart(x, y, s, aN) {
            context2_2.clearRect(x, y , s, s);
            context2_2.drawImage(FPHeart, x, y, s, s);
            s += 1;
            x -= 0.5;
            y -= 0.5;
        
            if (s >= arr[aN]) {
              context2_2.clearRect(x, y , s, s);
              return;
            }
            requestAnimationFrame(drawFPHeart.bind(window, x, y, s, aN));
          }

          function drawSWHeart(x, y, s, aN) {
            context2_3.clearRect(x, y , s, s);
            context2_3.drawImage(SWHeart, x, y, s, s);
            s += 1;
            x -= 0.5;
            y -= 0.5;
        
            if (s >= arr[aN]) {
              context2_3.clearRect(x, y , s, s);
              return;
            }
            requestAnimationFrame(drawSWHeart.bind(window, x, y, s, aN));
          }

          function drawHeartInit() {
            x = fingerLeftX + Math.random() * smallScale;
            y = fingerLeftY + Math.random() * smallScale;
            s = (Math.random() * 30) ;
            sequenceNum = Math.random() * 600;
        
            if (arrNum <1000) {
              arr[arrNum] = s * 1.1;
              arrNum += 1;
            }
            else {
              arrNum = 0;
              arr[arrNum] = s * 1.1;
              arrNum += 1;
            }
            
        
        
            if (sequenceNum < 200) {
              drawFWHeart(x,y,s,arrNum);
            }
            else if (sequenceNum < 400) {
              drawFPHeart(x,y,s,arrNum);
            }
            else {
              drawSWHeart(x,y,s,arrNum);
            }
          }

          drawSHeart(fingerLeftX, fingerLeftY, smallScale);
          setInterval(drawHeartInit, 400);



        });
      });
    });
  });
  
}

else if (color == "feart") {
  FWHeart.addEventListener('load', () => {
    SWHeart.addEventListener('load', () => {
      FPHeart.addEventListener('load', () => {
        SPHeart.addEventListener('load', () => {
          fingerLeftX = parseInt(prompt("left x"));
          // fingerRightX = parseInt(prompt("right x"));
          fingerLeftY = parseInt(prompt("left y"));
          // fingerRightY = parseInt(prompt("right y"));

          function drawSPHeart(x, y, s) {
            context2.clearRect(x, y, s+2, s+2);
            context2.drawImage(SPHeart, x, y, s, s);
            s -= 2;
            x += 1;
            y -= 1;

            if ( s < 5 ) {
              context2.clearRect(x, y, s+2, s+2);
              return;
            }

            requestAnimationFrame(drawSPHeart.bind(window, x, y, s));
          }

          function drawFWHeart(x, y, s) {
            context2_1.clearRect(x, y, s+2, s+2);
            context2_1.drawImage(FWHeart, x, y, s, s);
            s -= 2;
            x += 1;
            y -= 1;

            if ( s < 5 ) {
              context2_1.clearRect(x, y, s+2, s+2);
              return;
            }
            requestAnimationFrame(drawFWHeart.bind(window, x, y, s));
          }
        

          function drawFPHeart(x, y, s) {
            context2_2.clearRect(x, y, s+2, s+2);
            context2_2.drawImage(FPHeart, x, y, s, s);
            s -= 2;
            x += 1;
            y -= 1;

            if ( s < 5 ) {
              context2_2.clearRect(x, y, s+2, s+2);
              return;
            }
            requestAnimationFrame(drawFPHeart.bind(window, x, y, s));
          }

          function drawSWHeart(x, y, s) {
            context2_3.clearRect(x, y, s+2, s+2);
            context2_3.clearRect(x, y, s+2, s+2);
            s -= 2;
            x += 1;
            y -= 1;

            if ( s < 5 ) {
              context2_3.clearRect(x, y , s, s);
              return;
            }
            requestAnimationFrame(drawSWHeart.bind(window, x, y, s));
          }

          function drawHeartInit() {
            x = fingerLeftX - 10 + Math.random()*20 ;
            y = fingerLeftY;
            s = (Math.random() * 80) ;
            sequenceNum = Math.random() * 800;
        

            if (sequenceNum < 200) {
              drawFWHeart(x,y,s);
            }
            else if (sequenceNum < 400) {
              drawFPHeart(x,y,s);
            }
            else if (sequenceNum < 600) {
              drawSPHeart(x,y,s);
            }
            else {
              drawSWHeart(x,y,s);
            }
          }


          setInterval(drawHeartInit, 200);



        });
      });
    });
  });
  
}




imgElem.addEventListener('load', () => {

  function drawItem(drawX, drawY, randScale) {
    context2.clearRect(drawX, drawY , randScale, randScale);
    context2.drawImage(imgElem, drawX, drawY, randScale, randScale);
    drawY -= 3;

    if (drawY <= -1 * randScale) {
      context2.clearRect(drawX, drawY , randScale, randScale);
      return;
    }
    // console.log(drawY);

    requestAnimationFrame(drawItem.bind(window, drawX, drawY, randScale));
  }

  function drawInit() {
    x = Math.random() * 800;
    y = Math.random() * 600;
    s = (Math.random() * 40) + 30;
    drawItem (x, y, s);
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