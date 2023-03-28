const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  const parsedTime = parseInt(currentTime, 10);
  if (parsedTime >= 0 && parsedTime < player.getDuration()) {
    player.setCurrentTime(parsedTime);
  }
}

player.on(
  'timeupdate',
  _.throttle(() => {
    const currentTime = Math.round(player.getCurrentTime());
    if (
      !isNaN(currentTime) &&
      currentTime >= 0 &&
      currentTime <= player.getDuration()
    ) {
      localStorage.setItem('videoplayer-current-time', currentTime);
    }
  }, 1000)
);
