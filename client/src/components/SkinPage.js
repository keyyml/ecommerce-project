import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";


function SkinPage({updateCart, user}){

    const [prodsArr, setProdsArr] = useState([]);

    useEffect(() => {
      const fetchProds = async () => {
        try {
          const response = await axios.get('/products')
          const filteredProds = response.data.filter(product =>
            product.product_categories.some(product_categories => product_categories.category_id === 6))
          setProdsArr(filteredProds)
        } catch (error) {
          console.error('Error fetching products:', error)
        }
      };
  
      fetchProds()
    }, [])

    const prodsToDisplay = prodsArr.map((product) => {
        return(
            <ProductCard key={product.id} {...product} updateCart={updateCart} user={ user }/>
        )
    })

    return(
      <>
      <div className="flex flex-row justify-center mt-8">
          <h1 className="text-6xl font-bold" >Skin Care</h1>
      </div>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
           {prodsToDisplay}
        </div>
      </div>
    </>
    )
}

export default SkinPage