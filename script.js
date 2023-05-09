 let library = [];

function Book(title,author,status,pages){
  this.title = title;
  this.author = author;
  this.status = status;
  this.pages = pages;
}
function addBookToLibrary(title, author, status, pages) {
  const newBook = new Book(title,author,status,pages);
  library.push(newBook);
  console.log(library);
}

const addBookBtn = document.querySelector(".add-a-book-btn");
const addBookForm = document.querySelector(".add-book-form");
const form = document.querySelector(".form");

addBookBtn.addEventListener("click", () => {
  addBookForm.style.display = "block";
  form.style.display = "block";
});

const submitBtn = document.querySelector(".submit-button");
submitBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  const titleName = document.getElementById("book-title");
  const title = titleName.value;

  const authorName = document.getElementById("author");
  const author = authorName.value;

  const statusState = document.getElementById("status");
  const status = statusState.value;

  const pagesCount = document.getElementById("page");
  const pages = pagesCount.value;

  addBookToLibrary(title,author,status,pages);
  form.style.display = "none";
});

// Get Input from Form


