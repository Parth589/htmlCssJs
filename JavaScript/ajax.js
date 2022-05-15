console.log("Heelo World");
let btn = document.getElementById("btn");
btn.addEventListener("click", func);
function func() {
    console.log("Btn clicked!!");
    let xhr = new XMLHttpRequest();
    // xhr.open("GET", "https://raw.githubusercontent.com/jennybc/github-api-search/master/hadley-rstudioapi.json", true);
    // xhr.open("GET", "https://api.github.com/users/Parth589/repos", true);
    xhr.open("GET", "https://reqres.in/api/users?page=2", true);
    xhr.onload = function () {
        if (this.status === 200) {

            // console.log(this.responseText);
            (JSON.parse(this.responseText).data).forEach(element => {
                console.log(element);
            });
        }
        else {
            console.log("Some error occured");
        }
    };


    console.log("We are done!");
    xhr.send();
}

let btn2 = document.getElementById("btnPost");
btn2.addEventListener("click", f2);
function f2() {
    console.log("You are sending the post request");
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "", true);
    xhr.setRequestHeader("content-type", "action/json");
    sendingData = {
        "name": "some person",
        "eligibility": "B.A. pass",
        "profession": "coder",
        "age": 67
    };
    xhr.send(sendingData);
}