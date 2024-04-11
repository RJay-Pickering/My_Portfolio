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
  desc.style.fontSize = "2.5vh";
  desc.style.paddingTop = "15px"
  desc.style.paddingBottom = "15px"
  //end of descriptions

  //creators of the project
  const creators = document.createElement("p");
  creators.innerText = `Created By: ${project.creator}`;
  creators.style.fontSize = "2.5vh";
  creators.style.paddingBottom = "15px"
  //end of creators

  //cards image
  const image = document.createElement("img");
  image.src = project.image_url;
  image.classList.add("apiImage");
  //end of image

  //title of the card
  const title = document.createElement("p");
  title.innerText = project.title;
  title.style.fontSize = "4vh";
  title.style.paddingBottom = "15px"
  //end of title

  //coding language
  const lang = document.createElement("p");
  lang.innerText = `Skills: ${project.language}`
  //end of language

  //creating the project to have everything be put together
  const projects = document.createElement("div");
  projects.classList.add("card");
  // end of projects

  //adding everything together
  projects.appendChild(title);
  projects.appendChild(image);
  projects.appendChild(desc);
  projects.appendChild(creators);
  projects.appendChild(lang)
  aLink.appendChild(projects);
  const one = document.getElementById("one");
  one.appendChild(aLink);
  //end of adding everything together
}
// end of displaying the fetch

// this displays the language data
function displayLanguageData(location, project) {
  //the link that links every element to a repository
  const aLink = document.createElement("a");
  aLink.href = `${project.link}`;
  aLink.target = "_blank";
  aLink.classList.add("aLink");
  //end of links

  //description of the elements
  const desc = document.createElement("p");
  desc.innerText = project.description;
  desc.style.fontSize = "2.5vh";
  desc.style.paddingTop = "15px"
  desc.style.paddingBottom = "15px"
  //end of descriptions

  //creators of the element
  const creators = document.createElement("p");
  creators.innerText = `Created By: ${project.creator}`;
  creators.style.fontSize = "2.5vh";
  creators.style.paddingBottom = "15px"
  //end of creators

  //cards image
  const image = document.createElement("img");
  image.src = project.image_url;
  image.classList.add("apiImage");
  //end of image

  //title of the card
  const title = document.createElement("p");
  title.innerText = project.title;
  title.style.fontSize = "4vh";
  title.style.paddingBottom = "15px"
  //end of title

  //coding language
  const lang = document.createElement("p");
  lang.innerText = `Skills: ${project.language}`
  //end of language

  //creating the element to have everything be put together
  const elements = document.createElement("li");
  elements.classList.add("card");
  // end of elements

  //adding everything together
  elements.appendChild(title);
  elements.appendChild(image);
  elements.appendChild(desc);
  elements.appendChild(creators);
  elements.appendChild(lang)
  aLink.appendChild(elements);
  location.appendChild(aLink);
  //end of adding everything together
}
// end of display of language data

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

var languageBottom = document.getElementsByClassName("o-divider-under")[0]
languageBottom.classList.add("hiding-content")
var languageBottom2 = document.getElementsByClassName("o-divider-under")[1]
languageBottom2.classList.add("hiding-content")
var languageBottom3 = document.getElementsByClassName("o-divider-under")[2]
languageBottom3.classList.add("hiding-content")
var languageBottom4 = document.getElementsByClassName("o-divider-under")[3]
languageBottom4.classList.add("hiding-content")
var languageBottom5 = document.getElementsByClassName("o-divider-under")[4]
languageBottom5.classList.add("hiding-content")
var languageBottom6 = document.getElementsByClassName("o-divider-under")[5]
languageBottom6.classList.add("hiding-content")

var languageFunction = document.getElementsByClassName("o-divider2")[0]
languageFunction.classList.add("hiding-content")
var languageFunction2 = document.getElementsByClassName("o-divider3")[0]
languageFunction2.classList.add("hiding-content")
var languageFunction3 = document.getElementsByClassName("o-divider4")[0]
languageFunction3.classList.add("hiding-content")
var languageFunction4 = document.getElementsByClassName("o-divider5")[0]
languageFunction4.classList.add("hiding-content")
var languageFunction5 = document.getElementsByClassName("o-divider6")[0]
languageFunction5.classList.add("hiding-content")
var languageFunction6 = document.getElementsByClassName("o-divider7")[0]
languageFunction6.classList.add("hiding-content")

const hide2 = document.getElementById("two")
hide2.classList.add("hiding-content")
const hide3 = document.getElementById("three")
hide3.classList.add("hiding-content")
const hide4 = document.getElementById("four")
hide4.classList.add("hiding-content")
const hide5 = document.getElementById("five")
hide5.classList.add("hiding-content")
const hide6 = document.getElementById("six")
hide6.classList.add("hiding-content")

var tempPara = document.createElement("p")
tempPara.innerText = "HTML / CSS"
languageFunction2.appendChild(tempPara)

var tempPara = document.createElement("p")
tempPara.innerText = "Django"
languageFunction3.appendChild(tempPara)

var tempPara = document.createElement("p")
tempPara.innerText = "JavaScript"
languageFunction4.appendChild(tempPara)

var tempPara = document.createElement("p")
tempPara.innerText = "Java"
languageFunction5.appendChild(tempPara)

var tempPara = document.createElement("p")
tempPara.innerText = "Other Languages"
languageFunction6.appendChild(tempPara)

// this function deals with the filter in the projects section
function myFunction() {
  languageFunction.classList.add("hiding-content")
  languageFunction2.classList.add("hiding-content")
  languageFunction3.classList.add("hiding-content")
  languageFunction4.classList.add("hiding-content")
  languageFunction5.classList.add("hiding-content")
  languageFunction6.classList.add("hiding-content")

  languageBottom.classList.add("hiding-content")
  languageBottom2.classList.add("hiding-content")
  languageBottom3.classList.add("hiding-content")
  languageBottom4.classList.add("hiding-content")
  languageBottom5.classList.add("hiding-content")
  languageBottom6.classList.add("hiding-content")

  hide2.classList.add("hiding-content")
  hide3.classList.add("hiding-content")
  hide4.classList.add("hiding-content")
  hide5.classList.add("hiding-content")
  hide6.classList.add("hiding-content")

  var projFilter = document.getElementById("mySelect");
  var filterType = projFilter.selectedIndex;
  //search by name
  if (projFilter.options[filterType].text == "Name") {

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
      });
    // end of fetch
  } 
  //------------------------------------------------------
  //please update language when learning and uploading a new project with said language
  else if (projFilter.options[filterType].text == "Language") {
    languageFunction.classList.remove("hiding-content")
    languageFunction2.classList.remove("hiding-content")
    languageFunction3.classList.remove("hiding-content")
    languageFunction4.classList.remove("hiding-content")
    languageFunction5.classList.remove("hiding-content")
    languageFunction6.classList.remove("hiding-content")

    hide2.classList.remove("hiding-content")
    hide3.classList.remove("hiding-content")
    hide4.classList.remove("hiding-content")
    hide5.classList.remove("hiding-content")
    hide6.classList.remove("hiding-content")

    languageBottom.classList.remove("hiding-content")
    languageBottom2.classList.remove("hiding-content")
    languageBottom3.classList.remove("hiding-content")
    languageBottom4.classList.remove("hiding-content")
    languageBottom5.classList.remove("hiding-content")
    languageBottom6.classList.remove("hiding-content")

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
    
        const one = document.getElementById("one");

        // empties out the ul so we don`t have duplication when the user constantly opens the language filter
        one.replaceChildren()
        hide2.replaceChildren()
        hide3.replaceChildren()
        hide4.replaceChildren()
        hide5.replaceChildren()
        hide6.replaceChildren()
        // end of emptying out the ul
        
        // python
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.language.includes("Python")) {
            displayLanguageData(one, element)
          }
        }
        // end of python

        // divider
        // end of divider

        // html and css
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.language.includes("HTML/CSS")) {
            displayLanguageData(hide2, element)
          }
        }
        //end of html and css

        // divider
        // end of divider

        // django
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.language.includes("Django")) {
            displayLanguageData(hide3, element)
          }
        }
        //end of django

        // divider
        // end of divider

        // javascript
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.language.includes("JavaScript")) {
            displayLanguageData(hide4, element)
          }
        }
        //end of javascript

        // divider
        // end of divider

        // java
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.language.includes("Java")) {
            if (!element.language.includes("JavaScript")) {
              displayLanguageData(hide5, element)
            }
          }
        }
        //end of java

        // divider
        // end of divider

        // all the other languages that did not have enough content to display
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.language.includes("Ruby") || element.language.includes("SQL")) {
            displayLanguageData(hide6, element)
          }
        }
        //end of all of the other languages
      });
    // end of fetch
  } 
  //-----------------------------------------------------------------------------------
  //lists the projects by the order of my favorite
  else if (projFilter.options[filterType].text == "Favorite") {
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
      });
    // end of fetch
  } 
  //---------------------------------------------------------------
  //default (newest to oldest)
  else {
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
      });
    // end of fetch
  }
  //-------------------------
}
// end of this function that filters the projects section