import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Banner from "./Banner";

function Categories(){

    const history = useHistory()

    const handleMClick = async () => {
      try {
        const response = await axios.get('/categories')
        const makeupCategory = response.data.find(category => category.name === "Makeup")
  
        if (makeupCategory) {
          history.push('/makeup-page')
        } else {
          console.log("Makeup category not found")
        }
      } catch (error) {
        console.error('Error during get:', error)
      }
    }

    const handleHClick = async () => {
      try {
        const response = await axios.get('/categories')
        const hairCategory = response.data.find(category => category.name === "Hair Care")
  
        if (hairCategory) {
          history.push('/hair-page')
        } else {
          console.log("hair category not found")
        }
      } catch (error) {
        console.error('Error during get:', error)
      }
    }

    const handleSClick = async () => {
      try {
        const response = await axios.get('/categories')
        const skinCategory = response.data.find(category => category.name === "Skin Care")
  
        if (skinCategory) {
          history.push('/skin-page')
        } else {
          console.log("Skin category not found")
        }
      } catch (error) {
        console.error('Error during get:', error)
      }
    }


    return(
        <div className= "mt-8 flex justify-evenly space-x-2 text-4xl text-pinky">
            <button className="bg-black hover:bg-zinc-700 rounded px-6 py-4 w-64" onClick={handleMClick}>Makeup</button>
            <button className="bg-black hover:bg-zinc-700 rounded px-6 py-4 w-64" onClick={handleSClick}>Skin Care</button>
            <button className="bg-black hover:bg-zinc-700 rounded px-6 py-4 w-64" onClick={handleHClick}>Hair Care</button>
        </div>  
    )
}

export default Categories