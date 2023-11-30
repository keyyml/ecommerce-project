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
      <div className="bg-white">
        <div className="pt-6">
          <div className="mx-auto mt-6 max-w-2xl">
            <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={prodToRender.image}
                alt={prodToRender.name}
                className="h-full w-full object-cover object-center rounded-lg"
              />
            </div>
          </div>

          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 ">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{prodToRender.name}</h1>
            <div className="mt-4 ">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">${prodToRender.price.toFixed(2)}</p>

              <div className="mt-6">
                {addedToOrder ? (
                  <button className="bg-green-500 rounded px-4 py-2 text-white">Added to Order!</button>
                ) : (
                  <div className="flex items-center">
                    <button onClick={addToOrder} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded mr-4"> Add to Order</button>
                    <input type="number" id="quantity" value={quantity}
                      onChange={(e) =>
                        setQuantity(Math.max(1, parseInt(e.target.value, 10)))
                      }
                      className="border rounded py-1 px-2 text-gray-700 w-16"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{prodToRender.name}</p>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{prodToRender.brand}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}


export default ProductPage