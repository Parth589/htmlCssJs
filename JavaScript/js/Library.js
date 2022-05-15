class library {
    nameOfBooks;//array of strings
    constructor(list) {
        this.nameOfBooks = list;
    }
    issueBook(bookName, usrName) {
        let isIssued = false;
        for (let i = 0; i < this.nameOfBooks.length; i++) {
            console.log(this.nameOfBooks[i]);
            if (this.nameOfBooks[i] == bookName) {
                console.log(this.nameOfBooks[i]);
                this.nameOfBooks.splice(i, 1);
                isIssued = true;
                break;
            }
        }
        if (isIssued) console.log("Book given to ", usrName);
        else console.log("cant find that book for ", usrName);
    }
    getBookList() {
        this.nameOfBooks.forEach(element => {
            console.log(element);
        });
    }
    returnBook(bookName, usrName) {
        console.log("Thanks ", usrName, " for returning the book ", bookName);
        this.nameOfBooks.push(bookName);
    }
}
let list = ["Avatar", "drake", "GOG", "S3x life"];
lib = new library(list);
