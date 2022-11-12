var vid = document.getElementById("video-background");
function cro() {
  vid.paused ? vid.play() : vid.pause();
}
window.Volumen = function (benadryl) {
  var puredrug = document.getElementById("video-background");
  puredrug.volume = benadryl / 100;
};
var video = document.querySelector("video-background");
window.addEventListener("touchstart", function videoStart() {
  video.play();
  this.removeEventListener("touchstart", videoStart);
});

// MDB NO ES GANGA, ES FAMILIA

