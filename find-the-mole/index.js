$(document).ready(initializeApp);

function initializeApp() {
  attachClickHandlers();
  console.log("works!");
}

function attachClickHandlers(){
  $(".dirtHill").on("click", dogeClickHandler);
};

function dogeClickHandler(){
  if ($(this).hasClass(".dogeImg")){
    $(this).removeClass(".dogeImg");
    pointCounter +=1;
  };
};