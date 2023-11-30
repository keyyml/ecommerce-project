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
    <div>
      <h2>Cart</h2>
      {orderDetails ? (
        <div>
          <p>Order ID: {orderDetails.order_id}</p>
          <button className="bg-green-500 rounded px-4 py-2 text-white">
          Checkout!
          </button>
          <p>Total Price: ${orderDetails.total_price.toFixed(2)}</p>
          <h3>Items:</h3>
          <ul>
            {orderDetails.items.map((item) => (
              <li key={item.product.id}>
                {item.product.name} - ${(item.product.price.toFixed(2) * item.quantity)} 
                <input
                  type="number"
                  id="quantity"
                  value={item.quantity}
                  className="border rounded py-1 px-2 text-gray-700"
                  onChange={(e) => updateQuantity(item.product.id, e.target.value)}
                />
                <button onClick={() => removeItem(item.product.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>LOADING...</p>
      )}
    </div>
  );
}

export default Cart;
