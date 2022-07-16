// GET ALL KEYS
const keys = document.querySelectorAll('.key')

<<<<<<< HEAD
=======

>>>>>>> cb7e30cc6cdc0bd234bc2d5dbb6338677a31dc44
// tocar notas
function playNote(event) {
  
  let audioKeyCode = getKeyCode(event);
<<<<<<< HEAD
  console.log(audioKeyCode)
=======
>>>>>>> cb7e30cc6cdc0bd234bc2d5dbb6338677a31dc44

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



function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
  audio.currentTime = 0;
  audio.play()
}

function removePlayingClass(event) {
  event.target.classList.remove("playing")
}
// clicar com mouse
keys.forEach( key => {
  key.addEventListener("click", playNote)
  key.addEventListener("transitionend", removePlayingClass)
})


// tipo de teclas
window.addEventListener("keydown", playNote)