// GET ALL KEYS
const keys = document.querySelectorAll('.key')

// tocar notas
function playNote(event) {
  
  let audioKeyCode = getKeyCode(event);
  console.log(audioKeyCode)
  // TYPED OR PRESSED KEY
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

  // IF KEY EXISTS
  const cantFounfAnyKey = !key

  if(cantFounfAnyKey) {
    return
  }
  addPlayingClass(key)
  playAudio(audioKeyCode)
}

function addPlayingClass(key) {
  key.classList.add('playing')
}

function getKeyCode(event) {
  let keyCode;

  const isKeyBoard = event.type === "keydown"
  if(isKeyBoard) {
    keyCode = event.keyCode
  } else {
    keyCode = event.target.dataset.key
  }
  return keyCode
}
// FUNCTION TO PLAY AUDIO CORRESPONDENT
function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
  audio.currentTime = 0; // START SONG AT 0
  audio.play()
}
// RESTART EVENT WHEN CLICK
function removePlayingClass(event) {
  event.target.classList.remove("playing")
}
// MOUSE CLICK
keys.forEach( key => {
  key.addEventListener("click", playNote)
  key.addEventListener("transitionend", removePlayingClass)
})
// KEYBOARD TYPE
window.addEventListener("keydown", playNote)