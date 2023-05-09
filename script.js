function Book(title, author, status, pages) {
  this.title = title;
  this.author = author;
  this.status = status;
  this.pages = pages;
}

const addBookBtn = document.querySelector(".add-a-book-btn");
const addBookForm = document.querySelector(".add-book-form");
const form = document.querySelector(".form");
addBookBtn.addEventListener("click", () => {
  addBookForm.style.display = block;
  form.style.display = block;
})


