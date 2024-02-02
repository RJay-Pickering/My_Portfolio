console.log("Hello, weirdo, it seems that you have accessed the elements of this project on your browser.\nDon't expect anything bizarre, this is just a console, and nothing more... unless😏")

// gets the current month
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const dates = new Date();
let current_date = months[dates.getMonth()];
console.log(current_date)
// end of getting month

season = document.getElementById("season")
season.src = "https://c.tenor.com/Xh8ndEFOCJcAAAAM/dancing-grooving.gif"
season.style.display = "none"

if (current_date == "October") {
  // secret image inside my portfolio 🤫
  season.style.display = null
  season.addEventListener("click", () => {
    console.log("Achievement Unlocked: Find hidden dancing bones")
    season.classList.toggle("season_gif")
    if (season.classList != "season_gif") {
      season.style.width = "10vh";
      season.style.height = "10vh";
    } else {
      season.style.width = null;
      season.style.height = null;
    }
  })
  // end of secret image

  // an inactivity section for something to happen
  var inactive_img = document.getElementById("inactive_id");
  inactive_img.src = "imageStorage/seasons/skeleton.png"
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
} else if (current_date == "November") {
  // an inactivity section for something to happen
  var inactive_img = document.getElementById("inactive_id");
  inactive_img.src = "imageStorage/seasons/charlie-brown-thanksgiving.jpeg"
  inactive_img.style.display = "none";
  inactive_img.style.width = "100%"
  var nowPlaying = "sounds/halloweenBackgroundMusic.mp3" ;
  var audio = new Audio(nowPlaying);

  onInactive(65000, function () {
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
} else {
  var inactive_img = document.getElementById("inactive_id");
  inactive_img.style.display = "none";
}