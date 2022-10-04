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
          desc.style.fontSize = "15px";
          desc.style.paddingTop = "15px"
          desc.style.paddingBottom = "15px"
          //end of descriptions

          //creators of the project
          const creators = document.createElement("p");
          creators.innerText = `Created By: ${project.creator}`;
          creators.style.fontSize = "15px";
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
          title.style.fontSize = "20px";
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

// // making webpage start off by showing about me
// skillsContent.classList.add("hiding-content")
// projContent.classList.add("hiding-content")
// // end of webpage start off

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

// this function deals with the filter in the projects section
function myFunction() {
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
    // creating language divs
    const two = document.createElement("div");
    const three = document.createElement("div");
    const four = document.createElement("div");
    const five = document.createElement("div");
    const six = document.createElement("div");
    const seven = document.createElement("div");
    const eight = document.createElement("div");
    const nine = document.createElement("div");
    const ten = document.createElement("div");
    const eleven = document.createElement("div");
    const twelve = document.createElement("div");
    // end of creating divs
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
        const dividerSection = document.createElement("hr")
        dividerSection.classList.add("o-divider")
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
        // end of python

        // divider
        mainProj.appendChild(dividerSection)
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            two.classList.add("project-content")
            two.setAttribute('id','two');
            two.appendChild(aLink);
            mainProj.appendChild(two)
            //end of adding everything together
            
          }
        }
        //end of html and css

        // divider
        mainProj.appendChild(two)
        mainProj.appendChild(dividerSection)
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            three.classList.add("project-content")
            three.appendChild(aLink);
            three.setAttribute('id','three');
            mainProj.appendChild(three)
            //end of adding everything together
          }
        }
        //end of django

        // divider
        mainProj.appendChild(dividerSection)
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            four.appendChild(aLink);
            four.classList.add("project-content")
            four.setAttribute('id','four');
            mainProj.appendChild(four)
            //end of adding everything together
          }
        }
        //end of javascript

        // divider
        mainProj.appendChild(dividerSection)
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
              desc.style.fontSize = "15px";
              desc.style.paddingTop = "15px"
              desc.style.paddingBottom = "15px"
              //end of descriptions
      
              //creators of the element
              const creators = document.createElement("p");
              creators.innerText = `Created By: ${element.creator}`;
              creators.style.fontSize = "15px";
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
              title.style.fontSize = "20px";
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
              five.appendChild(aLink);
              five.classList.add("project-content")
              five.setAttribute('id','five');
              mainProj.appendChild(five)
              //end of adding everything together
            }
          }
        }
        //end of java

        // divider
        mainProj.appendChild(dividerSection)
        console.log(mainProj)
        // end of divider

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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            six.appendChild(aLink);
            six.classList.add("project-content")
            six.setAttribute('id','six');
            mainProj.appendChild(six)
            //end of adding everything together
          }
        }
        //end of Spring

        // divider
        mainProj.appendChild(dividerSection)
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            seven.appendChild(aLink);
            seven.classList.add("project-content")
            seven.setAttribute('id','seven');
            mainProj.appendChild(seven)
            //end of adding everything together
          }
        }
        //end of sql

        // divider
        mainProj.appendChild(dividerSection)
        console.log(mainProj)
        // end of divider

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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions
    
            //creators of the element
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${element.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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
            desc.style.fontSize = "15px";
            desc.style.paddingTop = "15px"
            desc.style.paddingBottom = "15px"
            //end of descriptions

            //creators of the project
            const creators = document.createElement("p");
            creators.innerText = `Created By: ${project.creator}`;
            creators.style.fontSize = "15px";
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
            title.style.fontSize = "20px";
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