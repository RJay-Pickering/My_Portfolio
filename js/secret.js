console.log("Hello, weirdo, it seems that you have accessed the elements of this project on your browser.\nDon't expect anything bizarre, this is just a console, and nothing more... unless😏")

// gets the current month
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const dates = new Date();
let current_date = months[dates.getMonth()];
let current_time = dates.getDate();
// end of getting month and day

season = document.getElementById("season")
season.src = "https://c.tenor.com/Xh8ndEFOCJcAAAAM/dancing-grooving.gif"
season.style.display = "none"

function inactive_secret_image(image_url, sound, message, size) {
  // an inactivity section for something to happen
  var inactive_img = document.getElementById("inactive_id");
  inactive_img.src = image_url
  inactive_img.style.display = "none";
  inactive_img.style.width = size
  var nowPlaying = sound;
  var audio = new Audio(nowPlaying);

  onInactive(25000, function () {
    console.log(message)
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
}

if (current_date == "January" && current_time == 1) {
  const achievementMessage = "Achievement Unlocked: You visited me on New Years day? Put down to potato chips and spend your time with your family, you weirdo!"
  inactive_secret_image("imageStorage/seasons/newyears.png", "none", achievementMessage, "initial")
} else if (current_date == "February" && current_time == 14) {
  const achievementMessage = "Achievement Unlocked: If your seeing this now, your obviously lonely! You weirdo!"
  inactive_secret_image("imageStorage/seasons/valentines.png", "none", achievementMessage, "10em")
} else if (current_date == "March" && current_time == 17) {
    const achievementMessage = "Achievement Unlocked: Its saint patty's day, what are you doing here? Go to the pub you bloody weirdo!"
    inactive_secret_image("imageStorage/seasons/stpattysday.png", "none", achievementMessage, "10em")
} else if (current_date == "July" && current_time <= 4) {
    const achievementMessage = "Achievement Unlocked: Its 4th of July, go shoot fireworks weirdo!"
    inactive_secret_image("imageStorage/seasons/fireworks.gif", "none", achievementMessage, "initial")
} else if (current_date == "October") {
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
  const achievementMessage = "Achievement Unlocked: You died while viewing this website... You dead weirdo..."
  inactive_secret_image("imageStorage/seasons/skeleton.png", "sounds/halloweenBackgroundMusic.mp3", achievementMessage, "initial")
} else if (current_date == "November" && current_time >= 24 && current_time <= 30) {
  const achievementMessage = "Achievement Unlocked: Happy Thanksgiving weirdo =)"
  inactive_secret_image("imageStorage/seasons/thanksgiving.jpeg", "none", achievementMessage, "90em")
} else if (current_date == "December") {
  const achievementMessage = "Achievement Unlocked: You saw santa delivering presents to you... Merry Christmas Weirdo =)"
  inactive_secret_image("imageStorage/seasons/santa.png", "none", achievementMessage, "initial")
} else {
  var inactive_img = document.getElementById("inactive_id");
  inactive_img.style.display = "none";
}