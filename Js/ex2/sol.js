console.log('hello world');
localStorage.clear();
let inserted_div = document.createElement('div');
let content = document.createTextNode('Enter your note:');
inserted_div.appendChild(content);
let p = document.querySelector('#dwn');
// p.appendchild(inserted_div);
p.appendChild(inserted_div);
inserted_div.style.backgroundColor = 'grey';
inserted_div.style.border = '2px solid black';
inserted_div.style.height = '20vh';
inserted_div.addEventListener('click', function () {
  inserted_div.innerText = '';
  inserted_div.contentEditable = 'true';
});
let cnt = 0;
inserted_div.addEventListener('blur', function () {
  let con = inserted_div.innerText;
  inserted_div.innerText = 'Enter your note';
  if (con !== '') {
    localStorage.setItem(`note ${cnt}`, con);
    cnt++;
    inserted_div.innerText = 'Enter your note';
  }
});
