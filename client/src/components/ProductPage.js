import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import ReviewCard from "./ReviewCard";
import { useHistory } from "react-router-dom"

function ProductPage({ updateCart, user }){

    const [addedToOrder, setAddedToOrder] = useState(false)
    const [quantity, setQuantity] = useState(1)

    const location = useLocation()
    const prodToRender = location.state?.prodToRender || {}
    const history = useHistory()

    const addToOrder = async () => {
        try {
          await axios.post(`/add_to_order/${prodToRender.id}`, { quantity: quantity })
          if (user) {
            setAddedToOrder(true)
            updateCart(prodToRender.id, quantity)
          } else {
            history.push("/login")
          }
        } catch (error) {
          console.error("Error adding product to order:", error)
        }
      }

    const renderReviews = prodToRender.reviews.map((review) => {
        return (
            <ReviewCard key={review.id} {...review} />
        )
    })

    return(
<div className="bg-white p-8 shadow-md max-w-3xl mx-auto rounded-lg mt-8">
  <div className="flex">
    <div>
      <img
        src={prodToRender.image}
        alt={prodToRender.name}
        className="w-full h-full rounded-lg"
      />
    </div>

    <div className="ml-6">
      <h1 className="text-3xl font-semibold text-gray-800">{prodToRender.name}</h1>
      <h2 className="text-lg font-medium text-gray-600">{prodToRender.brand}</h2>

      <div className="mt-4">
        <p className="text-2xl font-semibold text-darkPinky">${prodToRender.price.toFixed(2)}</p>

        <div className="mt-6">
          {addedToOrder ? (
            <button className="bg-violet-500 text-zinc-900 px-6 py-2 rounded-full">Added to Bag</button>
          ) : (
            <div className="flex items-center">
              <button
                onClick={addToOrder}
                className="bg-darkPinky hover:bg-pinky text-white px-6 py-2 rounded-full"
              >
                Add to Bag
              </button>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
                className="border rounded py-2 px-4 text-gray-700 w-16 ml-4"
              />
            </div>
          )}
        </div>

        <div className="mt-6 space-y-2 text-zinc-900">
          <p className="text-lg">
            <span className="font-semibold">{prodToRender.color}</span>
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
          {renderReviews}
        </div>
      </div>
    </div>
  </div>
</div>
  )
}


export default ProductPage