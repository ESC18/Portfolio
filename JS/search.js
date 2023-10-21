import data from "./projectData.js";

let searchbar = document.getElementById("search");

function searchbarFunc() {
    const searchText = searchbar.value.toLowerCase();
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            const project = data[key];
            const card = document.getElementById(`card_${key}`);

            if (project.title.toLowerCase().includes(searchText) || project.description.toLowerCase().includes(searchText) || project.imgalt.toLowerCase().includes(searchText) || project.date.toLowerCase().includes(searchText) || project.updateDate.toLowerCase().includes(searchText) || project.github.toLowerCase().includes(searchText)) {
                card.style.display = "inline-block";
            }
            else {
                card.style.display = "none";
            }
        }
    }
}

searchbar.addEventListener("input", searchbarFunc);
window.addEventListener("load", searchbarFunc);