const player = new Vimeo.Player('vimeo-player');
const timeUpdateThrottled = _.throttle(saveCurrentTime, 1000);
const currentTimeKey = 'videoplayer-current-time';

player.on('timeupdate', timeUpdateThrottled);

function saveCurrentTime(event) {
  const currentTime = event.seconds;
  localStorage.setItem(currentTimeKey, currentTime);
}

player.getCurrentTime().then(time => {
  const storedTime = localStorage.getItem(currentTimeKey);
  if (storedTime !== null) {
    player.setCurrentTime(storedTime);
  }
});
