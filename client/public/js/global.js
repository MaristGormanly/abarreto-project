var audio = new Audio('../music/music.mp3');
var promise = audio.play();

if (promise !== undefined) {
     promise.then(_ => {
     // Autoplay started!
 }).catch(error => {
    // Autoplay was prevented.
    // Show a "Play" button so that user can start playback.
  });
}
