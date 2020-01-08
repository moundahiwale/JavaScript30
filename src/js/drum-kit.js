(() => {
  const playSound = e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    // If keys are pressed in succession, rewind the audio to the start
    audio.currentTime = 0;
    audio.play();

    // To add transition effects when the keys are pressed
    key.classList.add("playing");

    // Remove the class when the sound has stopped playing/transition end
    const keys = document.querySelectorAll(`.key`);
    keys.forEach(key => {
      key.addEventListener("transitionend", removeTransition);
    });
  };

  // If using the arrow function syntax, i.e. const removeTransition = (e) => ... this will be binded to Window object
  // Hence in this case, following will retain this to the pressed key
  function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
  }

  window.addEventListener("keydown", playSound);
})();
