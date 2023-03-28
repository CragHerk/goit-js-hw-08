const e=new Vimeo.Player("vimeo-player"),t=_.throttle((function(e){const t=e.seconds;localStorage.setItem(o,t)}),1e3),o="videoplayer-current-time";e.on("timeupdate",t),e.getCurrentTime().then((t=>{const n=localStorage.getItem(o);null!==n&&e.setCurrentTime(n)}));
//# sourceMappingURL=02-video.ecfe758f.js.map
