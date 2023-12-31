import React from "react";


function ReviewCard({ user, comment, rating, product }) {
 

  return (
    <div className="mt-4 hover:bg-gray-200 max-w-xs rounded overflow-hidden shadow-lg bg-white px-6 py-4">
      <div className="font-semibold text-lg">Review by: {user.first_name}</div>
      <p className="text-gray-700 text-2xl font-bold">{comment}</p>
      <div className="text-gray-700 font-bold text-xl flex justify-center">Rating: {rating}/10</div>
    </div>
);
}

export default ReviewCard;
