"use client"
import React, { useState } from 'react';
import BookList from './BookMaker/BookList';

const Main = () => {
  const [isInReviewPlatform, setIsInReviewPlatform] = useState(false);
  const [isOnBookListPage, setIsOnBookListPage] = useState(true);

  const handleEnterReviewPlatform = () => {
    setIsInReviewPlatform(true);
    setIsOnBookListPage(false);
  };

  const handleBookDetailsClose = () => {
    setIsInReviewPlatform(false);
    setIsOnBookListPage(true);
  };

  const handleBackToBookList = () => {
    setIsOnBookListPage(true);
  };

  return (
    <div className="bg-black p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to BookMaker</h1>
      {isInReviewPlatform ? (
        <BookList
          onEnterReviewPlatform={handleEnterReviewPlatform}
          onBackToBookList={handleBackToBookList}
        />
      ) : (
        <>
          {isOnBookListPage && (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={handleEnterReviewPlatform}
            >
              Access BookMaker
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Main;