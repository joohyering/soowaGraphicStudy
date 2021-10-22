const mainButton = new Image();
mainButton.src = './images/button.png';


var canvas4 = document.getElementById('canvas4'),
context4 = canvas4.getContext('2d');

mainButton.addEventListener('load', () => {

  context4.drawImage(mainButton,100,600,100,50);

});
