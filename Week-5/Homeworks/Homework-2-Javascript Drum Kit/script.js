function playSound(keyCode) {
  // Select audio and button elements based on key code
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const button = document.querySelector(`.drum[data-key="${keyCode}"]`);

  if (!audio) return; // If no audio, exit

  audio.currentTime = 0; // Reset audio playback
  audio.play(); // Play the sound

  button.classList.add("playing"); // Add 'playing' class for visual effect
  setTimeout(() => button.classList.remove("playing"), 100); // Remove effect after 100ms
}

// Add click event listener to each drum button
document.querySelectorAll(".drum").forEach((button) => {
  button.addEventListener("click", function () {
    playSound(this.getAttribute("data-key")); // Play sound on click
  });
});

// Add keydown event listener for playing sound via keyboard
window.addEventListener("keydown", function (e) {
  playSound(e.keyCode); // Play sound on key press
});
