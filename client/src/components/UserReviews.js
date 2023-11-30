import React from "react";


function UserReviews({ user, comment, rating, product }) {
 

  return (
    <div className="mt-4 hover:bg-gray-200 max-w-md max-h-md rounded overflow-hidden shadow-lg bg-white px-6 py-6">
      <p className="text-black font-semibold text-2xl underline decoration-solid">{product.name}</p>
      <p className="text-zinc-900 font-semibold text-sm">{product.brand}</p>
      <div className="text-gray-800 text-xl font-bold flex justify-center">"{comment}"</div>
      <div className="text-gray-800 font-bold text-xl flex justify-center">Rating: {rating}/10</div>
    </div>
);
}

export default UserReviews;