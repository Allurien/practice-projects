$(document).ready(initializeApp);

function initializeApp() {
  $('.reset-button').click(resetGame);
  console.log("works!");
}

function dogePoint(){
  var pointCounter = 0;
  $('.clickableDoge').click(function(){
    pointCounter++;
    clickSound.play();
    $('.score').text(pointCounter);
  })
  return pointCounter;
}




function resetGame(pointCounter){
  var pointCounter = 0;
}

var sounds = {
  clickSound: new Audio(click.wav),
}