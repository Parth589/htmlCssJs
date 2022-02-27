console.log('hello spitify');
let listOfMusicList = document.querySelectorAll('.musicLists');
function eraseAndAddMusic(a) {
  for (let count = 0; count < listOfMusicList.length; count++) {
    listOfMusicList[count].innerHTML = '';
    for (let i = 0; i < a; i++) {
      listOfMusicList[count].innerHTML = listOfMusicList[count].innerHTML
        .concat(`<div class="card">
          <h1>music_name</h1>
          <img
            src="/img/icons/dummy_album_cover.jpg"
            alt="dummy_album_cover"
            class="albumCoverImg"
          />
          <div class="btm">
            <input type="range" />
            <div class="btns">
              <button class="prevBtn">
                <img
                  src="/img/icons/caret-left-fill.svg"
                  alt="caret-left-fill"
                />
              </button>
              <button class="playBtn">
                <img
                  src="/img/icons/play-circle-fill.svg"
                  alt="play-circle-fill"
                  class="playBtnImg"
                />
              </button>
              <button class="nxtBtn">
                <img
                  src="/img/icons/caret-right-fill.svg"
                  alt="play-circle-fill"
                  class="playBtnImg"
                />
              </button>
            </div>
          </div>
        </div>`);
    }
  }
}
function addMusic(a) {
  for (let count = 0; count < listOfMusicList.length; count++) {
    for (let i = 0; i < a; i++) {
      listOfMusicList[count].innerHTML = listOfMusicList[count].innerHTML
        .concat(`<div class="card">
          <h1>music_name</h1>
          <img
            src="/img/icons/dummy_album_cover.jpg"
            alt="dummy_album_cover"
            class="albumCoverImg"
          />
          <div class="btm">
            <input type="range" value="0"/>
            <div class="btns">
              <button class="prevBtn">
                <img
                  src="/img/icons/caret-left-fill.svg"
                  alt="caret-left-fill"
                />
              </button>
              <button class="playBtn">
                <img
                  src="/img/icons/play-circle-fill.svg"
                  alt="play-circle-fill"
                  class="playBtnImg"
                />
              </button>
              <button class="nxtBtn">
                <img
                  src="/img/icons/caret-right-fill.svg"
                  alt="play-circle-fill"
                  class="playBtnImg"
                />
              </button>
            </div>
          </div>
        </div>`);
    }
  }
}
