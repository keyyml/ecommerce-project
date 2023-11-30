import React, { useEffect, useState } from "react";
import axios from "axios";
import { Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import Cart from "./Cart";
import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";
import User from "./User";
import HomePage from "./HomePage"
import Categories from "./Categories";
import Banner from "./Banner";
import MakeupPage from "./MakeupPage";
import HairPage from "./HairPage";
import SkinPage from "./SkinPage";
import ProductPage from "./ProductPage";
import UserContext from "./UserContext";

function App() {

    const [productsArray, setProductsArray] = useState([])
    const [prodCatArr, setProdCatArr] = useState([])
    const [orderDetails, setOrderDetails] = useState(null)
    const [user, setUser] = useState(null)


    useEffect(() => {
        fetch("/products")
        .then(resp => resp.json())
        .then((data) => setProductsArray(data))
    }, [])

    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get("/checkout")
        if (response.data.message === "NO user") {
            setOrderDetails(null)
        } else {
            setOrderDetails(response.data)
        }
      } catch (error) {
        console.error("Error fetching order details:", error)
      }
    }
  
    useEffect(() => {
      fetchOrderDetails()
    }, [])

    const getUser = async () => {
      try {
        const response = await axios.get("/profile")
        if (response.data.message === "NO user") {
          setUser(null)
        } else {
          setUser(response.data)
        }
      } catch (error) {
        console.error("Error fetching:", error)
      }
    }

    useEffect(() => {  
      getUser()
    }, [])
  
    const updateCart = async (productId, newQuantity) => {
      try {
        await axios.post(`/update_quantity/${productId}`, { quantity: newQuantity })
        fetchOrderDetails()
      } catch (error) {
        console.error("Error updating quantity:", error)
      }
    }

    return (
        <div className="App">
          <UserContext.Provider value={{ user, getUser }}>
            <NavBar user={ user } getUser = { getUser }/>
            <Switch>
                <Route exact path="/">
                    <Banner />
                    <div className="mt-96">
                      <Categories />
                      <HomePage productsArray = {productsArray} updateCart={updateCart} user={ user }/>
                    </div>
                </Route>
                <Route exact path="/makeup-page">
                    <MakeupPage productsArray = {productsArray} prodCatArr = {prodCatArr} updateCart={updateCart} user={ user }/>
                </Route>
                <Route exact path="/hair-page">
                    <HairPage updateCart={updateCart} user={ user }/>
                </Route>
                <Route exact path="/skin-page">
                    <SkinPage updateCart={updateCart}/>
                </Route>
                <Route exact path="/cart">
                    <Cart orderDetails={orderDetails} fetchOrderDetails={fetchOrderDetails} />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/login">
                    <Login getUser = { getUser } fetchOrderDetails={fetchOrderDetails}/>
                </Route>
                <Route exact path="/logout">
                    <Logout getUser = { getUser }/>
                </Route>
                <Route exact path="/profile">
                    <User user={ user } />
                </Route>
                <Route exact path="/product-page">
                    <ProductPage updateCart={updateCart} user={ user }/>
                </Route>
            </Switch>
            </UserContext.Provider>
        </div>
    )
}

export default App;
