const btn = document.querySelector('.btn-add');
const dialog = document.querySelector('#Dialog');
const submitBtn = document.querySelector('#confirm-btn');
const closeDialog = document.querySelector('#closeDialog');
const formDialog = document.querySelector('#formDialog');
let library = [];

function Books(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID(id);
}

function addBookToLibrary(title, author, pages, read) {

    let newBook = new Books(title, author, pages, read);

    // make this loop create a div with all this data and then add the class card
 let loop = library.forEach((book) => {
 console.log(`  ${book.title}
  ${book.author}
  ${book.pages}
  ${book.read}`)
});

    return library.push(newBook);
}

addBookToLibrary('the hobb', 'muself', 12, 'yes');
addBookToLibrary('nhhgghgghh', 'dych', 5, 'yes');

btn.addEventListener('click', () => {
  dialog.showModal();
})

submitBtn.addEventListener('click', (event) => {
   event.preventDefault();
})

closeDialog.addEventListener('click', () => {
  formDialog.reset();
  dialog.close();
})

