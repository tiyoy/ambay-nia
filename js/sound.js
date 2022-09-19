var audio = new Audio();
// GANTI LAGU
audio.src = "sound/sound.mp3";
// LOOP
audio.loop = true;

function initAudioPlayer() {
  var playbtn = document.getElementById("playpausebtn");
  var playbtn2 = document.getElementById("playbtn");

  playbtn.addEventListener("click", playPause);

  function playPause() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  playbtn2.addEventListener("click", playPause);

  function playPause() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
}
window.addEventListener("load", initAudioPlayer);
