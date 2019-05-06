document.addEventListener('keydown', function(event){
  if(event.keyCode == 32){
    window.location = "/setup";
  }
});

function blink() {
   var f = document.getElementById('msg');
   setInterval(function() {
      f.style.display = (f.style.display == 'none' ? '' : 'none');
   }, 1000);
}

blink();

function mainmenu(){
  window.location = "/mainmenu";
}
