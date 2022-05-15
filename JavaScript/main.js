console.log("Hello world");
function addBookToLocal(book) {
    let arr = JSON.parse(localStorage.getItem("arr"));
    if (arr != null) {
        arr.push(book);
        localStorage.setItem("arr", JSON.stringify(arr));
    }
    else {
        arr = [book];
        localStorage.setItem("arr", JSON.stringify(arr));

    }
}
//objects
class book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
};
class display {
    //method to add book to DOM: takes a book object and put it into DOM
    add2(book) {
        let table = document.getElementById("bookTableBody");
        table.innerHTML += `
        <tr class="height50px">
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
            <td><button>Delete</button></td>
        </tr>`;
    }
    clear() {
        let libraryForm = document.getElementById('bookFrm');
        libraryForm.reset();
    }

};
//method to add book to DOM: takes nothing and generates a book object
function add1(e) {
    e.preventDefault();
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("authorName").value;
    if (name.length < 2 || author.length < 2) {
        alert("You cant add non-valid book");
        return;
    }
    let type;
    let type1 = document.getElementById("typeFiction");
    let type2 = document.getElementById("typeProgramming");
    let type3 = document.getElementById("typeCooking");
    if (type1.checked) { type = "Fiction"; }
    else if (type2.checked) { type = "Programming"; }
    else if (type3.checked) { type = "Cooking"; }
    let bookObj = new book(name, author, type);
    console.log("Object created ", bookObj);
    let ds = new display();
    ds.clear();
    addBookToLocal(bookObj);
    ds.add2(bookObj);
}
//method to sync localstorage with DOM
function refresh() {
    let arr = JSON.parse(localStorage.getItem("arr"));
    if (arr != null) {
        let ds = new display();
        let table = document.getElementById("bookTableBody");
        table.innerHTML = "";
        arr.forEach(element => {
            ds.add2(element);
        });
    }
}
// event-listners and startup code
let form = document.getElementById("bookFrm");
form.addEventListener("submit", add1);

refresh();