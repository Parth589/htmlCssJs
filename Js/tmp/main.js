console.log('hi');
let obj = new Audio('Winter.mp3');
let playing = false;
let btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
  if (playing) {
    obj.pause();
    playing = false;
  } else {
    obj.play();
    playing = true;
  }
});
