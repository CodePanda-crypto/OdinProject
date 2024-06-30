// File: library.js

document.addEventListener("DOMContentLoaded", () => {
  const modalContainer = document.getElementById("book-modal");
  const openModalButton = document.querySelector(".open-modal-btn");
  const closeModalButtons = document.querySelectorAll(
    '[data-bs-dismiss="modal"]'
  );
  const addBookButton = document.getElementById("add-book");
  const bookForm = document.getElementById("book-form");
  const bookTitle = document.getElementById("book-title");
  const bookAuthor = document.getElementById("book-author");
  const bookPages = document.getElementById("book-pages");
  const bookRead = document.getElementById("book-read");
  const bookTitleFeedback = document.getElementById("book-title-feedback");
  const bookAuthorFeedback = document.getElementById("book-author-feedback");
  const bookPagesFeedback = document.getElementById("book-pages-feedback");
  const booksContainer = document.getElementById("books-container");

  let books = [
    {
      title: "Orientalism",
      author: "Edward Said",
      pages: 368,
      read: "Read",
    },
    {
      title: "Manufacturing Consent",
      author: "Noam Chomsky",
      pages: 480,
      read: "Read",
    },
  ];

  // Render the initial set of books
  renderBooks();

  openModalButton.addEventListener("click", () => {
    modalContainer.style.display = "flex";
    modalContainer.focus();
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modalContainer.style.display = "none";
      resetForm();
    });
  });

  // Close modal when clicking outside the content
  window.addEventListener("click", (e) => {
    if (e.target === modalContainer) {
      modalContainer.style.display = "none";
      resetForm();
    }
  });

  addBookButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateForm()) {
      addBook();
    }
  });

  function validateForm() {
    let isValid = true;

    // Validate book title
    if (bookTitle.value.trim() === "") {
      bookTitleFeedback.textContent = "*Title is required.";
      bookTitleFeedback.style.color = "red";
      isValid = false;
    } else {
      bookTitleFeedback.textContent = "";
    }

    // Validate book author
    if (bookAuthor.value.trim() === "") {
      bookAuthorFeedback.textContent = "*Author is required.";
      bookAuthorFeedback.style.color = "red";
      isValid = false;
    } else {
      bookAuthorFeedback.textContent = "";
    }

    // Validate book pages
    if (
      bookPages.value.trim() === "" ||
      isNaN(bookPages.value) ||
      bookPages.value <= 0
    ) {
      bookPagesFeedback.textContent = "*Please enter a valid number of pages.";
      bookPagesFeedback.style.color = "red";
      isValid = false;
    } else {
      bookPagesFeedback.textContent = "";
    }

    return isValid;
  }

  function addBook() {
    const book = {
      title: bookTitle.value,
      author: bookAuthor.value,
      pages: bookPages.value,
      read: bookRead.checked ? "Read" : "Unread",
    };
    books.push(book);
    renderBooks();
    modalContainer.style.display = "none";
    resetForm();
  }

  function resetForm() {
    bookForm.reset();
    bookTitleFeedback.textContent = "";
    bookAuthorFeedback.textContent = "";
    bookPagesFeedback.textContent = "";
  }

  function renderBooks() {
    booksContainer.innerHTML = "";
    books.forEach((book, index) => {
      const bookCard = document.createElement("div");
      bookCard.classList.add("book-card");
      bookCard.innerHTML = `
                  <div class="card">
                      <div class="card-header">
                          <h3>${book.title}</h3>
                      </div>
                      <div class="card-body">
                          <ul class="book-data">
                              <li>Author: ${book.author}</li>
                              <li>Pages: ${book.pages}</li>
                              <li>${book.read}</li>
                          </ul>
                      </div>
                      <div class="card-footer">
                          <div class="btn-group">
                              <button type="button" class="btn btn-sm btn-outline-secondary" onclick="deleteBook(${index})" title="Delete">Delete</button>
                              <button type="button" class="btn btn-sm btn-outline-secondary" onclick="toggleReadStatus(${index})" title="Read Status">${
        book.read === "Read" ? "Mark as Unread" : "Mark as Read"
      }</button>
                          </div>
                      </div>
                  </div>`;
      booksContainer.appendChild(bookCard);
    });
  }

  window.deleteBook = function (index) {
    books.splice(index, 1);
    renderBooks();
  };

  window.toggleReadStatus = function (index) {
    books[index].read = books[index].read === "Read" ? "Unread" : "Read";
    renderBooks();
  };
});
