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
  $(".center").on("click",dogeClickHandler);
  $('.reset-button').click(resetGame);
  console.log("works!");
};

var pointCounter = 0;
function dogeClickHandler(){
  console.log(this);
  if ($(this).hasClass("doge")){
    $(this).removeClass("doge");
    pointCounter +=1;
    //clickSound.play();
    console.log('CLICKED')
  };
  $('.score').text("score: " + pointCounter);
  console.log('outter click')
};

// function dogePoint(){
//   var pointCounter = 0;
//   $('.clickableDoge').click(function(){
//     pointCounter++;
//     clickSound.play();
//     $('.score').text(pointCounter);
//   })
//   return pointCounter;
// }


function resetGame(pointCounter){
  pointCounter = 0;
  $('.score').text("score: " + pointCounter);
}

var sounds = {
  clickSound: new Audio(click.wav),
}