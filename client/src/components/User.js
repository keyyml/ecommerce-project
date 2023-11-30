import React from "react";
import ReviewCard from "./ReviewCard";

function User({ user }) {

  if (!user) {
    return <h1>Loading...</h1>
  }

  const renderReviews = user.reviews.map((review) => {
    return (
        <ReviewCard key={review.id} {...review} user = {user} />
    )
})

  return (
    <div className="bg-white p-6 shadow-md rounded-md">
      <h1 className="text-4xl font-bold mb-4">Welcome to BeautyEcommerce</h1>
      <div className="border-b border-gray-300 pb-4 mb-4">
        <h3 className="text-2xl font-semibold mb-2">Account Info:</h3>
        <p className="text-zinc-700">
          <span className="mb-2 text-lg font-semibold">Name: {user.first_name} {user.last_name}</span>
        </p>
        <p className="text-zinc-700">
          <span className="mb-2 text-lg font-semibold">Email: {user.email}</span>
        </p>
      </div>
      <div className="flex space-x-4">
        <button className="bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Add Address
        </button>
        <button className="bg-fuchsia-600 text-white px-4 py-2 rounded-md hover:bg-green-600">
          Add Phone Number
        </button>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Reviews:</h2>
          {renderReviews}
      </div>
    </div>
  );
}

export default User;
