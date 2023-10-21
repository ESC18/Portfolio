import data from "./projectData.js";

let documentTermArrays = CreateDocumentTermArray();
const noResult = document.getElementById("noResult"); 
const speel = document.getElementById("speel");
let searchbar = document.getElementById("search");

function searchbarFunc() {
    const searchText = searchbar.value;
    const searchTermArray = textToTerms([searchText]);
    for (let key in data) {
        const project = data[key];
        const card = document.getElementById(`card_${key}`);
        if (searchTermArray[0] === "") {
            card.style.display = "inline-block";
            noResult.style.display = "none";
            speel.style.display = "none";
        } else {
            if (scanner(searchTermArray, documentTermArrays[key]) >= 1) {
                card.style.display = "inline-block";
                noResult.style.display = "none";
                speel.style.display = "none";
            }
            else {
                card.style.display = "none";
                noResult.innerHTML = `Shucks there ain't no projects called <strong>"${searchText}"</strong>`;
                noResult.style.display = "inline-block";
                speel.style.display = "inline-block";
            }
        }

    }
}

function tokenization(str) {
    str = str.toLowerCase();
    return str.split(" ", -1);
}

function textToTerms(Arr) {
    let newArray = [];
    Arr.forEach((element) => newArray = newArray.concat(tokenization(element)));
    return newArray;
}

function scanner(queryArr, documentArr) {
    let counter = 0;
    queryArr.forEach((word) => { if (documentArr.includes(word)) { counter += 1 } });
    return counter;
}

function CreateDocumentTermArray() {
    let array = [];
    data.forEach((element) => array.push(textToTerms([element.title, element.description])));
    return array;
}


searchbar.addEventListener("input", searchbarFunc);
window.addEventListener("load", searchbarFunc);