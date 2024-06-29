// File: library.js

document.addEventListener('DOMContentLoaded', () => {
    const modalContainer = document.getElementById('book-modal');
    const openModalButton = document.querySelector('.data-toggle');
    const closeModalButtons = document.querySelectorAll('[data-bs-dismiss="modal"]');

    openModalButton.addEventListener('click', () => {
        modalContainer.style.display = 'flex';
        modalContainer.focus();
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            modalContainer.style.display = 'none';
        });
    });

    // Close modal when clicking outside the content
    window.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            modalContainer.style.display = 'none';
        }
    });
});
