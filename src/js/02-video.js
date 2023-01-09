const iframe = document.querySelector('iframe');

const LOCALSTATE = 'videoplayer-current-time';

const player = new Vimeo.Player(iframe);

let getLocalStorage = localStorage.getItem(LOCALSTATE);

function resumePlaying(evt) {
  if (evt) {
    player.setCurrentTime(evt);
  }
}

resumePlaying(getLocalStorage);

player.on('timeupdate', function (data) {
  localStorage.setItem(LOCALSTATE, data.seconds);
});

function foo(params) {
  console.log('gg :>> ');
}
