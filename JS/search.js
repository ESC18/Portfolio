import data from "./projectData.js";

let searchbar = document.getElementById("search");

function searchbarFunc() {
    const searchText = searchbar.value.toLowerCase();
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            const project = data[key];
            const card = document.getElementById(`card_${key}`);

            if (project.title.toLowerCase().includes(searchText) || 
                    project.description.toLowerCase().includes(searchText))
            {
                card.style.display = "inline-block";
            }
            else {
                card.style.display = "none";
            }
        }
    }
}

function tokenization(str) {
    str.toLowerCase();  
    return str.split(" ");  
}

function textToTerms(Arr) {
    let newArray = [];
    Arr.foreach((element) => newArray.concat(tokenization(element)));
    return newArray;
}

function scanner(query, document) {
    let counter = 0;
    query.foreach((word) => {if (document.includes(word)) {counter += 1}});
    return counter;
}



searchbar.addEventListener("input", searchbarFunc);
window.addEventListener("load", searchbarFunc);