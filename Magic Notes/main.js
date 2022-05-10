console.log("HEllo world");
/* 
HT52VB is used as key for storing notes in local storage
Expected Functionallities:
-> all notes gets refreshed when site reloads
-> Note must be added to local storage as wll as in DOM when user hits add note button 
-> note can be searched by it's title name 
-> any note can be deleted and user must see it's effects immidiately

Planning :
->all notes are stored in form of array. 
-> note structure { title ,note ,PK}
->for identifying which note's delete button is pressed, the id of that button is used. id structure ="1"

at startup: 
-> all notes are have to be synced with local storage

adding events:
-> search :all displayed note for user will be wiped out and only relevent notes will be shown to the user
-> add note form and submit button: add note to the local storage as well as in the UI
-> delete button of every note : note will be wiped out from local storage and instead of UI refresh the note will be searched and deleted from the UI to get better performence

note structure :
class note{
    title;
    note;
    primaryKey;
}
primaryKey is unique for every note and will be used for deleting a note

card structure:
            <div class="card" style="width: 18rem; id="_${element.primaryKey}">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">
                        ${element.note}
                    </p>
                    <a href="#" class="btn btn-primary" id="${element.primaryKey}">Delete now</a>
                </div>
            </div>
*/
class noteClass {
    title;
    note;
    primaryKey;
}
function start() {
    let notesArray = localStorage.getItem("HT52VB");
    if (notesArray === null) {
        notesArray = [];
        localStorage.setItem("HT52VB", JSON.stringify(notesArray));
    }
    else {
        notesArray = JSON.parse(notesArray);
    }
    _DisplayNotesByArray(notesArray);
}

function _DisplayNotesByArray(noteArray) {
    let container = _emptyCardContainerUI();
    noteArray.forEach(element => {
        container.innerHTML += `
            <div class="card" style="width: 18rem; id="_${element.primaryKey}">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">
                        ${element.note}
                    </p>
                    <a href="#" class="btn btn-primary" id="${element.primaryKey}">Delete now</a>
                </div>
            </div>`;
    });
}
function _emptyCardContainerUI() {
    let container = document.querySelector(".cardContainer");
    container.innerHTML = "";
    return container;
}

function _search() {
    string = search.value;
    console.log("change event fired", string);
    // assuming that all notes are synced 
    let container = document.querySelector(".cardContainer");
    Array.from(container.children).forEach(element => {
        console.log(element);
        if (element.innerText.includes(string)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";

        }
    });

}
/*
    After a stable version of magic notes , try to implement search functionallity using local storage
 */
// function _search(string) {
//     console.log("change event fired", string);
//     // assuming that all notes are synced 
//     let notesArray = localStorage.getItem("HT52VB");
//     _emptyCardContainerUI();
//     if (notesArray !== null) {
//         let finalArray = [];
//         notesArray = JSON.parse(notesArray);
//         notesArray.forEach(element => {
//             if (element.title.includes(string)) {
//                 finalArray.push(element);
//             }
//         });
//         _DisplayNotesByArray(finalArray);
//     }

// }
function _addCurrNote() {
    let title = document.getElementById("titleBox");
    let note = document.getElementById("noteBox");
    if (title.value == "" || note.value == "") {
        alert("valid value required!");
        return;
    }
    let obj = new noteClass();
    obj.title = title.value;
    obj.note = note.value;
    title.value = ""; note.value = "";
    obj.primaryKey;// for future me.
    //adding object to the local storage
    let noteArray = localStorage.getItem("HT52VB");
    if (noteArray !== null) {
        noteArray = JSON.parse(noteArray);
        noteArray.push(obj);
        localStorage.setItem("HT52VB", JSON.stringify(noteArray));
    }
    else {
        noteArray = [obj];
        localStorage.setItem("HT52VB", JSON.stringify(noteArray));

    }

    let container = document.querySelector(".cardContainer");
    console.log(container);
    container.innerHTML += `
            <div class="card" style="width: 18rem; id="_${obj.primaryKey}">
                <div class="card-body">
                    <h5 class="card-title">${obj.title}</h5>
                    <p class="card-text">
                        ${obj.note}
                    </p>
                    <a href="#" class="btn btn-primary" id="${obj.primaryKey}">Delete now</a>
                </div>
            </div>`;
}

/* 

*******Flow of Program******** 

*/
start();
/* non-repeating event listners are not enclosed by function */
let search = document.getElementById("searchBox");
search.addEventListener("input", _search);
search.addEventListener("blur", function () {
    search.value = "";
    let container = document.querySelector(".cardContainer");
    Array.from(container.children).forEach(element => {
        element.style.display = "block";
    });
});

// add note button
let addbtn = document.getElementById("addNoteBtn");
addbtn.addEventListener("click", _addCurrNote);