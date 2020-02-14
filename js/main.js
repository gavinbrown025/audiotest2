(() => {
	//variable stack first
	const keys = Array.from(document.querySelectorAll('.key'));
	keys.forEach(key => key.addEventListener('transitionend', removePlayingClass));

	function removePlayingClass(event) {
		event.target.classList.remove('playing');
	}

	function playSound(event) {
		// event is the event that gets generatedwhen you push any key
		// it contains all kinds of information about the event -> the target
		//, what called it, where it happened in the app

		const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`),
			key = document.querySelector(`div[data-key="${event.keyCode}"]`);

		//the ! is a test for inequality -> if thsi expression is not true,
		//then do something also called a bang operator
		if (!audio) { return } // a return is a way to stop function exicution
							// basically means stop code here

		audio.currentTime = 0;
		audio.play();

		key.classList.add('playing');
	}
	// listen for the keyboard event, then do something with it
	window.addEventListener('keydown', playSound);

})();