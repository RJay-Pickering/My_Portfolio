var limitedProjects = 0;
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const leftBtn = document.getElementById("left-btn")
const rightBtn = document.getElementById("right-btn")
two.classList.add("hiding-content")
three.classList.add("hiding-content")

function removeButton() {
   //remove button visibility if there is no project on row
   if (two.innerHTML === "") {
    leftBtn.classList.add("hiding-content")
    rightBtn.classList.add("hiding-content")
  } else {
    leftBtn.classList.remove("hiding-content")
    rightBtn.classList.remove("hiding-content")
  }
  // end of removing button visibility
}

function project_reset() {
  // this resets the projects section
  limitedProjects = 0
  one.innerHTML = ""
  two.innerHTML = ""
  three.innerHTML = ""
  // this resets the language section

  if (!two.classList.contains("hiding-content")) {
    one.classList.remove("hiding-content");
    two.classList.add("hiding-content");
    leftBtn.disabled = true;
    rightBtn.disabled = false;
  }
}

function button_handler() {
  // check which button to disable
  if (!one.classList.contains("hiding-content")) {
    leftBtn.disabled = true;
    rightBtn.disabled = false;
  } else if (!two.classList.contains("hiding-content")) {
    leftBtn.disabled = false;
    rightBtn.disabled = false;
  } else if (!three.classList.contains("hiding-content")) {
    leftBtn.disabled = false;
    rightBtn.disabled = true;
  } else {
    leftBtn.disabled = false;
    rightBtn.disabled = false;
  }
  // end of check
}

// check which button to disable and what to show
button_handler()
function projects_switcher(buttonPressed) {
  if (buttonPressed.target.id === "left-btn") {
    if (!one.classList.contains("hiding-content")) {
      one.classList.add("hiding-content");
      two.classList.remove("hiding-content");
      three.classList.add("hiding-content");
    } else if (!two.classList.contains("hiding-content")) {
      one.classList.remove("hiding-content");
      two.classList.add("hiding-content");
      three.classList.add("hiding-content");
    } else if (!three.classList.contains("hiding-content")) {
      one.classList.add("hiding-content");
      two.classList.remove("hiding-content");
      three.classList.add("hiding-content");
    }
  } else if (buttonPressed.target.id === "right-btn") {
    if (!one.classList.contains("hiding-content")) {
      one.classList.add("hiding-content");
      two.classList.remove("hiding-content");
      three.classList.add("hiding-content");
    } else if (!two.classList.contains("hiding-content")) {
      one.classList.add("hiding-content");
      two.classList.add("hiding-content");
      three.classList.remove("hiding-content");
    } else if (!three.classList.contains("hiding-content")) {
      one.classList.remove("hiding-content");
      two.classList.add("hiding-content");
      three.classList.add("hiding-content");
    }
  }
  button_handler()
}
// end of check

leftBtn.addEventListener("click", projects_switcher);
rightBtn.addEventListener("click", projects_switcher);

// this display the data given by the fetch information
function displayingData(project) {
  //the link that links every project to a repository
  const aLink = document.createElement("a");
  aLink.href = `${project.link}`;
  aLink.target = "_blank";
  aLink.classList.add("aLink");
  //end of links

  //description of the projects
  const desc = document.createElement("p");
  desc.innerText = project.description;
  desc.classList.add("card-description")
  desc.style.padding = "0 10px";
  //end of descriptions

  //creators of the project
  const creators = document.createElement("p");
  creators.innerText = `Created By: ${project.creator}`;
  creators.style.fontSize = "calc(0.4vh + 0.4vw)";
  creators.style.padding = "10px";
  creators.style.margin = 0;
  //end of creators

  //cards image
  const image = document.createElement("img");
  image.src = project.image_url;
  image.classList.add("apiImage");
  //end of image

  //title of the card
  const title = document.createElement("p");
  title.innerText = project.title;
  //end of title

  //coding language
  const lang = document.createElement("p");
  lang.innerText = `Skills: ${project.language}`
  lang.style.fontSize = "calc(0.4vh + 0.4vw)";
  lang.style.padding = "0 10px";
  lang.style.margin = "0 0 calc(0.3vh + 0.3vh) 0";
  //end of language

  //creating the project to have everything be put together
  const projectCard = document.createElement("div");
  projectCard.classList.add("proj-card");
  const flipCard = document.createElement("div");
  flipCard.classList.add("flip-card");
  const flipCardInner = document.createElement("div");
  flipCardInner.classList.add("flip-card-inner");
  const flipCardFront = document.createElement("div");
  flipCardFront.classList.add("flip-card-front");
  const flipCardBack = document.createElement("div");
  flipCardBack.classList.add("flip-card-back");
  const titleCard = document.createElement("div");
  titleCard.classList.add("title-card");
  // end of creating projects

  //adding everything together
  projectCard.appendChild(flipCard);
  flipCard.appendChild(flipCardInner);
  flipCardInner.appendChild(flipCardFront);
  flipCardInner.appendChild(flipCardBack);
  flipCardFront.appendChild(image);
  flipCardBack.appendChild(desc);
  flipCardBack.appendChild(creators);
  flipCardBack.appendChild(lang);
  titleCard.appendChild(title);
  aLink.appendChild(projectCard);
  aLink.appendChild(titleCard);
  // will output limited projects
  if (limitedProjects < 6) {
    one.appendChild(aLink);
  } else if (limitedProjects < 12) {
    two.appendChild(aLink);
  } else if (limitedProjects < 18) {
    three.appendChild(aLink);
  } else {
    console.log("Hey dumbass, you have reached the limit of projects to display");
    console.log("Add another column");
    alert("DeveloperError: check console for more information.")
  }
  limitedProjects++
  // end of limiting the projects
  //end of adding everything together
}
// end of displaying the fetch

//fetching json file
fetch(
  `projects.json`
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    // adding a description for default
    var cue = document.getElementById("cubone")
    var bones = document.createElement("p")
    bones.classList.add("projectDesc")
    bones.innerText = "This will show the projects by the dates added (recent to oldest)!"
    cue.appendChild(bones)
    // end of adding description

    Array.from(data).forEach(function (project) {
        displayingData(project)
    });
  });
// end of fetch

// this function deals with the filter in the projects section
function myFunction() {
  var projFilter = document.getElementById("mySelect");
  var filterType = projFilter.selectedIndex;

  //search by name
  if (projFilter.options[filterType].text == "Name") {
    project_reset()
    // adding a description for name
    var cue = document.getElementById("cubone")
    cue.replaceChildren()
    var bones = document.createElement("p")
    bones.classList.add("projectDesc")
    bones.innerText = "This will show the projects in alphabetic order!"
    cue.appendChild(bones)
    // end of adding description
    
    //fetching json file
    fetch(
      `projects.json`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const one = document.getElementById("one");
        one.replaceChildren()
        // sorting it in alphabetical order
        data.sort(function(a, b) {
            var textA = a.title.toUpperCase();
            var textB = b.title.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        // end of sorting alphabetically
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          displayingData(element)
        }
        removeButton()
      });
    // end of fetch
  } 
  //------------------------------------------------------
  //search by Python
  else if (projFilter.options[filterType].text == "Python") {
    project_reset()

    fetch(
      `projects.json`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        // adding a description for Language
        var cue = document.getElementById("cubone")
        cue.replaceChildren()
        var bones = document.createElement("p")
        bones.classList.add("projectDesc")
        bones.innerText = "This will show the projects made in python!"
        cue.appendChild(bones)
        // end of adding description
        
        // python
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.language.includes("Python")) {
            displayingData(element)
          }
        }
        // end of python
        removeButton()
      });
    // end of fetch
  } 
  //-----------------------------------------------------------------------------------
  //search by HTML/CSS
  else if (projFilter.options[filterType].text == "HTML/CSS") {
    project_reset()

    fetch(
      `projects.json`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        // adding a description for Language
        var cue = document.getElementById("cubone")
        cue.replaceChildren()
        var bones = document.createElement("p")
        bones.classList.add("projectDesc")
        bones.innerText = "This will show the projects made in HTML and CSS!"
        cue.appendChild(bones)
        // end of adding description

        // html and css
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.language.includes("HTML/CSS")) {
            displayingData(element)
          }
        }
        //end of html and css
        removeButton()
      });
    // end of fetch
  } 
  //-----------------------------------------------------------------------------------
  //search by Django
  else if (projFilter.options[filterType].text == "Django") {
    project_reset()

    fetch(
      `projects.json`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        // adding a description for Language
        var cue = document.getElementById("cubone")
        cue.replaceChildren()
        var bones = document.createElement("p")
        bones.classList.add("projectDesc")
        bones.innerText = "This will show the projects made in Django!"
        cue.appendChild(bones)
        // end of adding description

        // django
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.language.includes("Django")) {
            displayingData(element)
          }
        }
        // end of django
        removeButton()
      });
    // end of fetch
  } 
  //-----------------------------------------------------------------------------------
  //search by JavaScript
  else if (projFilter.options[filterType].text == "JavaScript") {
    project_reset()

    fetch(
      `projects.json`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        // adding a description for Language
        var cue = document.getElementById("cubone")
        cue.replaceChildren()
        var bones = document.createElement("p")
        bones.classList.add("projectDesc")
        bones.innerText = "This will show the projects made in JavaScript!"
        cue.appendChild(bones)
        // end of adding description

        // javascript
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.language.includes("JavaScript")) {
            displayingData(element)
          }
        }
        //end of javascript
        removeButton()
      });
    // end of fetch
  } 
  //-----------------------------------------------------------------------------------
  //search by Java
  else if (projFilter.options[filterType].text == "Java") {
    project_reset()

    fetch(
      `projects.json`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        // adding a description for Language
        var cue = document.getElementById("cubone")
        cue.replaceChildren()
        var bones = document.createElement("p")
        bones.classList.add("projectDesc")
        bones.innerText = "This will show the projects by their language!"
        cue.appendChild(bones)
        // end of adding description

        // java
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.language.includes("Java")) {
            if (!element.language.includes("JavaScript")) {
              displayingData(element)
            }
          }
        }
        //end of java
        removeButton()
      });
    // end of fetch
  } 
  //-----------------------------------------------------------------------------------
  //please update language when learning and uploading a new project with said language
  else if (projFilter.options[filterType].text == "Other") {
    project_reset()

    fetch(
      `projects.json`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        // adding a description for Language
        var cue = document.getElementById("cubone")
        cue.replaceChildren()
        var bones = document.createElement("p")
        bones.classList.add("projectDesc")
        bones.innerText = "This will show the projects by their language!"
        cue.appendChild(bones)
        // end of adding description

        // all the other languages that did not have enough content to display
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.language.includes("Ruby") || element.language.includes("SQL") || element.language.includes("GDScript") || element.language.includes("HLSL")) {
            displayingData(element)
          }
        }
        //end of all of the other languages
        removeButton()
      });
    // end of fetch
  } 
  //-----------------------------------------------------------------------------------
  //lists the projects by the order of my favorite
  else if (projFilter.options[filterType].text == "Favorite") {
    project_reset()

    fetch(
      `projects.json`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        // adding a description for favorite
        var cue = document.getElementById("cubone")
        cue.replaceChildren()
        var bones = document.createElement("p")
        bones.classList.add("projectDesc")
        bones.innerText = "This will show the best projects recommended by me (left to right)!"
        cue.appendChild(bones)
        // end of adding description

        const one = document.getElementById("one");
        one.replaceChildren()
        // favorite 1
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.favorite === 1) {
            displayingData(element)
          }
        }
        // end of favorite 1
        // favorite 2
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.favorite === 2) {
            displayingData(element)
          }
        }
        // end of favorite 2
        // favorite 3
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.favorite === 3) {
            displayingData(element)
          }
        }
        // end of favorite 3
        // favorite 4
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.favorite === 4) {
            displayingData(element)
          }
        }
        // end of favorite 4
        // favorite 5
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.favorite === 5) {
            displayingData(element)
          }
        }
        // end of favorite 5
        // favorite 6
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.favorite === 6) {
            displayingData(element)
          }
        }
        // end of favorite 6
        // favorite 7
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.favorite === 7) {
            displayingData(element)
          }
        }
        // end of favorite 7
        // favorite 8
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.favorite === 8) {
            displayingData(element)
          }
        }
        // end of favorite 8
        // favorite 9
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.favorite === 9) {
            displayingData(element)
          }
        }
        // end of favorite 9
        // favorite 10
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.favorite === 10) {
            displayingData(element)
          }
        }
        // end of favorite 10
        // favorite 11
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.favorite === 11) {
            displayingData(element)
          }
        }
        // end of favorite 11
        // favorite 12
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.favorite === 12) {
            displayingData(element)
          }
        }
        // end of favorite 12
        removeButton()
      });
    // end of fetch
  } 
  //---------------------------------------------------------------
  //default (newest to oldest)
  else {
    project_reset()
    //fetching json file
    fetch(
      `projects.json`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        // adding a description for default
        var cue = document.getElementById("cubone")
        cue.replaceChildren()
        var bones = document.createElement("p")
        bones.classList.add("projectDesc")
        bones.innerText = "This will show the projects by the dates added (recent to oldest)!"
        cue.appendChild(bones)
        // end of adding description

        const one = document.getElementById("one");
        one.replaceChildren()
        Array.from(data).forEach(function (project) {
            displayingData(project)
        });
        //remove button visibility if there is no project on row
        removeButton()
        // end of removing button visibility
      });
    // end of fetch
  }
  //-------------------------
}
// end of this function that filters the projects section