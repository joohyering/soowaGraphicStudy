
const mainFrame = new Image();
mainFrame.src = './images/new_frame.png';

// const mainButton = new Image();
// mainFrame.src = './images/button.png';


var canvas3 = document.getElementById('canvas3'),
context3 = canvas3.getContext('2d');

mainFrame.addEventListener('load', () => {

  context3.drawImage(mainFrame,0,0,2400,1400);

});
