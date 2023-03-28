!function(){var e=new Vimeo.Player("vimeo-player"),t=_.throttle((function(e){var t=e.seconds;localStorage.setItem(r,t)}),1e3),r="videoplayer-current-time";e.on("timeupdate",t),e.getCurrentTime().then((function(t){var n=localStorage.getItem(r);null!==n&&e.setCurrentTime(n)}))}();
//# sourceMappingURL=02-video.0db613f3.js.map
