$(document).ready(initializeApp);

function initializeApp() {
  attachClickHandlers();
  console.log("works!");
  setInterval(randomDogePop,1000);
}
function randomDogePop(){
    //2 seconds.
    var randNum = Math.floor( Math.random()*16);

    var dirtHill = $('.dirt-hill');
    var centerDiv = $(dirtHill[randNum]).children()[1];
    var dogeDiv = $(centerDiv).addClass('doge');
    setTimeout(function () {
        dogeDiv.removeClass('doge');
    },2000);
}

function dogeMovement() {
  $("#div").toggleClass("hidden");
}
function attachClickHandlers(){
  $(".dirtHill").on("click", dogeClickHandler);
  $('.reset-button').click(resetGame);
  console.log("works!");
};
function dogeClickHandler(){
  if ($(this).hasClass(".dogeImg")){
    $(this).removeClass(".dogeImg");
    pointCounter +=1;
  };
};
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