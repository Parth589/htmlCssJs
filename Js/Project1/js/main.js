let array = JSON.parse(localStorage.getItem('notes'));
if (array == null) {
  array = [];
  localStorage.setItem('notes', JSON.stringify(array));
}
let txt_area = document.getElementById('add_txt');
txt_area.addEventListener('keyup', function (e) {
  ``;
  let addBtn = document.getElementById('addntbtn');
  if (e.keyCode === 13) {
    addBtn.click();
  }
});
//utility function to show notes wihout reloading
function shownotes() {
  let array = JSON.parse(localStorage.getItem('notes'));
  let frame = document.getElementById('collection');
  if (array == null) {
    let errorMsg = document.createTextNode(
      'Oops! you have no notes to show :('
    );
    frame.appendChild(errorMsg);
  } else {
    console.log(array);
    array.forEach((element, index) => {
      console.log('hello world');
      frame.innerHTML = frame.innerHTML.concat(`
          <div class="card" id="cardNo${index}">
            <h3>title ${index + 1}</h3>
            <p>
              ${element}
            </p>
            <button class="deleteBtn"id="dltBtn${index}">Delete</button>
          </div>`);
    });
  }
}
//getting note from text-area and store it to localstorage
let addNoteBtn = document.getElementById('addntbtn');
addNoteBtn.addEventListener('click', function (event) {
  let txtContent = document.getElementById('add_txt').value;
  document.getElementById('add_txt').value = '';
  let previousContent = JSON.parse(localStorage.getItem('notes'));
  previousContent.push(txtContent);
  localStorage.setItem('notes', JSON.stringify(previousContent));
  // shownotes();
  location.reload();
});

//as the note comes to localstorage put it to collection
let frame = document.getElementById('collection');
if (array.length === 0) {
  let errorMsg = document.createTextNode('Oops! you have no notes to show :(');
  frame.appendChild(errorMsg);
} else {
  console.log(array);
  array.forEach((element, index) => {
    console.log('hello world');
    frame.innerHTML = frame.innerHTML.concat(`
          <div class="card" id="cardNo${index}">
            <h3>title ${index + 1}</h3>
            <p>
              ${element}
            </p>
            <button class="deleteBtn"id="dltBtn${index}">Delete</button>
          </div>`);
  });
}
//function of delete button
let deleteBtns = document.querySelectorAll('.deleteBtn');
Array.from(deleteBtns).forEach((element) => {
  element.addEventListener('click', function (event) {
    let array = JSON.parse(localStorage.getItem('notes'));
    console.log(element.id, array);
    // considering that evry delete element have id like dltbtn${index}
    let index = Number(element.id.slice(6));
    console.log(index, typeof index);
    console.log(array.splice(index, 1));
    localStorage.setItem('notes', JSON.stringify(array));
    // shownotes();
    location.reload();
  });
});
///search function;
let search_bar = document.getElementById('search');
let nts = JSON.parse(localStorage.getItem('notes'));
