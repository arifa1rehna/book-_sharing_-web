const API_URL = "http://localhost:5000/books"; // Backend API URL

document.addEventListener("DOMContentLoaded", () => {
    fetchBooks(); // Load books on page load
    document.getElementById("book-form").addEventListener("submit", addBook);
    document.getElementById("search").addEventListener("input", searchBooks);
});

// 📌 Fetch and Display Books
async function fetchBooks() {
    try {
        const response = await fetch(API_URL);
        const books = await response.json();
        displayBooks(books);
    } catch (error) {
        console.error("Error fetching books:", error);
    }
}

function displayBooks(books) {
    const booksGrid = document.getElementById("books-grid");
    booksGrid.innerHTML = ""; // Clear existing books

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    books.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        bookCard.innerHTML = `
            <img src="${book.image_url}" alt="${book.book_name}" class="book-image">
            <h3>${book.book_name}</h3>
            <p><strong>Author:</strong> ${book.author_name}</p>
            <p><strong>Shared by:</strong> ${book.student_name}</p>
            <a href="https://wa.me/${book.whatsapp_number}" target="_blank">📞 Contact</a>
            ${isLoggedIn ? `<button class="remove-btn" onclick="deleteBook(${book.id})">❌ Remove</button>` : ""}
            <button onclick="toggleAvailability(${book.id}, ${book.is_available})">
                ${book.is_available ? "Mark as Unavailable" : "Mark as Available"}
            </button>
        `;
        booksGrid.appendChild(bookCard);
    });
}


async function addBook(event) {
    event.preventDefault();

    const bookData = {
        image_url: document.getElementById("image-url").value,
        book_name: document.getElementById("book-name").value,
        author_name: document.getElementById("author-name").value,
        student_name: document.getElementById("student-name").value,
        whatsapp_number: document.getElementById("whatsapp-number").value,
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookData),
        });

        if (response.ok) {
            fetchBooks(); // Refresh book list
            document.getElementById("book-form").reset();
        }
    } catch (error) {
        console.error("Error adding book:", error);
    }
}

// 📌 Delete a Book
// 📌 Delete a Book
async function deleteBook(bookId) {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
        alert("You need to log in to delete a book. Redirecting to login page...");
        window.location.href = "login.html"; // Redirect to login page
        return; // Stop further execution
    }

    try {
        await fetch(`${API_URL}/${bookId}`, { method: "DELETE" });
        fetchBooks(); // Refresh book list
    } catch (error) {
        console.error("Error deleting book:", error);
    }
}

// 📌 Toggle Book Availability
async function toggleAvailability(bookId, currentStatus) {
    try {
        await fetch(`${API_URL}/${bookId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ is_available: !currentStatus }),
        });
        fetchBooks(); // Refresh book list
    } catch (error) {
        console.error("Error updating availability:", error);
    }
}

// 📌 Search Books
function searchBooks() {
    const query = document.getElementById("search").value.toLowerCase();
    document.querySelectorAll(".book-card").forEach(card => {
        const title = card.querySelector("h3").innerText.toLowerCase();
        const author = card.querySelector("p").innerText.toLowerCase();
        card.style.display = title.includes(query) || author.includes(query) ? "block" : "none";
    });
}
