import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

function MakeupPage({updateCart, user}){

    const [makeupArr, setMakeupArr] = useState([]);

    useEffect(() => {
      const fetchMakeup = async () => {
        try {
          const response = await axios.get('/products')
          const filteredMakeup = response.data.filter(product =>
            product.product_categories.some(product_categories => product_categories.category_id === 8))
          setMakeupArr(filteredMakeup)
        } catch (error) {
          console.error('Error fetching products:', error)
        }
      };
  
      fetchMakeup()
    }, [])

    const makeupToDisplay = makeupArr.map((product) => {
        return(
            <ProductCard key={product.id} {...product} updateCart={updateCart} user={ user }/>
        )
    })

    return(
      <>
        <div className="flex flex-row justify-center mt-8">
            <h1 className="text-6xl font-bold" >Makeup Products</h1>
        </div>
        <div className="container mx-auto mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
             {makeupToDisplay}
          </div>
        </div>
      </>
    )
}

export default MakeupPage