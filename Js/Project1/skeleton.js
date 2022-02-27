console.log('Hello world');

let btn = document.getElementById('submit');
let txtarea = document.getElementById('txtArea');
let list = document.getElementById('lst');
function reload() {
  let array = localStorage.getItem('notes');
  if (array != null) {
    array = JSON.parse(array);
    list.innerHTML = '';
    array.forEach((element, index) => {
      list.innerHTML = list.innerHTML.concat(
        `<li> ${index + 1}. ${element}</li>`
      );
    });
  } else {
    list.innerHTML = '';
    list.innerHTML = list.innerHTML.concat('<li>NO NOTES AVAILABLE</li>');
  }
}
reload();
btn.addEventListener('click', function () {
  let array = localStorage.getItem('notes');
  if (array != null) {
    array = JSON.parse(array);
    if (txtarea.value !== '') {
      array.push(txtarea.value);
      localStorage.setItem('notes', JSON.stringify(array));
    }
  } else {
    if (txtarea.value !== '') {
      array = [txtarea.value];
      localStorage.setItem('notes', JSON.stringify(array));
    }
  }
  txtarea.value = '';
  reload();
});
let clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', function () {
  localStorage.clear();
  reload();
});
