import { Container } from "postcss";
import React from "react";
import { Link } from "react-router-dom"

const Entry = ({entry}) => {

    return (
       
        <div class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 mt-10 mb-2">
        <Link to={`/entry/${entry.id}`}>
        <div class="text-purple-800 font-bold text-xl mb-2 pt-4">{entry.title}</div>
        </Link> 
        <h2 class="text-purple-400">{entry.date}</h2>   
        <p class="text-gray-700 text-base mb-2 pb-4">{entry.body}</p>
        </div>
    
    )
}

export default Entry;