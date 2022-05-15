// @ts-check
console.log("dictionary api started");
let input = document.getElementById("input");
let submit = document.getElementById("submit");
// var response;
submit.addEventListener("click", function () { getData(_display); });
/**
 * @param {{ (response: string, word: string): void; (arg0: any, arg1: any): void; }} callBack
 */
function getData(callBack) {
    // @ts-ignore
    let word = input.value;
    let requestString = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", requestString, true);
    xhr.send();
    xhr.onload = function () {
        // * onload is important since the result will be generated when the request has been responded
        if (xhr.response === "" || xhr.status !== 200) {
            alert("No responce detected from server");//! when server responds nothing
            return;
        }
        let response = xhr.response;
        callBack(response, word);
    };
}
/**
 * @param {string} response
 * @param {string} word
 */
function _display(response, word) {
    response = JSON.parse(response);
    let title = word;
    let subtitle = "";
    let message = "";
    let linkHREF = `https://www.google.com/search?q=Define ${word}`;
    if (Array.isArray(response)) {
        // *api found the word
        subtitle = `${response[0].phonetic}`;
        message = `Meaning :
        <ul class="list-group list-group-flush">`;
        let v1 = response[0].meanings.length;
        for (let i = 0; i < Math.min(v1, 2); i++) {
            const element = response[0].meanings[i];
            let v2 = element.definitions.length;
            for (let j = 0; j < Math.min(v2, 2); j++) {
                const Edefinations = element.definitions[j];
                message += `<li class="list-group-item">(${element.partOfSpeech}) ${Edefinations.definition}</li>`;
            }
        }
        message += "</ul>";
    }
    else {
        // !api don't found that word
        subtitle = "No defination found";
        // @ts-ignore
        message = response.message;
    }
    let container = document.getElementById("cardContainer");
    if (container !== null) {
        container.innerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${subtitle}</h6>
                <p class="card-text">${message}</p>
                <a href="${linkHREF}" class="card-link" target="_blank">See more about word "${word}"</a>
            </div>
        </div>
`;
    }
    else {
        console.error("Cant find place to put the card onto DOM");
    }
}