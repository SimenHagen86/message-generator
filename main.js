// Variables

const btn = document.getElementById('new-word')
const word = document.getElementById('word')
//TODO connect to an word api

// add words array -
const words = ['hi', 'ho', 'you', 'are']
const words2 = ['hello', 'world']
const words3 = ['paul', 'jake', 'john']
// add event listener
btn.addEventListener('click', randomWord)

// function for randomize an array
function randomWord() {
  let random = Math.floor(Math.random() * words.length)
  let random2 = Math.floor(Math.random() * words2.length)
  let random3 = Math.floor(Math.random() * words3.length)
  //TODO think this can be cleaner
  word.innerText = words[random] + ' ' + words2[random2] + ' ' + words3[random3]
}
