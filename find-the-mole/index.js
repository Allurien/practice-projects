$(document).ready(initializeApp);

function initializeApp() {
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
    },2000)
}