const mainStart = document.querySelector('[data-main-start]')
const mainStartName = document.querySelector('[data-start-dicto-name]')
const startBtn = document.querySelector('[data-start-btn]')

const select = document.querySelector('[data-select]')
const testVoiceBtn = document.querySelector('[data-test-voice-btn]')


const practiceWordsInput = document.querySelector("[data-practice-word-input]")
const practiceWordsBtn = document.querySelector("[data-practice-next-btn]")
const stillWordsCountElm = document.querySelector("[data-still-words]")
const voiceAgainBtn = document.querySelector('[data-voice-btn]')

const dictoNameEl = document.querySelector("[data-dicto-name]")
const correctWordsEl = document.querySelector("[data-correct-words]")
const wrongWordsEl = document.querySelector("[data-wrong-words]")
const correctWordsCountEl = document.querySelector("[data-correct-word-count]")
const mainPracticeEl = document.querySelector("[data-main-practice]")
const mainResultEl = document.querySelector("[data-main-result]")

let practiceWordsArry

let selectedDicto = localStorage.getItem("selectedDicto")

// console.log(selectedDicto)

if (selectedDicto) {
  practiceWordsArry = JSON.parse(localStorage.getItem(selectedDicto))
  mainStartName.innerHTML = `Dicto Name - ${selectedDicto}`
  dictoNameEl.innerHTML = `Dicto Name - ${selectedDicto}`
}
let pracWord
let correctWordsArry = []
let wrongWordsArry = []
let wordCount = 0
let correctWordsCount = 0
let stillWordsCount

if (practiceWordsArry) {
  stillWordsCount = practiceWordsArry.length
} else {
  stillWordsCount = 0
}

voiceAgainBtn.addEventListener('click', () => {
  voiceGenarate()
})

let voices

window.speechSynthesis.onvoiceschanged = function () {
  // Get a list of all available voices
  voices = window.speechSynthesis.getVoices();
  // Log the list of voices to the console
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === 'Google UK English Male') {
      select.innerHTML += `<option value="${i}" selected>${voices[i].name}</option>`
    } else {
      select.innerHTML += `<option value="${i}">${voices[i].name}</option>`
    }
  }
}

testVoiceBtn.addEventListener('click', ()=> {
  speechSynthesis.cancel()
  utterance = new SpeechSynthesisUtterance('Test Voice')
  utterance.rate = 0.8
  if(voices){
    utterance.voice = voices[select.value]
  }
  speechSynthesis.speak(utterance)
  
})

function voiceGenarate() {
  speechSynthesis.cancel()
  utterance = new SpeechSynthesisUtterance(practiceWordsArry[wordCount])
  utterance.rate = 0.8
  if(voices){
    utterance.voice = voices[select.value]
  }
  speechSynthesis.speak(utterance)
}


stillWordsCountElm.innerHTML = `${stillWordsCount}`

startBtn.addEventListener('click', () => {
  mainStart.classList.add('d-none')
  mainPracticeEl.classList.remove('d-none')

  setTimeout(voiceGenarate, 1000)

  if (stillWordsCount) {
    for (let i = 0; i < stillWordsCount; i++) {
      practiceWordsBtn.addEventListener("click", () => {
        if (stillWordsCount) {
          if (practiceWordsInput.value) {
            pracWord = practiceWordsInput.value.toLowerCase()
            console.log(pracWord)
            practiceWordsInput.value = ""

            if (practiceWordsArry[wordCount] === pracWord) {
              correctWordsArry.push(practiceWordsArry[wordCount])
              correctWordsEl.innerHTML += `<li class="list-group-item text-uppercase">${practiceWordsArry[wordCount]}</li>`
              console.log("correct")
              correctWordsCount += 1
              correctWordsCountEl.innerHTML = `<h4>Correct Word Count : ${correctWordsCount}/${practiceWordsArry.length}</h4>`
            } else {
              wrongWordsArry.push(practiceWordsArry[wordCount])
              console.log("wrong")
              wrongWordsEl.innerHTML += `<li class="list-group-item text-uppercase">${practiceWordsArry[wordCount]}  <b>${pracWord}</b></li>`
            }

            wordCount += 1

            voiceGenarate()

            console.log(correctWordsArry)
            console.log(wrongWordsArry)
            stillWordsCount -= 1
            stillWordsCountElm.innerHTML = `${stillWordsCount}`
          }
        } else {
          mainPracticeEl.classList.add('d-none')
          mainResultEl.classList.remove('d-none')
        }
      })
    }
  } else {
    practiceWordsBtn.disabled = true
    practiceWordsBtn.textContent = "No Dicto Found"
  }
})

