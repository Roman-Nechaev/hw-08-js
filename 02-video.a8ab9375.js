const e=document.querySelector("iframe"),t=new Vimeo.Player(e);let r=localStorage.getItem("videoplayer-current-time");var o;(o=r)&&t.setCurrentTime(o),t.on("timeupdate",(function(e){localStorage.setItem("videoplayer-current-time",e.seconds)}));
//# sourceMappingURL=02-video.a8ab9375.js.map
