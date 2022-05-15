// @ts-nocheck
console.log("HEllo world");
//working functions
class book {
    name;
    author;
    type;
    PRIMARY_KEY;
}
// startup
function start() {
    //remove the error
    _hideError();
    // get all books from local storage
    let array = localStorage.getItem("books");
    if (array !== null) {
        array = JSON.parse(array);
        REFERENCE_PRIMARY_KEY = array.length;
        _displayBooks(array);
    }
    else {
        array = [];
        localStorage.setItem("books", JSON.stringify(array));
    }
}
function _displayBooks(array) {
    let tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";
    let number = 1;
    array.forEach(element => {
        tbody.innerHTML += ` 
                <tr>
                    <td>${number++}</td>
                    <td>${element.name}</td>
                    <td>${element.author}</td>
                    <td>${element.type}</td>
                    <td><button type="button" class="btn btn-danger dltBtn"
                            id="${element.PRIMARY_KEY}">Delete</button>
                    </td>
                </tr>`;
    });
    _addEvents();
}
function _dltNote(PrimaryKey) {
    console.log("I got ", PrimaryKey);
    let array = localStorage.getItem("books");
    if (array !== null) {
        array = JSON.parse(array);
        console.table(array);
        //remove element from array
        for (let i = 0; i < array.length; i++) {
            if (array[i].PRIMARY_KEY === PrimaryKey) {
                console.log("array [i] is ", array[i], i);
                array.splice(i, 1);
                localStorage.setItem("books", JSON.stringify(array));
                _displayBooks(array);
                break;

            }
        }
    }
    else {
        console.warn("cant find the array of books in local storage");
    }
}
function _addCurrBook() {
    let nameBox = document.getElementById("nameBox");
    let authorBox = document.getElementById("authorBox");

    if (authorBox.value == "" || nameBox.value == "") {
        console.warn("Empty note cant be added");
        _giveError();
        return;
    }
    let bookObj = new book();
    bookObj.author = authorBox.value;
    bookObj.name = nameBox.value;
    let rad1 = document.getElementById("Radio1");
    let rad2 = document.getElementById("Radio2");
    let rad3 = document.getElementById("Radio3");
    switch (true) {
        case rad1.checked:
            bookObj.type = "Educational";
            break;

        case rad2.checked:
            bookObj.type = "Horror";
            break;

        case rad3.checked:
            bookObj.type = "Spiritual";
            break;

        default:
            alert("Something went wrong");
            break;
    }
    bookObj.PRIMARY_KEY = REFERENCE_PRIMARY_KEY++;
    console.table(bookObj);
    // resetting the form
    nameBox.value = "";
    authorBox.value = "";
    // aading to local storage
    let array = localStorage.getItem("books");
    if (array !== null) {
        array = JSON.parse(array);
        array.push(bookObj);
        localStorage.setItem("books", JSON.stringify(array));
        _displayBooks(array);
    }
    else {
        console.warn('No object found keyed as name "book".\n Quick fixing it...');
        array = [bookObj];
        localStorage.setItem("books", JSON.stringify(array));
        _displayBooks(array);
    }
}
function _giveError() {
    let alertBox = document.getElementById("alert");
    alertBox.style.display = "flex";
    setTimeout(() => {
        _hideError();
    }, 3000);
}
function _hideError() {
    let alertBox = document.getElementById("alert");
    alertBox.style.display = "none";
}
function _addEvents() {
    let array = Array.from(document.getElementsByClassName("dltBtn"));
    array.forEach(element => {
        element.addEventListener("click", function () { console.log("Delete button clicked", Number(element.id), typeof element.id); _dltNote(Number(element.id)); });
    });
}
var REFERENCE_PRIMARY_KEY = 0;
// Flow of Program
start();
// add book 
let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", _addCurrBook);
