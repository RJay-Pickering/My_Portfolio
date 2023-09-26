console.log("Hello, weirdo, it seems that you have accessed the elements of this project on your browser.\nDon't expect anything bizarre, this is just a console, and nothing more... unless😏")

// secret image inside my portfolio 🤫
spooky = document.getElementById("spooky")
// dis is spooky 💀
spooky.addEventListener("click", () => {
  console.log("Achievement Unlocked: Find hidden dancing bones")
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
var inactive_img = document.getElementById("Judge_Bones");
inactive_img.style.display = "none";
var nowPlaying = "sounds/halloweenBackgroundMusic.mp3" ;
var audio = new Audio(nowPlaying);

onInactive(65000, function () {
  console.log("Achievement Unlocked: You died while viewing this website...")
  inactive_img.style.display = null;
  audio.autoplay = true;
  audio.loop = true;
  audio.load();
  audio.play();
});

function onInactive(ms, cb) {

  var wait = setTimeout(cb, ms);

  document.onmousemove = document.mousedown = document.mouseup = document.onkeydown = document.onkeyup = document.focus = function () {
      clearTimeout(wait);
      wait = setTimeout(cb, ms);
      inactive_img.style.display = "none";
      audio.pause();
  };
}
// end of inactivity