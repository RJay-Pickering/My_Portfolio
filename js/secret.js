// secret image inside my portfolio 🤫
spooky = document.getElementById("spooky")
// dis is spooky 💀
spooky.addEventListener("click", () => {
  spooky.classList.toggle("dancing_skeleton")
  if (spooky.classList != "dancing_skeleton") {
    spooky.style.width = "10vh";
    spooky.style.height = "10vh";
  } else {
    spooky.style.width = null;
    spooky.style.height = null;
  }
})
// end of secret image

// an inactivity section for something to happen
var inactive_img = document.getElementById("Judge_Bones")
inactive_img.style.display = "none"

onInactive(65000, function () {
  inactive_img.style.display = null
  // add this when possible
  /* 
  var nowPlaying = null 
  var audio = new Audio(nowPlaying);
  audio.autoplay = true
  audio.loop = true
  counter++
  audio.play();
  */
});

function onInactive(ms, cb) {

  var wait = setTimeout(cb, ms);

  document.onmousemove = document.mousedown = document.mouseup = document.onkeydown = document.onkeyup = document.focus = function () {
      clearTimeout(wait);
      wait = setTimeout(cb, ms);
      inactive_img.style.display = "none"

  };
}
// end of inactivity