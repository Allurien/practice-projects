$(document).ready(initializeApp);

function initializeApp() {
  attachClickHandlers();
  console.log("works!");
}

function attachClickHandlers(){
  $(".dirtHill").on("click", dogeClickHandler);
  $('.reset-button').click(resetGame);
  console.log("works!");
};

var pointCounter = 0;

function dogeClickHandler(){
  if ($(this).hasClass(".doge")){
    $(this).removeClass(".doge");
    pointCounter +=1;
    clickSound.play();
  };
  $('.score').text(pointCounter);
};





function resetGame(pointCounter){
  pointCounter = 0;
}

var sounds = {
  clickSound: new Audio(click.wav),
}
