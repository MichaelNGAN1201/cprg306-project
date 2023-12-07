import React, { useState } from 'react';

const ReviewForm = ({ book }) => {
  const [userReview, setUserReview] = useState({ user: '', comment: '' });
  const [reviews, setReviews] = useState([
    { id: 1, user: 'User 1', comment: 'Great book!' },
    { id: 2, user: 'User 2', comment: 'I enjoyed reading this.' },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleAddReview = () => {
    if (userReview.user && userReview.comment) {
      setReviews((prevReviews) => [...prevReviews, { id: Date.now(), ...userReview }]);
      setUserReview({ user: '', comment: '' });
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-black p-4 mt-4">
      <div className="md:w-1/2 pr-4">
        <h2 className="text-2xl font-bold mb-4 text-white">Reviews</h2>
        <ul>
          {reviews.map((review) => (
            <li key={review.id} className="mb-2">
              <strong className="text-white">{review.user}:</strong>{' '}
              <span className="text-white">{review.comment}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 pl-4">
        <h2 className="text-2xl font-bold mb-2 text-white">Add a Review</h2>
        <form>
          <label className="block mb-2 text-white">
            User:
            <input
              className="border rounded w-full py-2 px-3 bg-white text-black"
              type="text"
              name="user"
              value={userReview.user}
              onChange={handleInputChange}
              required
            />
          </label>
          <label className="block mb-2 text-white">
            Comment:
            <textarea
              className="border rounded w-full py-2 px-3 bg-white text-black resize-none"
              name="comment"
              value={userReview.comment}
              onChange={handleInputChange}
              required
            />
          </label>
          <button
            className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-700"
            type="button"
            onClick={handleAddReview}
          >
            Add Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
