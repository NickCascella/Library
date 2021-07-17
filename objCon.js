let myLibrary = []
let card = document.getElementById('fill')
let newBtn = document.getElementById('btn')
let clear = document.getElementById('clear')
let submit = document.getElementById('submit')
let closes = document.getElementById('close')
let form = document.getElementById('form')
let readValue = ''


let addDiv = () => {
    const newDiv = document.createElement('div')
    const innerDiv = document.createElement('div')
    const innerDiv2 = document.createElement('div')
    const innerDiv3 = document.createElement('div')
    const readStatus = document.createElement('button')
    readStatus.textContent = readValue
    const removal = document.createElement('button')
    removal.textContent = 'Remove'
    newDiv.classList.add('book-div')
    innerDiv.classList.add('inner-div')
    innerDiv2.classList.add('inner-div')
    innerDiv3.classList.add('inner-div')
    readStatus.classList.add('remove-book')
    if(readStatus.textContent == 'Read'){
        readStatus.classList.add('read')
    } else {
        readStatus.classList.add('not-read')
    }
    removal.classList.add('remove-book')
        for(i = 0; i < myLibrary.length; i++){
           innerDiv.innerHTML = myLibrary[i].name
           innerDiv2.innerHTML = myLibrary[i].author
           innerDiv3.innerHTML = myLibrary[i].pages
           if (i === myLibrary.length - 1){
            removal.addEventListener('click', () => wipe(newDiv))
            readStatus.addEventListener('click', () => {
                if(readStatus.textContent == 'Read'){
                    readStatus.textContent = 'Not Read'
                    readStatus.classList.remove('read')
                    readStatus.classList.add('not-read')
                    
                } else {
                    readStatus.textContent = 'Read'
                    readStatus.classList.remove('not-read')
                    readStatus.classList.add('read')
                }
            })
            removal.id =`${i}`
            newDiv.appendChild(innerDiv)
            newDiv.appendChild(innerDiv2)
            newDiv.appendChild(innerDiv3)
            newDiv.appendChild(readStatus)
            newDiv.appendChild(removal)
            newDiv.id = `book${i}`
            card.appendChild(newDiv)
            } 
        }
    
}

let formCreate = () => {
    document.querySelector(".modal").style.display = 'flex';
}

let hide = () => {
    document.querySelector('.modal').style.display = 'none';
}

let process = (event) => {
    event.preventDefault()
    let name = document.getElementById('name').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let read = document.getElementsByName('read')
    if(read[0].checked == true){
        reads = read[0].value
        readValue = read[0].value
    } else {
        reads = read[1].value
        readValue = read[1].value
    }
    addBook(name,author,pages,reads)
    document.getElementById('name').value = ''
    document.getElementById('author').value = ''
    document.getElementById('pages').value = ''
    for(i=0;i<read.length;i++){
        read[i].checked = false
    }
    hide()
}

let wipe = (x) => {
    x.remove()
}

let erase = () => {
    document.getElementById('fill').innerHTML = ''
}


clear.addEventListener('click', erase)
form.addEventListener('submit', process)
newBtn.addEventListener('click', formCreate);
closes.addEventListener('click', hide);



function book(name,author,pages,read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read 
}

function addBook(name,author,pages,read){
   myLibrary.push(new book(name,author,pages,read))
   addDiv()
}
