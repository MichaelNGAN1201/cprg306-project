import React from 'react';

const BookDetail = ({ book }) => {
  const { title, author_name, cover_i, first_publish_year, description } = book;

  return (
    <div className="bg-black p-4 mb-4">
      <h2 className="text-2xl font-bold mb-2">Book Detail</h2>
      <p className="text-white">Book Title: {title}</p>
      <p className="text-white">Author(s): {author_name && author_name.join(', ')}</p>
      <p className="text-white">Published Year: {first_publish_year}</p>
      {cover_i && <img src={`https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`} alt={title} className="mb-2" />}
      <p>{description}</p>
    </div>
  );
};

export default BookDetail;
