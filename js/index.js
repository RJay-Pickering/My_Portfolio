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