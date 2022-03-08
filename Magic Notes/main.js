// startup
function startup() {
  // fetch the existing note
  let notesInString = localStorage.getItem('notes');
  if (notesInString != null) {
    let notesArray = JSON.parse(notesInString);
    let body = document.querySelector('body');
    notesArray.forEach((element) => {
      body.innerHTML = body.innerHTML.concat(` 
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">
            ${element.text}
          </p>
          <a href="#" class="btn btn-primary">Delete me</a>
        </div>
      </div>
      `);
    });
  } else {
    localStorage.setItem('notes', []);
  }
}
// add a note
let addNoteBtn = document.getElementById('add-note-button');
addNoteBtn.addEventListener('click', function () {
  let body = document.querySelector('body');
  let titleBox = document.getElementById('titleBox');
  let noteBox = document.getElementById('noteBox');
  console.log(noteBox);
  if (titleBox.value != '' && noteBox.value != '') {
    //  add visually
    body.innerHTML = body.innerHTML.concat(` 
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${titleBox.value}</h5>
          <p class="card-text">
            ${noteBox.value}
          </p>
          <a href="#" class="btn btn-primary">Delete me</a>
        </div>
      </div>
      `);
    console.log('note added visulally');
    //   add in storage
    let notesInString = localStorage.getItem('notes');
    if (notesInString != null) {
      let notesArray = JSON.parse(notesInString);
      let obj = {
        title: titleBox.value,
        text: noteBox.value,
      };
      notesArray.push(obj);
      localStorage.setItem('notes', JSON.stringify(notesArray));
      console.log('note added in array');
    } else {
      let notesArray = [{ title: titleBox.value, text: noteBox.value }];
      localStorage.setItem('notes', JSON.stringify(notesArray));
      console.log('note added in new array');
    }
  }
});
// flow of code
// startup();
