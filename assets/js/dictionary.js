const pasteBtn = document.querySelector('[data-paste-btn]')
const input = document.querySelector('[data-word-input]')
const searchBtn = document.querySelector('[data-search-btn]')

const wordElm = document.querySelector('[data-word]')
const definitionElm = document.querySelector('[data-definition]')
const audioElm = document.querySelector('[data-audio-elm]')
const partOfElm = document.querySelector('[data-partof]')
const synonymsElm = document.querySelector('[data-similler]')


let audioElmCreate = document.createElement('audio')
audioElmCreate.setAttribute('controls', true)
// Paste Button Function
pasteBtn.addEventListener('click', async () => {
    try {
        const text = await navigator.clipboard.readText()
        input.value += text;
    } catch (error) {
        input.value = "Not working try again. Maybe Permission denied";
    }
})

function data(result, word) {
    if (!result.title) {
        console.log(result)
        wordElm.innerHTML = `${word}<br><hr>`
        for(let i = 0; i < result[0].meanings.length; i++){
            for( let j = 0; j < result[0].meanings[i].definitions.length; j++){
                definitionElm.innerHTML += `${result[0].meanings[i].definitions[j].definition}<br><br>` 
            }
        }

        // definitionElm.innerHTML = result[0].meanings[0].definitions[0].definition
        let audio = result[0].phonetics[0].audio
        audioElmCreate.setAttribute('src', audio)
        audio ? audioElm.appendChild(audioElmCreate) : audioElm.innerHTML = ''
        partOfElm.innerHTML = result[0].meanings[0].partOfSpeech
        for(let i = 0; i < result[0].meanings[0].synonyms.length ; i++){
            synonymsElm.innerHTML += `${result[0].meanings[0].synonyms[i]}<br>`
        }

    } else {
        definitionElm.innerHTML = `No Meaning Found.`
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
    partOfElm.innerHTML = ''
})



