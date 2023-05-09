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

addBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBookForm.style.display = "block";
  form.style.display = "block";
});

// Get Input from Form
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
  displayBook(library.length -1);
});

// Display card on book add
const container = document.querySelector(".container");

function displayBook(index){
  const bookCard = document.createElement("div");
  bookCard.className = "book";
  container.appendChild(bookCard);

  const bookTitle = document.createElement("div");
  bookTitle.className = "book-title";
  bookCard.appendChild(bookTitle);
  bookTitle.textContent = library[index].title;

  const bookDetails = document.createElement("div");
  bookDetails.className = "book-details";
  bookCard.appendChild(bookDetails);

  // Author Details
  const authorDetail = document.createElement("div");
  authorDetail.className = "author detail";
  bookDetails.appendChild(authorDetail);

  const authorHero = document.createElement("div");
  authorHero.className = "author-hero";
  authorDetail.appendChild(authorHero);
  authorHero.textContent = "Author";

  const author = document.createElement("div");
  author.classNae = "author";
  authorDetail.appendChild(author);
  author.textContent = library[index].author;

  // Status Detail
  const statusDetail = document.createElement("div");
  statusDetail.className = "status detail";
  bookDetails.appendChild(statusDetail);

  const statusHero = document.createElement("div");
  statusHero.className = "status-hero";
  statusDetail.appendChild(statusHero);
  statusHero.textContent = "Status";

  const status = document.createElement("div");
  status.classNae = "what-status";
  statusDetail.appendChild(status);
  status.textContent = library[index].status;

  // Pages Details
  const pagesDetail = document.createElement("div");
  pagesDetail.className = "pages detail";
  bookDetails.appendChild(pagesDetail);

  const pagesHero = document.createElement("div");
  pagesHero.className = "pages-hero";
  pagesDetail.appendChild(pagesHero);
  pagesHero.textContent = "Pages";

  const pages = document.createElement("div");
  pages.classNae = "page-nos";
  pagesDetail.appendChild(pages);
  pages.textContent = library[index].pages;

  const removeBook = document.createElement("div");
  removeBook.className ="remove-book";
  removeBook.textContent = "Remove";
  removeBook.setAttribute("style","")
  bookCard.appendChild(removeBook);
}


