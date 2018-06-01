$(document).ready(initializeApp);

function initializeApp() {
  attachClickHandlers();
  console.log("works!");
  $('.start').click(startHandler);
  setInterval(randomDogePop,250);
}
function startHandler(){
  $('.start').addClass('hiddenModal');
  bgMusicPlay();
}
function randomDogePop(){
    //2 seconds.
    var randNum = Math.floor( Math.random()*16);

    var dirtHill = $('.dirt-hill');
    var centerDiv = $(dirtHill[randNum]).children()[1];
    var dogeDiv = $(centerDiv).addClass('doge');
    setTimeout(function () {
        dogeDiv.removeClass('doge');
    },1000);
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
    clickSound.play();
    console.log('CLICKED')
  };
  $('.score').text("score: " + pointCounter);
  console.log('outter click')
};
function resetGame(pointCounter){
  pointCounter = 0;
  $('.score').text("score: " + pointCounter);
}

var bgMusic = new Audio('audio/bgMusic.mp3');    
function bgMusicPlay(){
    bgMusic.play();
    bgMusic.loop=true;
    
    
}
var clickSound =  new Audio('audio/click.mp3');
bgMusic.volume = 0.5;
clickSound.volume = 1;