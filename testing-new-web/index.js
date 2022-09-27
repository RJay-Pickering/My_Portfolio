fetch(
    `projects.json`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      Array.from(data).forEach(function (project) {
          const aLink = document.createElement("a");
          aLink.href = `${project.link}`;
          aLink.target = "_blank";
          const article = document.createElement("div");
          const desc = document.createElement("p");
          desc.innerText = project.description;
          const creators = document.createElement("p");
          creators.innerText = `Created By: ${project.creator}`;
          article.classList.add("card");
          const image = document.createElement("img");
          image.src = project.image_url;
          image.classList.add("apiImage");
          const title = document.createElement("p");
          title.innerText = project.title;
          //extra styling
          title.style.fontSize = "20px";
          title.style.paddingBottom = "15px"
          desc.style.fontSize = "15px";
          desc.style.paddingTop = "15px"
          desc.style.paddingBottom = "15px"
          creators.style.fontSize = "15px";
          //end of extra styling
          article.appendChild(title);
          article.appendChild(image);
          article.appendChild(desc);
          article.appendChild(creators);
          aLink.classList.add("aLink");
          aLink.appendChild(article);
          const one = document.getElementById("one");
          one.appendChild(aLink);
          console.log(article);
      });
    });