// startup
function startup() {
  // fetch the existing note
  let notesInString = localStorage.getItem('notes');
  if (notesInString !== null) {
    let notesArray = JSON.parse(notesInString);
    let cards = document.querySelector('.cards');
    notesArray.forEach((element, index) => {
      let obj = element;
      cards.innerHTML = cards.innerHTML.concat(`
          <div class="card" id="note${index}" style="width: 18rem">
            <div class="card-cards">
              <h5 class="card-title">${obj.title}</h5>
              <p class="card-text">
                ${obj.txt}
              </p>
              <a href="#" class="deleteMeBtn btn btn-primary" id="dltBtn${index}">Delete me</a>
            </div>
          </div>
          `);
    });
  } else {
    console.log('No items Found in Local Storage');
  }
}

//flow of code
startup();
/*
   Utility functions
*/
//sync all notes on screen with localstorage
function refresh() {
  let notesInString = localStorage.getItem('notes');
  if (notesInString !== null) {
    let notesArray = JSON.parse(notesInString);
    let cards = document.querySelector('.cards');
    cards.innerHTML = '';
    notesArray.forEach((element, index) => {
      let obj = element;
      cards.innerHTML = cards.innerHTML.concat(`
          <div class="card" id="note${index}" style="width: 18rem">
            <div class="card-cards">
              <h5 class="card-title">${obj.title}</h5>
              <p class="card-text">
                ${obj.txt}
              </p>
              <a href="#" class="deleteMeBtn btn btn-primary" id="dltBtn${index}">Delete me</a>
            </div>
          </div>
          `);
    });
  } else {
    console.log('No item found in Local storage to refresh');
  }
}

/* ******* event-listners / functionality ********* */
//add note button
let nextNoteIndex = 0; //index/ id for note which will be added next
let addNoteBtn = document.getElementById('add-note-button');
let titleTxtArea = document.getElementById('titleBox');
let noteTxtArea = document.getElementById('noteBox');
let cards = document.querySelector('.cards'); //cant change the html for body/main as it wont work for me.
addNoteBtn.addEventListener('click', function () {
  let obj = {
    title: titleTxtArea.value,
    txt: noteTxtArea.value,
  };

  cards.innerHTML = cards.innerHTML.concat(`
      <div class="card" id="note${nextNoteIndex}"style="width: 18rem">
        <div class="card-cards">
          <h5 class="card-title">${obj.title}</h5>
          <p class="card-text">
            ${obj.txt}
          </p>
          <a href="#" class="deleteMeBtn btn btn-primary" id="dltBtn${nextNoteIndex}">Delete me</a>
        </div>
      </div>
      `);
  nextNoteIndex++;
  //add in storage
  let notesInString = localStorage.getItem('notes');
  if (notesInString != null) {
    let notesArray = JSON.parse(notesInString);
    let obj = {
      title: titleBox.value,
      text: noteBox.value,
    };
    notesArray.push(obj);
    localStorage.setItem('notes', JSON.stringify(notesArray));
  } else {
    let notesArray = [{ title: obj.title, text: obj.txt }];
    localStorage.setItem('notes', JSON.stringify(notesArray));
  }

  titleTxtArea.value = '';
  noteTxtArea.value = '';
});

/*
TODO : make all delete note btns work properly
*/

//delete btns in every card--> working partially

let btnArray = document.querySelectorAll('.deleteMeBtn');
Array.from(btnArray).forEach((element) => {
  element.addEventListener('click', function () {
    console.log(element);
    let newArray = JSON.parse(localStorage.getItem('notes'));

    newArray.splice(Number(element.id.substring(6)), 1);
    localStorage.setItem('notes', JSON.stringify(newArray));
    refresh();
  });
});
