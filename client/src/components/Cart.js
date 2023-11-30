import React from "react";
import axios from "axios";

function Cart({ orderDetails, fetchOrderDetails, getUser }) {
    
  const updateQuantity = async (productId, newQuantity) => {
    try {
      await axios.post(`/update_quantity/${productId}`, { quantity: newQuantity })
      fetchOrderDetails()
    } catch (error) {
      console.error("Error updating quantity:", error)
    }
  }

  const removeItem = async (productId) => {
    try {
      await axios.post(`/remove_item/${productId}`)
      fetchOrderDetails()
    } catch (error) {
      console.error("Error removing item:", error)
    }
  }

  return (
<div className="bg-white p-8 shadow-md max-w-9xl mx-auto rounded-lg">
  <h2 className="text-4xl font-bold mb-4">Order Summary</h2>

  {orderDetails ? (
    <div>
      <p className="mb-2 font-medium">Order ID: #{orderDetails.order_id}</p>

      <button className="w-64 font-semibold bg-darkPinky rounded px-6 py-2 text-white mb-4">
        Checkout
      </button>

      <p className="mb-2 text-xl font-semibold">Total Price: ${orderDetails.total_price.toFixed(2)}</p>

      <h3 className="text-2xl font-semibold mb-2">Items:</h3>

      <ul>
        {orderDetails.items.map((item) => (
          <li key={item.product.id} className="flex items-center mb-4 hover:bg-pinky px-6 py-2">
            <div className="w-32 h-32 overflow-hidden mr-4">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-grow">
              <p className="font-semibold">{item.product.name}</p>
              <p className="text-gray-600">${(item.product.price * item.quantity).toFixed(2)}</p>
            </div>

            <div className="flex items-center space-x-4">
              <input
                type="number"
                id={`quantity-${item.product.id}`}
                value={item.quantity}
                className="border rounded py-1 px-2 text-gray-700"
                onChange={(e) => updateQuantity(item.product.id, e.target.value)}
              />
              <button
                onClick={() => removeItem(item.product.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <p className="text-gray-700">LOADING...</p>
  )}
</div>

    // <div>
    //   <h2>Cart</h2>
    //   {orderDetails ? (
    //     <div>
    //       <p>Order ID: {orderDetails.order_id}</p>
    //       <button className="bg-green-500 rounded px-4 py-2 text-white">
    //       Checkout!
    //       </button>
    //       <p>Total Price: ${orderDetails.total_price.toFixed(2)}</p>
    //       <h3>Items:</h3>
    //       <ul>
    //         {orderDetails.items.map((item) => (
    //           <li key={item.product.id}>
    //             {item.product.name} - ${(item.product.price.toFixed(2) * item.quantity)} 
    //             <input
    //               type="number"
    //               id="quantity"
    //               value={item.quantity}
    //               className="border rounded py-1 px-2 text-gray-700"
    //               onChange={(e) => updateQuantity(item.product.id, e.target.value)}
    //             />
    //             <button onClick={() => removeItem(item.product.id)}>Remove</button>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   ) : (
    //     <p>LOADING...</p>
    //   )}
    // </div>
  );
}

export default Cart;
