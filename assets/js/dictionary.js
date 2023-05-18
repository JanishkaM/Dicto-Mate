const pasteBtn = document.querySelector('[data-paste-btn]')
const input = document.querySelector('[data-word-input]')
const searchBtn = document.querySelector('[data-search-btn]')

const wordElm = document.querySelector('[data-word]')
const definitionElm = document.querySelector('[data-definition]')
const audioElm = document.querySelector('[data-sound-elm]')
const synonymsElm = document.querySelector('[data-similler]')


let audioElmCreate = document.createElement('i')
audioElmCreate.classList.add('bi', 'bi-volume-up', 'pe-2', 'sound-elm')

// Paste Button Function
pasteBtn.addEventListener('click', async () => {
    try {
        const text = await navigator.clipboard.readText()
        input.value += text;
    } catch (error) {
        input.value = "Not working try again. Maybe Permission denied";
    }
})

// 071 8380957

function data(result, word) {
    if (!result.title) {
        console.log(result)
        wordElm.innerHTML = `${word}<hr>`
        // Audio element and add sound
        audioElm.appendChild(audioElmCreate)
        utterance = new SpeechSynthesisUtterance(word)
        utterance.rate = 0.7
        document.querySelector('.sound-elm').addEventListener('click', () => {
            speechSynthesis.cancel()
            speechSynthesis.speak(utterance)
        })



        for (let i = 0; i < result[0].meanings.length; i++) {
            for (let j = 0; j < result[0].meanings[i].definitions.length; j++) {
                definitionElm.innerHTML += `<p><span class="user-select-all">${result[0].meanings[i].definitions[j].definition}</span><br>
                Part of Speech - <b>${result[0].meanings[i].partOfSpeech}</b><br>
                ${result[0].meanings[i].definitions[j].example ? `Examples - <b>${result[0].meanings[i].definitions[j].example}</b>` : ''}
                </p><br>`
            }
        }

        // definitionElm.innerHTML = result[0].meanings[0].definitions[0].definition
        for (let i = 0; i < result[0].meanings.length; i++) {
            for (let j = 0; j < result[0].meanings[i].synonyms.length; j++) {
                synonymsElm.innerHTML += `<p class="user-select-all">${result[0].meanings[i].synonyms[j]} (${result[0].meanings[i].partOfSpeech})</p>`
            }
        }

    } else {
        definitionElm.innerHTML = `<p class="text-danger">We couldn't find a definition for the word you entered. Please check your spelling or try searching for another word.</p>`
        synonymsElm.innerHTML = '<p class="text-danger">Nothing Found !...</p>'
    }
}

function fetchApi(word) {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    fetch(url).then(res => res.json()).then(result => data(result, word))
}

searchBtn.addEventListener('click', () => {
    fetchApi(input.value)
    input.value = ''
    synonymsElm.innerHTML = ''
    definitionElm.innerHTML = ''
})



