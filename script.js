const container = document.querySelector(".container");
const addBookBtn = document.querySelector(".add-a-book-btn");
const addBookForm = document.querySelector(".add-book-form");
const form = document.querySelector(".form");

let library = [];
let dummy = {
  title: 'Atomic Habits',
  author: 'James Clear',
  status: 'Completed',
  pages: 299,
}
library.push(dummy);
console.log(library)
displayBook(library.length - 1);

function Book(title, author, status, pages) {
  this.title = title;
  this.author = author;
  this.status = status;
  this.pages = pages;
}

function addBookToLibrary(title, author, status, pages) {
  const newBook = new Book(title, author, status, pages);
  library.push(newBook);
}

addBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBookForm.style.display = "block";
  form.style.display = "block";
});

// Get Input from Form
const submitBtn = document.querySelector(".submit-button");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const titleName = document.getElementById("book-title");
  const title = titleName.value;

  const authorName = document.getElementById("author");
  const author = authorName.value;

  const statusState = document.getElementById("status");
  const status = statusState.value;

  const pagesCount = document.getElementById("page");
  const pages = pagesCount.value;

  addBookToLibrary(title, author, status, pages);
  form.style.display = "none";
  displayBook(library.length - 1);
});

// Display card on book add
function displayBook(index) {
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
  author.className= "author";
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
  status.className = "what-status";
  statusDetail.appendChild(status);
  status.textContent = library[index].status;

  // Create color notation for status
  if (status.textContent == "Completed") {
    status.style.background = "#90ee90";
  }
  else if (status.textContent == "Not Started") {
    status.style.background = "#f08080";
  }
  else {
    status.style.background = "#ffe200";
  }

  // Change Status


  status.addEventListener('click',()=>{
    if(status.textContent == "Not Started"){
      status.textContent = "In Progress";
      status.style.background = "#ffe200";
    }
    else if(status.textContent == "In Progress"){
      status.textContent = "Completed";
      status.style.background = "#90ee90";
    }
    else{
      status.textContent = "Not Started";
      status.style.background = "#f08080";
    }
  // const dropDown = document.createElement("div");
  // let isDropdownOpen = false;
  //   dropDown.className = "status-dropdown";
  //   status.appendChild(dropDown);

  //   dropDown.setAttribute("style","display:flex;flex-direction:column;background: #fff;padding: 0.2rem;")

  //   const notReadOption = document.createElement("div");
  //   notReadOption.className = "not-read option";
  //   notReadOption.textContent = "Not Started";
  //   dropDown.appendChild(notReadOption);
    
  //   const inProgress = document.createElement("div");
  //   inProgress.className = "in-progress option";
  //   inProgress.textContent = "In Progress";
  //   dropDown.appendChild(inProgress);
  
  //   const completed = document.createElement("div");
  //   completed.className = "completed option";
  //   completed.textContent = "Completed";
  //   dropDown.appendChild(completed);
    
  // },
  // {once: true},);

  // const options = document.querySelectorAll(".option");
  // options.forEach(option => {
  //   option.addEventListener("click",()=>{
  //     status.textContent = option.textContent;
  //     dropDown.style.display = "none";
  //   }) 
  // !Will work on this complex behavior later.
});



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
  removeBook.className = "remove-book";
  removeBook.textContent = "Remove";
  bookCard.appendChild(removeBook);

  removeBook.addEventListener("click", (e) => {
    e.preventDefault();
    const bookIndex = library.indexOf(Book);
    library.splice(bookIndex, 1);

    bookCard.remove();
  });
}


