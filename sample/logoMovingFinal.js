
const imgElem = new Image();
const FWHeart = new Image();
const SWHeart = new Image();
const FPHeart = new Image();
const SPHeart = new Image();
const imgElem_light6 = new Image();
const imgElem_light7 = new Image();
const imgElem_light8 = new Image();
const imgElem_light9 = new Image();
const imgElem_light10 = new Image();

FWHeart.src = './images/fingerHeartWhite.png';
SWHeart.src = './images/fingerHeartWhiteFull.png';
FPHeart.src = './images/fingerHeart.png';
SPHeart.src = './images/fingerHeartFull.png';
imgElem_light6.src = './images/6.png';
imgElem_light7.src = './images/7.png';
imgElem_light8.src = './images/8.png';
imgElem_light9.src = './images/9.png';
imgElem_light10.src = './images/10.png';

var arr = new Array(1000);
var arrNum = 0;
var arrLight = new Array(1000);
var arrLightNum = 0;

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

function drawSparkInit() {
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
              context2.clearRect(x, y , s, s);
              return;
            }

            requestAnimationFrame(drawSPHeart.bind(window, x, y, s));
          }
          function drawSPHeart2(x, y, s) {
            context2_4.clearRect(x, y, s, s);
            context2_4.drawImage(SPHeart, x, y, s, s);
            y -= 3;

            if (y <= -1 * s) {
              context2_4.clearRect(x, y , s, s);
              return;
            }

            requestAnimationFrame(drawSPHeart2.bind(window, x, y, s));
          }

          function drawFWHeart(x, y, s) {
            context2_1.clearRect(x, y, s, s);
            context2_1.drawImage(SPHeart, x, y, s, s);
            y -= 3;

            if (y <= -1 * s) {
              context2_1.clearRect(x, y , s, s);
              return;
            }

            requestAnimationFrame(drawFWHeart.bind(window, x, y, s));
          }

          function drawFWHeart2(x, y, s) {
            context2_5.clearRect(x, y, s, s);
            context2_5.drawImage(FWHeart, x, y, s, s);
            y -= 3;

            if (y <= -1 * s) {
              context2_5.clearRect(x, y , s, s);
              return;
            }

            requestAnimationFrame(drawFWHeart2.bind(window, x, y, s));
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

          function drawFPHeart2(x, y, s) {
            context2_3.clearRect(x, y, s, s);
            context2_3.drawImage(FPHeart, x, y, s, s);
            y -= 3;

            if (y <= -1 * s) {
              context2_3.clearRect(x, y , s, s);
              return;
            }

            requestAnimationFrame(drawFPHeart2.bind(window, x, y, s));
          }

          function drawSWHeart(x, y, s) {
            context2_3.clearRect(x, y, s, s);
            context2_3.drawImage(SWHeart, x, y, s, s);
            y -= 3;

            if (y <= -1 * s) {
              context2_3.clearRect(x, y , s, s);
              return;
            }

            requestAnimationFrame(drawSWHeart.bind(window, x, y, s));
          }

          function drawSWHeart2(x, y, s) {
            context2_7.clearRect(x, y, s, s);
            context2_7.drawImage(SWHeart, x, y, s, s);
            y -= 3;

            if (y <= -1 * s) {
              context2_7.clearRect(x, y , s, s);
              return;
            }

            requestAnimationFrame(drawSWHeart2.bind(window, x, y, s));
          }

          function drawHeartInit() {
            x = Math.random() * 800;
            y = Math.random() * 600;
            s = (Math.random() * 100);
            sequenceNum = Math.random() * 800;
            
        
        
            if (sequenceNum < 100) {
              drawFWHeart(x,y,s);
            }
            else if (sequenceNum < 200) {
              drawFWHeart2(x,y,s);
            }
            else if (sequenceNum < 300) {
              drawFPHeart(x,y,s);
            }
            else if (sequenceNum < 400) {
              drawFPHeart2(x,y,s);
            }
            else if (sequenceNum < 500) {
              drawSPHeart(x,y,s);
            }
            else if (sequenceNum < 600) {
              drawSPHeart2(x,y,s);
            }
            else if (sequenceNum < 700) {
              drawSWHeart2(x,y,s);
            }
            else {
              drawSWHeart(x,y,s);
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
          //??????x
          
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
            console.log(arr[aN]);
            if (parseFloat(s) >= arr[aN]) {
              context2_1.clearRect(x, y , s, s);
              console.log(s);
              return;
            }
            requestAnimationFrame(drawFWHeart.bind(window, x, y, s, aN));
          }
          function drawFWHeart2(x, y, s, aN) {
            context2_4.clearRect(x, y , s, s);
            context2_4.drawImage(FWHeart, x, y, s, s);
            s += 1;
            x -= 0.5;
            y -= 0.5;
            console.log(arr[aN]);
            if (parseFloat(s) >= arr[aN]) {
              context2_4.clearRect(x, y , s, s);
              console.log(s);
              return;
            }
            requestAnimationFrame(drawFWHeart2.bind(window, x, y, s, aN));
          }
        

          function drawFPHeart(x, y, s, aN) {
            context2_2.clearRect(x, y , s, s);
            context2_2.drawImage(FPHeart, x, y, s, s);
            s += 1;
            x -= 0.5;
            y -= 0.5;
            console.log(arr[aN]);
            if (parseFloat(s) >= arr[aN]) {
              context2_2.clearRect(x, y , s, s);
              console.log(s);
              return;
            }
            requestAnimationFrame(drawFPHeart.bind(window, x, y, s, aN));
          }
          function drawFPHeart2(x, y, s, aN) {
            context2_5.clearRect(x, y , s, s);
            context2_5.drawImage(FPHeart, x, y, s, s);
            s += 1;
            x -= 0.5;
            y -= 0.5;
            console.log(arr[aN]);
            if (parseFloat(s) >= arr[aN]) {
              context2_5.clearRect(x, y , s, s);
              console.log(s);
              return;
            }
            requestAnimationFrame(drawFPHeart2.bind(window, x, y, s, aN));
          }

          function drawFPHeart3(x, y, s, aN) {
            context2_6.clearRect(x, y , s, s);
            context2_6.drawImage(FPHeart, x, y, s, s);
            s += 1;
            x -= 0.5;
            y -= 0.5;
            console.log(arr[aN]);
            if (parseFloat(s) >= arr[aN]) {
              context2_6.clearRect(x, y , s, s);
              console.log(s);
              return;
            }
            requestAnimationFrame(drawFPHeart3.bind(window, x, y, s, aN));
          }

          function drawSWHeart(x, y, s, aN) {
            context2_3.clearRect(x, y , s, s);
            context2_3.drawImage(SWHeart, x, y, s, s);
            s += 1;
            x -= 0.5;
            y -= 0.5;
            console.log(arr[aN]);
            if (parseFloat(s) >= arr[aN]) {
              context2_3.clearRect(x, y , s, s);
              console.log(s);
              return;
            }
            requestAnimationFrame(drawSWHeart.bind(window, x, y, s, aN));
          }
          function drawSWHeart2(x, y, s, aN) {
            context2_7.clearRect(x, y , s, s);
            context2_7.drawImage(SWHeart, x, y, s, s);
            s += 1;
            x -= 0.5;
            y -= 0.5;
            console.log(arr[aN]);
            if (parseFloat(s) >= arr[aN]) {
              context2_7.clearRect(x, y , s, s);
              console.log(s);
              return;
            }
            requestAnimationFrame(drawSWHeart2.bind(window, x, y, s, aN));
          }

          function drawHeartInit() {
            x = fingerLeftX + Math.random() * smallScale;
            y = fingerLeftY + Math.random() * smallScale;
            s = Math.random() * 60 ;
            console.log(s);
            sequenceNum = Math.random() * 600;
        
            if (arrNum <1000) {
              arr[arrNum] = s * 1.5;
              console.log(arr[arrNum]);
            }
            else {
              arrNum = 0;
              arr[arrNum] = s * 1.5;
              console.log(arr[arrNum]);
            }
            
        
        
            if (sequenceNum < 100) {
              drawFWHeart(x,y,s,arrNum);
            }
            else if (sequenceNum < 200) {
              drawFWHeart2(x,y,s,arrNum);
            }
            else if (sequenceNum < 300) {
              drawFPHeart(x,y,s,arrNum);
            }
            else if (sequenceNum < 350) {
              drawFPHeart2(x,y,s,arrNum);
            }
            else if (sequenceNum < 400) {
              drawFPHeart3(x,y,s,arrNum);
            }
            else if (sequenceNum < 500) {
              drawSWHeart2(x,y,s,arrNum);
            }
            else {
              drawSWHeart(x,y,s,arrNum);
            }
            arrNum += 1;
          }

          drawSHeart(fingerLeftX, fingerLeftY, smallScale);
          setInterval(drawHeartInit, 100);

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

          function drawSPHeart2(x, y, s) {
            context2_4.clearRect(x, y, s+2, s+2);
            context2_4.drawImage(SPHeart, x, y, s, s);
            s -= 2;
            x += 1;
            y -= 1;

            if ( s < 5 ) {
              context2_4.clearRect(x, y, s+2, s+2);
              return;
            }

            requestAnimationFrame(drawSPHeart2.bind(window, x, y, s));
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
          function drawFWHeart2(x, y, s) {
            context2_5.clearRect(x, y, s+2, s+2);
            context2_5.drawImage(FWHeart, x, y, s, s);
            s -= 2;
            x += 1;
            y -= 1;

            if ( s < 5 ) {
              context2_5.clearRect(x, y, s+2, s+2);
              return;
            }
            requestAnimationFrame(drawFWHeart2.bind(window, x, y, s));
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
          function drawFPHeart2(x, y, s) {
            context2_6.clearRect(x, y, s+2, s+2);
            context2_6.drawImage(FPHeart, x, y, s, s);
            s -= 2;
            x += 1;
            y -= 1;

            if ( s < 5 ) {
              context2_6.clearRect(x, y, s+2, s+2);
              return;
            }
            requestAnimationFrame(drawFPHeart2.bind(window, x, y, s));
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
          function drawSWHeart2(x, y, s) {
            context2_7.clearRect(x, y, s+2, s+2);
            context2_7.clearRect(x, y, s+2, s+2);
            s -= 2;
            x += 1;
            y -= 1;

            if ( s < 5 ) {
              context2_7.clearRect(x, y , s, s);
              return;
            }
            requestAnimationFrame(drawSWHeart2.bind(window, x, y, s));
          }

          function drawHeartInit() {
            x = fingerLeftX - 10 + Math.random()*20 ;
            y = fingerLeftY;
            s = (Math.random() * 80) ;
            sequenceNum = Math.random() * 800;
        

            if (sequenceNum < 100) {
              drawFWHeart(x,y,s);
            }
            else if (sequenceNum < 200) {
              drawFWHeart2(x,y,s);
            }
            else if (sequenceNum < 300) {
              drawFPHeart(x,y,s);
            }
            else if (sequenceNum < 400) {
              drawFPHeart2(x,y,s);
            }
            else if (sequenceNum < 500) {
              drawSPHeart(x,y,s);
            }
            else if (sequenceNum < 600) {
              drawSPHeart2(x,y,s);
            }
            else if (sequenceNum < 700) {
              drawSWHeart2(x,y,s);
            }
            else {
              drawSWHeart(x,y,s);
            }
          }


          setInterval(drawHeartInit, 100);



        });
      });
    });
  });
  
}

else if (color == "light") {
  imgElem_light6.addEventListener('load', () => {
    imgElem_light7.addEventListener('load', () => {
      imgElem_light8.addEventListener('load', () => {
        imgElem_light9.addEventListener('load', () => {
          imgElem_light10.addEventListener('load', () => {
            drawSparkInit();
            setInterval(drawSparkInit, 50);
          });
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
  function drawItem2(drawX, drawY, randScale) {
    context2_1.clearRect(drawX, drawY , randScale, randScale);
    context2_1.drawImage(imgElem, drawX, drawY, randScale, randScale);
    drawY -= 3;

    if (drawY <= -1 * randScale) {
      context2_1.clearRect(drawX, drawY , randScale, randScale);
      return;
    }
    // console.log(drawY);

    requestAnimationFrame(drawItem2.bind(window, drawX, drawY, randScale));
  }
  function drawItem3(drawX, drawY, randScale) {
    context2_2.clearRect(drawX, drawY , randScale, randScale);
    context2_2.drawImage(imgElem, drawX, drawY, randScale, randScale);
    drawY -= 3;

    if (drawY <= -1 * randScale) {
      context2_2.clearRect(drawX, drawY , randScale, randScale);
      return;
    }
    // console.log(drawY);

    requestAnimationFrame(drawItem3.bind(window, drawX, drawY, randScale));
  }
  function drawItem4(drawX, drawY, randScale) {
    context2_3.clearRect(drawX, drawY , randScale, randScale);
    context2_3.drawImage(imgElem, drawX, drawY, randScale, randScale);
    drawY -= 3;

    if (drawY <= -1 * randScale) {
      context2_3.clearRect(drawX, drawY , randScale, randScale);
      return;
    }
    // console.log(drawY);

    requestAnimationFrame(drawItem4.bind(window, drawX, drawY, randScale));
  }

  function drawInit() {
    x = Math.random() * 800;
    y = Math.random() * 600;
    s = (Math.random() * 100) + 30;
    sequenceNum = Math.random() * 400;

    if (sequenceNum < 100) {
      drawItem (x, y, s);
    }
    else if (sequenceNum < 200) {
      drawItem2 (x, y, s);
    }
    else if (sequenceNum < 300) {
      drawItem3 (x, y, s);
    }
    else {
      drawItem4 (x, y, s);
    }
  }

  drawInit();

  setInterval(drawInit, 400);

});




/*
1. ???????????? ????????? ????????? ?????? ?????????.
2. ???????????? ????????? ?????? ???????????? ??????????????? ????????? ???????
3. clearRect?????? ???????????? ????????? ??????????????? ?????? ????????? ?????? ??????
*/

/* clientY, clientX : ???????????? ??????
    layerX, layerY : ????????? ?????? */