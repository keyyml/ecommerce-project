import React from "react"

function Search(){

    return(
        <>
            <input
                type="text"
                id="search" 
                placeholder="search..."
                className="ml-2 rounded px-6 py-4 w-48 text-xl h-6 hover:bg-pinky text-black"
            />
        </>
    )
}

export default Search 