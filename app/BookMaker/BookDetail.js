import React from 'react';

const BookDetail = ({ book }) => {
  return (
    <div className="bg-black p-4 mb-4">
      <h2 className="text-2xl font-bold mb-2">Book Detail</h2>
      <h3 className="text-lg mb-2">{book.title} by {book.author}</h3>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetail;