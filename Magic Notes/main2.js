console.log('Welcome to my display');
//add note button
let addNoteBtn = document.getElementById('add-note-button');

addNoteBtn.addEventListener('click', function () {
  let titleTxtArea = document.getElementById('titleBox');
  let noteTxtArea = document.getElementById('noteBox');
  let body = document.querySelector('body');
  let obj = {
    title: titleTxtArea.value,
    txt: noteTxtArea.value,
  };
  body.innerHTML = body.innerHTML.concat(`
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">{obj.title}</h5>
          <p class="card-text">
            {obj.txt}
          </p>
          <a href="#" class="btn btn-primary">Delete me</a>
        </div>
      </div>
      `);
  console.log('function eneded');
});
