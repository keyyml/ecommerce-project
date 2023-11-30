import React from "react";

function User({ user }) {

  console.log(user)

  return (
    <>
      {user ? (
        <div>
          <h1>Welcome to BeautyEcommerce</h1>
          <h3>Account Info:</h3>
          <p>Name: {user.first_name} {user.last_name}</p>
          <p>Email: {user.email}</p>
          <button>ADD ADDRESS</button>
          <button>ADD PHONE NUMBER</button>
          <h2>Reviews: </h2>
        </div>
      ) : (
        <h1>LOADING..</h1>
      )}
    </>
  );
}

export default User;
