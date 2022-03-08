console.log('hello world');
let leftBtn = document.getElementById('lft');
let rightBtn = document.getElementById('rit');
leftBtn.addEventListener('click', function () {
  let container = document.querySelector('.container');
  container.scrollIntoView();
});
