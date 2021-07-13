var x = document.querySelectorAll("button");
var i = 0;
for (i = 0; i < x.length; i++) {
  x[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;

    player(buttonInnerHtml);
    addAnm(buttonInnerHtml);
  });
}
document.addEventListener("keypress", function(event) {

  player(event.key);
})

function player(x) {
  switch (x) {
    case "w":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/kick-bass.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/snare.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-1.mp3");
      tom4.play();
      break;
    case "j":
      var tom5 = new Audio("sounds/tom-2.mp3");
      tom5.play();
      break;
    case "k":
      var tom6 = new Audio("sounds/tom-3.mp3");
      tom6.play();
      break;
    case "l":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;
    default:

  }

  function addAnm (currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");



  }









}
