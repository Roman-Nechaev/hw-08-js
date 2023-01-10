import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');

const LOCALSTATE = 'videoplayer-current-time';

const player = new Vimeo.Player(iframe);

function resumePlaying(evt) {
  if (evt) {
    player.setCurrentTime(evt);
  }
}

resumePlaying(localStorage.getItem(LOCALSTATE));

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(LOCALSTATE, data.seconds);
  }, 1000)
);
