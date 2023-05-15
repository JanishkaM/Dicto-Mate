// dicto.html
const addWordsElm = document.querySelector('[data-add-words-elm]')
const addWordBtn = document.querySelector('[data-add-word-btn]')
const getWordinput = document.querySelector('[data-word-input]')
const showReslt = document.querySelector('[data-live-reslt]')
const resetDicto = document.querySelector('[data-reset-dicto-btn]')

const createDictoElm = document.querySelector('[data-create-dicto-elm]')
const createDictoInput = document.querySelector('[data-dicto-input]')
const createDictoBtn = document.querySelector('[data-create-dicto-btn]')

let dictoName

const showDictoElm = document.querySelector('[data-show-dicto-elm]')

const showAllDictoElm = document.querySelector('[data-show-all-dicto-elm]')

let oldDictoNames
if (localStorage.getItem('oldDicto')) {
    oldDictoNames = JSON.parse(localStorage.getItem('oldDicto'))
} else {
    oldDictoNames = []
}


let word
let wordsArry = []

createDictoInput.addEventListener('keyup', () => {
    dictoName = createDictoInput.value
})

// Create Dicto 
createDictoBtn.addEventListener('click', () => {
    if(createDictoInput.value){
        if (!oldDictoNames.includes(dictoName)) {
            oldDictoNames.push(dictoName)
          }
            createDictoInput.value = ''
            createDictoElm.classList.add('d-none')
            addWordsElm.classList.remove('d-none')
        }
    }
)

addWordBtn.addEventListener('click', addword = () => {
    if (getWordinput.value) {
        let word = getWordinput.value.toLowerCase()
        wordsArry.push(word)
        showReslt.innerHTML += `

        <li class="list-group-item text-uppercase">
            ${word}
        </li>
        `
        getWordinput.value = ''
        localStorage.setItem('oldDicto', JSON.stringify(oldDictoNames));
        localStorage.setItem(dictoName, JSON.stringify(wordsArry));
        // console.log(wordsArry)
    }
})

resetDicto.addEventListener('click', () => {
    addword()
    createDictoElm.classList.remove('d-none')
    addWordsElm.classList.add('d-none')
    wordsArry = []
    showReslt.innerHTML = ''
    location.reload()
})

// Showing Old Data

let getOldDicto = JSON.parse(localStorage.getItem('oldDicto'))
let eachArry

getOldDicto.forEach(name => {
    eachArry = JSON.parse(localStorage.getItem(name))
    console.log(eachArry)

    let divCol = document.createElement('div')
    divCol.classList.add('col', 'my-4')

    let divCard = document.createElement('div')
    divCard.classList.add('card')

    let divHead = document.createElement('div')
    divHead.classList.add('card-header', 'text-capitalize')

    let divBody = document.createElement('div')
    divBody.classList.add('card-body')


    let ul = document.createElement('ul')
    ul.classList.add('list-group', 'list-group-flush', 'text-capitalize')


    // Practice Button Create and Function
    let practiceBtn = document.createElement('a')
    practiceBtn.classList.add('btn', 'btn-primary', 'm-1')
    practiceBtn.setAttribute('href', 'practice.html')
    practiceBtn.setAttribute('data-id', name)

    practiceBtn.addEventListener('click', () => {
        let id = practiceBtn.getAttribute('data-id')
        localStorage.setItem('selectedDicto', id)
    })



    // Delete Button create and Function    
    let deleteBtn = document.createElement('a')
    deleteBtn.classList.add('btn', 'btn-danger', 'm-1')
    deleteBtn.setAttribute('data-id', name)

    deleteBtn.addEventListener('click', () => {
        let id = practiceBtn.getAttribute('data-id')
        const index = oldDictoNames.indexOf(id);
        const x = oldDictoNames.splice(index, 1);
        localStorage.removeItem(id)
        localStorage.setItem('oldDicto', JSON.stringify(oldDictoNames));
        location.reload()
        let y = localStorage.getItem('selectedDicto')
        if( y === id){
            localStorage.setItem('selectedDicto', '')
        }
    })


    practiceBtn.innerHTML = "Practice"
    deleteBtn.innerHTML = '<i class="bi bi-trash"></i>'

    divBody.appendChild(practiceBtn)
    divBody.appendChild(deleteBtn)


    divCol.appendChild(divCard)
    divCard.appendChild(divHead)
    divCard.appendChild(ul)
    divCard.appendChild(divBody)

    // divBody.innerHTML += `
    //     <a href="practice.html" class="btn btn-primary mt-1" data-id="${name}">Practice</a>
    //     <a class="btn btn-danger mt-1" data-id="${name}" onclick="delete()">Delete</a>
    //                      `

    showAllDictoElm.appendChild(divCol)
    divHead.innerHTML += 'Name <b>' + name + '<b>'

    eachArry.forEach(item => {
        let listForUl = document.createElement('li')
        listForUl.classList.add('list-group-item')
        ul.appendChild(listForUl)
        listForUl.textContent += item
    })
})

