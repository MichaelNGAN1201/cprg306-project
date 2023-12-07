import React, { useState, useEffect } from 'react';
import BookDetail from './BookDetail';
import ReviewForm from './ReviewForm';
import fetchData from './data';

const BookList = ({ onEnterReviewPlatform, onBackToBookList }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('programming'); // Default category

  useEffect(() => {
    fetchData(selectedCategory)
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, [selectedCategory]);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleBackToBookList = () => {
    setSelectedBook(null);
    onBackToBookList();
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const sortedBooks = books.slice().sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="bg-gray-800 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {selectedBook ? (
        <>
          <div className="mb-4">
            <BookDetail book={selectedBook} />
          </div>
          <div className="mb-4">
            <ReviewForm book={selectedBook} />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2 md:mt-0 md:col-span-2"
            onClick={handleBackToBookList}
          >
            Back to Book List
          </button>
        </>
      ) : (
        <>
          <div className="mb-4">
            <h2 className="text-3xl font-bold mb-4 text-white">Book List</h2>
            <label className="text-white mr-2">Category:</label>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="bg-white text-black px-2 py-1 rounded"
            >
              <option value="programming">Programming</option>
              <option value="fiction">Fiction</option>
              <option value="history">History</option>
              <option value="science">Science</option>
              <option value="self-help">Self-Help</option>
              <option value="mystery">Mystery</option>
              <option value="fantasy">Fantasy</option>
              <option value="biography">Biography</option>
              <option value="romance">Romance</option>
              <option value="horror">Horror</option>
            </select>
          </div>
          <div>
            <ul>
              {sortedBooks.map((book) => (
                <li key={book.key} className="mb-4">
                  <h3 className="text-lg mb-2 text-white">Book Title: {book.title}</h3>
                  <p className="text-white">Author(s): {book.author_name && book.author_name.join(', ')}</p>
                  <button
                    className="bg-green-500 text-white px-2 py-1 mt-2 rounded hover:bg-green-700"
                    onClick={() => handleBookClick(book)}
                  >
                    View Book Reviews
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default BookList;




