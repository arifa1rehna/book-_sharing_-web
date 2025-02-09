# Book_sharing_web
Read Buddy - Farook College Book Sharing Platform 📚

Welcome to Read Buddy, a student-led initiative to facilitate book sharing among students of Farook College. This platform enables students to add, search, and borrow books from their peers in a seamless way.
Team members

    Arifa rehana
    Fathima Thesni
    Sree Nandana

Features

    View Available Books: Browse a list of books shared by other students.
    Search Books: Search by book name or author.
    Add a Book: Contribute books by adding details such as name, author, and contact info.
    Delete a Book: Remove books that you added.
    Toggle Availability: Mark books as available or unavailable.
    Authentication: Login required to add or manage books.

Tech Stack

    Frontend: HTML, CSS, JavaScript
    Backend: Node.js, Express.js
    Database: Supabase (PostgreSQL)
    Authentication: Supabase Authentication

Setup & Installation
Clone the Repository

git clone https://github.com/arifa1rehna/book-_sharing_-web.git
cd book-_sharing_-web

Install Dependencies

npm install

Configure Environment Variables

Create a .env file in the root directory and add:

SUPABASE_URL=https://uwibafgawvjvbfcsmtmd.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3aWJhZmdhd3ZqdmJmY3NtdG1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwMTIwNjUsImV4cCI6MjA1NDU4ODA2NX0.Um5liDrHBVl0wA-cUXud1a84yvLXtC0Opc_hjCOA-yE 
PORT=5000

Run the Server

node server.js

The server should now be running at http://localhost:5000
Usage

    Login: Use the login page (login.html) with predefined credentials.
    Search Books: Use the search bar to find books by title or author.
    Add Books: Click the "Add Book" button and fill in the details.
    Contact Owners: Click on a book to get the owner's WhatsApp contact.

UI/UX

    *Modern, user-friendly design
    *Responsive layout
    *Easy-to-use book management

🎉 Happy Reading! 📚
