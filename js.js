const btn = document.querySelector('.btn-add');
const dialog = document.querySelector('#Dialog');
const submitBtn = document.querySelector('#confirm-btn');
const closeDialog = document.querySelector('#closeDialog');
const formDialog = document.querySelector('#formDialog');
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const cardContainer = document.querySelector('.card-container');
const checkbox = document.querySelector('#read');
let ischecked = true;
let library = [];

function Books(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID(id);
}

function addBookToLibrary(book) {

    let newBook = new Books(title.value, author.value, pages.value, read.checked);
    library.push(newBook);

    let titlePara = document.createElement('p');
    let authorPara = document.createElement('p');
    let pagesPara = document.createElement('p');
    let readBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');

    // create a div with class card and then a child class card-content
    let card = document.createElement('div');
    let cardContent = document.createElement('div');
    let divBtn = document.createElement('div');
    card.classList.add('card');
    cardContent.classList.add('card-content');
    deleteBtn.classList.add('deleteBtn');


    titlePara.textContent = newBook.title;
    authorPara.textContent = newBook.author;
    pagesPara.textContent = newBook.pages;    
    deleteBtn.textContent = 'REMOVE';

    cardContainer.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(titlePara);
    cardContent.appendChild(authorPara);
    cardContent.appendChild(pagesPara);
    cardContent.appendChild(divBtn)
    divBtn.appendChild(readBtn);
    readBtn.after(deleteBtn);

    divBtn.classList.add('divBtn');

    //assign the attribute id to the card class
    card.setAttribute('data-author', newBook.author)
    let cardId = card.getAttribute("data-author");
    // if the dataset equals the id attribute of the book, remove that object
    deleteBtn.addEventListener('click', (e) => {
      if (cardId === newBook.author) {
        const index = library.findIndex(book => book.author === cardId)
        library.splice(index, 1)
      }
      deleteBtn.parentElement.parentElement.parentElement.remove()
    })

    
    //check the condition
    if (checkbox.checked) {
      readBtn.textContent = "READ";
      readBtn.classList.add('read');
    } else {
      readBtn.textContent = "NOT READ";
      readBtn.classList.add('noread');
    }

    //toggle btn    

    readBtn.addEventListener('click', function() {
      if (this.classList.contains('noread')) {
        readBtn.classList.remove('noread');
        readBtn.classList.add('read');
        readBtn.textContent = "READ";
        readBtn.style.backgroundColor = "aqua";
      } else {
        readBtn.classList.remove('read');
        readBtn.classList.add('noread');
        readBtn.textContent = "NOT READ";
        readBtn.style.backgroundColor = "yellow";
      }
      })

    return newBook;
}


btn.addEventListener('click', () => {
  dialog.showModal();
})

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  addBookToLibrary();
  dialog.close();
})

closeDialog.addEventListener('click', () => {
  formDialog.reset();
  dialog.close();
})
