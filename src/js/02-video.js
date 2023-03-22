import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  const parsedTime = parseInt(currentTime, 10); // parsujemy string do liczby
  if (parsedTime >= 0 && parsedTime < player.duration) {
    // sprawdzamy czy czas jest poprawny
    player.setCurrentTime(parsedTime);
  }
}

player.on(
  'timeupdate',
  throttle(() => {
    const currentTime = Math.round(player.currentTime);
    if (
      !isNaN(currentTime) &&
      currentTime >= 0 &&
      currentTime <= player.duration
    ) {
      localStorage.setItem('videoplayer-current-time', currentTime);
    }
  }, 1000)
);
