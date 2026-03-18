const btn = document.querySelector('.btn-add');
const dialog = document.querySelector('#Dialog');
const submitBtn = document.querySelector('#confirm-btn');
const closeDialog = document.querySelector('#closeDialog');
const formDialog = document.querySelector('#formDialog');
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const cardContainer = document.querySelector('.card-container');
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


    titlePara.textContent = newBook.title;
    authorPara.textContent = newBook.author;
    pagesPara.textContent = newBook.pages;    
    readBtn.textContent = 'TOFIX';
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

function removeBook() {

}