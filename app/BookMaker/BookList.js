import React, { useState } from 'react';
import BookDetail from './BookDetail';
import ReviewForm from './ReviewForm';

const BookList = ({ onEnterReviewPlatform, onBackToBookList }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', description: 'This is a great book.' },
    { id: 2, title: 'Book 2', author: 'Author 2', description: 'Another awesome book.' },
  ];

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleBackToBookList = () => {
    setSelectedBook(null);
    onBackToBookList(); // Call the function to navigate back to the book list page
  };

  return (
    <div className="bg-gray-800 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {selectedBook ? (
        <>
          <BookDetail book={selectedBook} />
          <ReviewForm book={selectedBook} />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleBackToBookList}
          >
            Back to Book List
          </button>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-4 text-white">Book List</h2>
          <ul>
            {books.map(book => (
              <li key={book.id} className="mb-2">
                {book.title} by {book.author}
                <button
                  className="bg-green-500 text-white px-2 py-1 ml-2 rounded hover:bg-green-700"
                  onClick={() => handleBookClick(book)}
                >
                  View Book Reviews
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default BookList;