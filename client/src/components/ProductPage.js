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
        <div className="flex flex-col items-center justify-center mx-auto mt-8 p-8 bg-white rounded-lg shadow-md max-w-3xl">
            <h1 className="text-3xl font-bold mb-4">{prodToRender.name}</h1>
            <h2 className="text-xl font-semibold mb-2">{prodToRender.brand}</h2>
            <img
            className="mt-4 object-none w-full h-64 rounded-lg"
            alt={prodToRender.name}
        />
        <p className="text-xl mt-4">${prodToRender.price.toFixed(2)}</p>
        <div className="mt-4">
            {addedToOrder ? (
            <button className="bg-green-500 rounded px-4 py-2 text-white">
                Added to Order!
            </button>
            ) : (
            <div className="flex items-center">
                <button
                onClick={addToOrder}
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded mr-4"
                >
                Add to Order
                </button>
                <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value, 10)))
                }
                className="border rounded py-1 px-2 text-gray-700 w-16"
                />
            </div>
            )}
        </div>
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
            {renderReviews}
        </div>
        </div>
  );
}


export default ProductPage