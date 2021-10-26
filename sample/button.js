const mainButton = new Image();
const instaButton = new Image();
mainButton.src = './images/newButton.png';
instaButton.src = './images/newButton.png';


var canvas4 = document.getElementById('canvas4'),
context4 = canvas4.getContext('2d');



mainButton.addEventListener('load', () => {

  context4.drawImage(mainButton,50,480,80,30);
  context4.drawImage(mainButton,160,480,80,30);
  context4.drawImage(mainButton,270,480,80,30);
  context4.drawImage(mainButton,380,480,80,30);
  context4.drawImage(mainButton,490,480,80,30);

  context4.drawImage(instaButton,670,480,80,30);



});

//https://www.instagram.com/project.soowa/
