document.addEventListener('keydown', function(event){
  if(event.keyCode == 32) {
    loadPromise(0)
  }
});




function loadPromise(screenId) {
	fetch('/api/setup/screen/' + screenId).then(
		function(response) {
			response.text().then(function(data) {
					console.log('success! ' + data);
					updateDiv(data);
			});
		},
		function() {
			console.log('failure of ajax_info.txt call!');
		}
	);
}

function updateDiv(content) {
  var div = document.getElementById('screen');
  div.innerHTML = setupScreens[0];
}

function mainmenu(){
  window.location = "/mainmenu";
}
