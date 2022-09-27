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
          desc.style.fontSize = "10px";
          const date = document.createElement("p");
          date.innerText = `Created By: ${project.creator}`;
          article.classList.add("card");
          const image = document.createElement("img");
          image.src = project.image_url;
          image.style.width = "250px";
          image.style.height = "200px";
          image.classList.add("apiImage");
          const title = document.createElement("p");
          title.innerText = project.title;
          article.appendChild(title);
          article.appendChild(image);
          article.appendChild(desc);
          article.appendChild(date);
          aLink.classList.add("aLink");
          aLink.appendChild(article);
          const one = document.getElementById("one");
          one.classList.add("column");
          aLink.style.backgroundColor = "white";
          one.appendChild(aLink);
          console.log(article);
      });
    });