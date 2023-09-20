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
          lang.innerText = `Language: ${project.language}`
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
      });
    });
// end of fetch

// getting the navagation buttons and div
var navDiv = document.getElementsByClassName("nav");
var aboutBtn = document.getElementsByClassName("aboutLink")[0];
var skillsBtn = document.getElementsByClassName("skillsLink")[0];
var projBtn = document.getElementsByClassName("projectsLink")[0];
// end of getting nav buttons and div

// getting content
var aboutContent = document.getElementsByClassName("about-me")[0];
var skillsContent = document.getElementsByClassName("my-skills")[0];
var projContent = document.getElementsByClassName("projects")[0];
// end of getting content

// making webpage start off by showing about me
skillsContent.classList.add("hiding-content")
projContent.classList.add("hiding-content")
// end of webpage start off

// about me functionality
aboutBtn.addEventListener("click", function() {
  // adding the selected feature to the about me button
  aboutBtn.setAttribute('id','selected');
  skillsBtn.removeAttribute('id','selected');
  projBtn.removeAttribute('id','selected');
  // end of adding the selected feature

  // removing skills and projects content from view
  aboutContent.classList.remove("hiding-content")
  skillsContent.classList.add("hiding-content")
  projContent.classList.add("hiding-content")
  // end of removing skills and projects content
});
// end of about me functionality

// skills functionality
skillsBtn.addEventListener("click", function() {
  // adding the selected feature to the skills button
  skillsBtn.setAttribute('id','selected');
  aboutBtn.removeAttribute('id','selected');
  projBtn.removeAttribute('id','selected');
  // end of adding the selected feature

  // removing about me and projects content from view
  skillsContent.classList.remove("hiding-content")
  aboutContent.classList.add("hiding-content")
  projContent.classList.add("hiding-content")
  // end of removing about me and projects content
});
// end of skills functionality

// projects functionality
projBtn.addEventListener("click", function() {
  // adding the selected feature to the projects button
  projBtn.setAttribute('id','selected');
  aboutBtn.removeAttribute('id','selected');
  skillsBtn.removeAttribute('id','selected');
  // end of adding the selected feature

  // removing about me and skills content from view
  projContent.classList.remove("hiding-content")
  aboutContent.classList.add("hiding-content")
  skillsContent.classList.add("hiding-content")
  // end of removing about me and skills content
});
// end of projects functionality

var languageFuction = document.getElementsByClassName("o-divider2")[0]
languageFuction.classList.add("hiding-content")

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
var languageBottom7 = document.getElementsByClassName("o-divider-under")[6]
languageBottom7.classList.add("hiding-content")

var languageFuction2 = document.getElementsByClassName("o-divider3")[0]
languageFuction2.classList.add("hiding-content")
var languageFuction3 = document.getElementsByClassName("o-divider4")[0]
languageFuction3.classList.add("hiding-content")
var languageFuction4 = document.getElementsByClassName("o-divider5")[0]
languageFuction4.classList.add("hiding-content")
var languageFuction5 = document.getElementsByClassName("o-divider6")[0]
languageFuction5.classList.add("hiding-content")
// var languageFuction6 = document.getElementsByClassName("o-divider7")[0]
// languageFuction6.classList.add("hiding-content")
var languageFuction7 = document.getElementsByClassName("o-divider8")[0]
languageFuction7.classList.add("hiding-content")
// var languageFuction8 = document.getElementsByClassName("o-divider9")[0]
// languageFuction8.classList.add("hiding-content")
var languageFuction9 = document.getElementsByClassName("o-divider10")[0]
languageFuction9.classList.add("hiding-content")
// var languageFuction10 = document.getElementsByClassName("o-divider11")[0]
// languageFuction10.classList.add("hiding-content")
// var languageFuction11 = document.getElementsByClassName("o-divider12")[0]
// languageFuction11.classList.add("hiding-content")
const hide2 = document.getElementById("two")
hide2.classList.add("hiding-content")
const hide3 = document.getElementById("three")
hide3.classList.add("hiding-content")
const hide4 = document.getElementById("four")
hide4.classList.add("hiding-content")
const hide5 = document.getElementById("five")
hide5.classList.add("hiding-content")
const hide7 = document.getElementById("seven")
hide7.classList.add("hiding-content")
// const hide8 = document.getElementById("eight")
// hide8.classList.add("hiding-content")
const hide9 = document.getElementById("nine")
hide9.classList.add("hiding-content")

var tempPara = document.createElement("p")
tempPara.innerText = "HTML / CSS"
languageFuction2.appendChild(tempPara)

var tempPara = document.createElement("p")
tempPara.innerText = "Django"
languageFuction3.appendChild(tempPara)

var tempPara = document.createElement("p")
tempPara.innerText = "JavaScript"
languageFuction4.appendChild(tempPara)

var tempPara = document.createElement("p")
tempPara.innerText = "Java"
languageFuction5.appendChild(tempPara)

var tempPara = document.createElement("p")
tempPara.innerText = "SQL"
languageFuction7.appendChild(tempPara)

var tempPara = document.createElement("p")
tempPara.innerText = "Ruby"
languageFuction9.appendChild(tempPara)

// this function deals with the filter in the projects section
function myFunction() {
  languageFuction.classList.add("hiding-content")
  languageFuction2.classList.add("hiding-content")
  languageFuction3.classList.add("hiding-content")
  languageFuction4.classList.add("hiding-content")
  languageFuction5.classList.add("hiding-content")
  languageFuction7.classList.add("hiding-content")
  languageBottom.classList.add("hiding-content")
  languageBottom2.classList.add("hiding-content")
  languageBottom3.classList.add("hiding-content")
  languageBottom4.classList.add("hiding-content")
  languageBottom5.classList.add("hiding-content")
  languageBottom6.classList.add("hiding-content")
  languageBottom7.classList.add("hiding-content")
  languageFuction9.classList.add("hiding-content")
  hide2.classList.add("hiding-content")
  hide3.classList.add("hiding-content")
  hide4.classList.add("hiding-content")
  hide5.classList.add("hiding-content")
  hide7.classList.add("hiding-content")
  hide9.classList.add("hiding-content")
  var projFilter = document.getElementById("mySelect");
  var filterType = projFilter.selectedIndex;
  //search by name
  if (projFilter.options[filterType].text == "Name") {
    console.log("name 1.0");

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
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "A") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "B") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "C") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "D") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "E") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "F") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "G") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "H") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "I") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "J") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "K") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "L") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "M") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "N") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "O") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "P") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "Q") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "R") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "S") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "T") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "U") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "V") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "W") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "X") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "Y") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.title[0] == "Z") {
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links

            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators

            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image

            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title

            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language

            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements

            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
      });
    // end of fetch
  } 
  //------------------------------------------------------
  //please update language when learning and uploading a new project with said language
  else if (projFilter.options[filterType].text == "Language") {
    languageFuction.classList.remove("hiding-content")
    languageFuction2.classList.remove("hiding-content")
    languageFuction3.classList.remove("hiding-content")
    languageFuction4.classList.remove("hiding-content")
    languageFuction5.classList.remove("hiding-content")
    // languageFuction6.classList.remove("hiding-content")
    languageFuction7.classList.remove("hiding-content")
    // languageFuction8.classList.remove("hiding-content")
    languageFuction9.classList.remove("hiding-content")
    // languageFuction10.classList.remove("hiding-content")
    // languageFuction11.classList.remove("hiding-content")
    hide2.classList.remove("hiding-content")
    hide3.classList.remove("hiding-content")
    hide4.classList.remove("hiding-content")
    hide5.classList.remove("hiding-content")
    hide7.classList.remove("hiding-content")
    hide9.classList.remove("hiding-content")
    languageBottom.classList.remove("hiding-content")
    languageBottom2.classList.remove("hiding-content")
    languageBottom3.classList.remove("hiding-content")
    languageBottom4.classList.remove("hiding-content")
    languageBottom5.classList.remove("hiding-content")
    languageBottom6.classList.remove("hiding-content")
    languageBottom7.classList.remove("hiding-content")

    console.log("language 2.0");
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
        const mainProj = document.getElementById("projectsId")

        one.replaceChildren()
        
        // python
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.language.includes("Python")) {
            //the link that links every element to a repository
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links
    
            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators
    
            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image
    
            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title
    
            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
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
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        // end of python

        // divider
        console.log(mainProj)
        // end of divider

        // html and css
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.language.includes("HTML, CSS")) {
            //the link that links every element to a repository
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links
    
            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators
    
            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image
    
            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title
    
            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
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
            hide2.appendChild(aLink)
            //end of adding everything together
            
          }
        }
        //end of html and css

        // divider
        console.log(mainProj)
        // end of divider

        // django
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.language.includes("Django")) {
            //the link that links every element to a repository
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links
    
            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators
    
            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image
    
            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title
    
            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
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
            hide3.appendChild(aLink)
            //end of adding everything together
          }
        }
        //end of django

        // divider
        console.log(mainProj)
        // end of divider

        // javascript
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.language.includes("JavaScript")) {
            //the link that links every element to a repository
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links
    
            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators
    
            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image
    
            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title
    
            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
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
            aLink.appendChild(elements)
            hide4.appendChild(aLink)
            //end of adding everything together
          }
        }
        //end of javascript

        // divider
        console.log(mainProj)
        // end of divider

        // java
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.language.includes("Java")) {
            if (!element.language.includes("JavaScript")) {
              //the link that links every element to a repository
              const aLink = document.createElement("a");
              aLink.href = `${element.link}`;
              aLink.target = "_blank";
              aLink.classList.add("aLink");
              //end of links
      
              //description of the elements
              const desc = document.createElement("p");
              desc.innerText = element.description;
              desc.style.fontSize = "2.5vh";
              desc.style.paddingTop = "15px"
              desc.style.paddingBottom = "15px"
              //end of descriptions
      
              //creators of the element
              const creators = document.createElement("p");
              creators.innerText = `Created By: ${element.creator}`;
              creators.style.fontSize = "2.5vh";
              creators.style.paddingBottom = "15px"
              //end of creators
      
              //cards image
              const image = document.createElement("img");
              image.src = element.image_url;
              image.classList.add("apiImage");
              //end of image
      
              //title of the card
              const title = document.createElement("p");
              title.innerText = element.title;
              title.style.fontSize = "4vh";
              title.style.paddingBottom = "15px"
              //end of title
      
              //coding language
              const lang = document.createElement("p");
              lang.innerText = `Language: ${element.language}`
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
              hide5.appendChild(aLink)
              //end of adding everything together
            }
          }
        }
        //end of java

        // uncomment when you add a project

        // // divider
        // var tempPara = document.createElement("p")
        // tempPara.innerText = "Spring"
        // languageFuction6.appendChild(tempPara)
        // console.log(mainProj)
        // // end of divider

        // end comment

        // Spring
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.language.includes("Spring")) {
            //the link that links every element to a repository
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links
    
            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators
    
            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image
    
            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title
    
            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
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
            six.appendChild(aLink);
            six.classList.add("project-content")
            six.setAttribute('id','six');
            mainProj.appendChild(six)
            //end of adding everything together
          }
        }
        //end of Spring

        // divider
        console.log(mainProj)
        // end of divider

        // sql
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.language.includes("SQL")) {
            //the link that links every element to a repository
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links
    
            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators
    
            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image
    
            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title
    
            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
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
            hide7.appendChild(aLink)
            //end of adding everything together
          }
        }
        //end of sql

        // uncomment when you add a project

        // // divider
        // var tempPara = document.createElement("p")
        // tempPara.innerText = "C++"
        // languageFuction8.appendChild(tempPara)
        // console.log(mainProj)
        // // end of divider

        // end comment

        // C++
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.language.includes("C++")) {
            //the link that links every element to a repository
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links
    
            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators
    
            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image
    
            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title
    
            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language
    
            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements
    
            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            eight.appendChild(aLink);
            eight.classList.add("project-content")
            eight.setAttribute('id','eight');
            mainProj.appendChild(eight)
            //end of adding everything together
          }
        }
        //end of C++

        // divider
        console.log(mainProj)
        // end of divider

        // Ruby
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.language.includes("Ruby")) {
            //the link that links every element to a repository
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links
    
            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators
    
            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image
    
            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title
    
            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
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
            hide9.appendChild(aLink)
            //end of adding everything together
          }
        }
        //end of Ruby
      });
    // end of fetch
  } 
  //-----------------------------------------------------------------------------------
  //lists the top 10 favorite projects
  else if (projFilter.options[filterType].text == "Favorite") {
    console.log("favorites 3.0");
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
        bones.innerText = "This will show the top ten best projects recommended by me (left to right)!"
        cue.appendChild(bones)
        // end of adding description

        const one = document.getElementById("one");
        one.replaceChildren()
        // favorite 1
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.favorite === 1) {
            console.log("hi")
            //the link that links every element to a repository
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links
    
            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators
    
            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image
    
            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title
    
            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language
    
            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements
    
            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        // end of favorite 1
        // favorite 2
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.favorite === 2) {
            console.log("hi")
            //the link that links every element to a repository
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links
    
            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators
    
            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image
    
            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title
    
            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language
    
            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements
    
            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        // end of favorite 2
        // favorite 3
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.favorite === 3) {
            console.log("hi")
            //the link that links every element to a repository
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links
    
            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators
    
            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image
    
            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title
    
            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language
    
            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements
    
            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        // end of favorite 3
        // favorite 4
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.favorite === 4) {
            console.log("hi")
            //the link that links every element to a repository
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links
    
            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators
    
            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image
    
            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title
    
            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language
    
            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements
    
            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        // end of favorite 4
        // favorite 5
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.favorite === 5) {
            console.log("hi")
            //the link that links every element to a repository
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links
    
            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators
    
            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image
    
            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title
    
            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language
    
            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements
    
            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        // end of favorite 5
        // favorite 6
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.favorite === 6) {
            console.log("hi")
            //the link that links every element to a repository
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links
    
            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators
    
            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image
    
            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title
    
            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language
    
            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements
    
            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        // end of favorite 6
        // favorite 7
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.favorite === 7) {
            console.log("hi")
            //the link that links every element to a repository
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links
    
            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators
    
            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image
    
            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title
    
            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language
    
            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements
    
            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        // end of favorite 7
        // favorite 8
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.favorite === 8) {
            console.log("hi")
            //the link that links every element to a repository
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links
    
            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators
    
            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image
    
            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title
    
            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language
    
            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements
    
            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        // end of favorite 8
        // favorite 9
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.favorite === 9) {
            console.log("hi")
            //the link that links every element to a repository
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links
    
            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators
    
            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image
    
            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title
    
            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language
    
            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements
    
            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        // end of favorite 9
        // favorite 10
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          if (element.favorite === 10) {
            console.log("hi")
            //the link that links every element to a repository
            const aLink = document.createElement("a");
            aLink.href = `${element.link}`;
            aLink.target = "_blank";
            aLink.classList.add("aLink");
            //end of links
    
            //description of the elements
            const desc = document.createElement("p");
            desc.innerText = element.description;
            desc.style.fontSize = "2.5vh";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "2.5vh";
            creators.style.paddingBottom = "15px"
            //end of creators
    
            //cards image
            const image = document.createElement("img");
            image.src = element.image_url;
            image.classList.add("apiImage");
            //end of image
    
            //title of the card
            const title = document.createElement("p");
            title.innerText = element.title;
            title.style.fontSize = "4vh";
            title.style.paddingBottom = "15px"
            //end of title
    
            //coding language
            const lang = document.createElement("p");
            lang.innerText = `Language: ${element.language}`
            //end of language
    
            //creating the element to have everything be put together
            const elements = document.createElement("div");
            elements.classList.add("card");
            // end of elements
    
            //adding everything together
            elements.appendChild(title);
            elements.appendChild(image);
            elements.appendChild(desc);
            elements.appendChild(creators);
            elements.appendChild(lang)
            aLink.appendChild(elements);
            const one = document.getElementById("one");
            one.appendChild(aLink);
            //end of adding everything together
          }
        }
        // end of favorite 10
      });
    // end of fetch
  } 
  //---------------------------------------------------------------
  //default (newest to oldest)
  else {
    console.log("pick a filter 4.0")
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
            lang.innerText = `Language: ${project.language}`
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
        });
      });
    // end of fetch
  }
  //-------------------------
}
// end of this function that filters the projects section