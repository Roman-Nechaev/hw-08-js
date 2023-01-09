!function(){var e,t=document.querySelector("iframe"),o="videoplayer-current-time",r=new Vimeo.Player(t),n=localStorage.getItem(o);(e=n)&&r.setCurrentTime(e),r.on("timeupdate",(function(e){localStorage.setItem(o,e.seconds)}))}();
//# sourceMappingURL=02-video.b672af57.js.map
