import data from "./projectData.js";

const container = document.getElementById("container"); 

const projectKeys = Object.keys(data).reverse();

for (let key of projectKeys) {
    const project = data[key]; 

    const cardID = `card_${key}`;

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("container");
    projectDiv.id = cardID;

    const githubLink = document.createElement("a");
    githubLink.classList.add("github");
    githubLink.href = project.github;
    githubLink.textContent = "Github";

    const updateDate = document.createElement("div");
    updateDate.classList.add("update");
    updateDate.textContent = `Updated: ${project.updateDate}`;

    const updateFalse = document.createElement("div");
    updateFalse.textContent = "";

    const image = document.createElement("img");
    image.src = project.imgpath;
    image.alt = project.imgalt;
    image.classList.add("img");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.textContent = `${project.title} - ${project.date}`;

    const descriptionP = document.createElement("p");
    descriptionP.classList.add("description");
    descriptionP.textContent = project.description;

    projectDiv.appendChild(githubLink);
    if (project.update == true) {
        projectDiv.appendChild(updateDate);
    } else {
        projectDiv.appendChild(updateFalse);
    }
    projectDiv.appendChild(image);
    projectDiv.appendChild(titleDiv);
    projectDiv.appendChild(descriptionP);
    container.appendChild(projectDiv);
}

