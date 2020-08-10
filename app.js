document.getElementById('book-form').addEventListener('submit',addToBookList);


function addToBookList(event) {
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);
    const ui = new UI();
    if (title === '' || author === '' || isbn === '') {
        ui.showAlert("Please fill in all fields", "error");
    } else {
        ui.addToList(book);
        // Add to Local Storage
        Store.addBook(book);
        ui.clearFields();
        ui.showAlert("Book Added!", "success");
    }
    
    event.preventDefault();
}

document.getElementById('book-list').addEventListener('click', deleteItem);

function deleteItem(event) {
    const ui = new UI();
    ui.deleteBook(event.target);
    Store.removeBook(event.target.parentElement.previousElementSibling.textContent);
    ui.showAlert('Book Removed!', 'success');
    event.preventDefault();
}

