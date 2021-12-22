import React from "react";
import {Link, useParams} from "react-router-dom"

const SingleEntry = ({entries, edit, deleteEntry}) => {
  //get params from the url 
  const params = useParams()
  const id = parseInt(params.id)

  // find the particular entry the user wants to see based on the param 

  const entry = entries.find((p) => p.id === id)
  console.log(entry)

  return <div class="container mx-auto max-w-lg bg-white rounded-lg border border-purple-400 shadow-2xl dark:bg--800 dark:border-purple-700 mt-10 text-center">
    <h1 class="mb-2 text-2xl text-purple-800 font-bold">{entry?.title}</h1>
    <h2 class="text-purple-400">{entry?.date}</h2>
    <p class="mb-3">{entry?.body}</p>

    <button type="button" class="inline-flex bg-purple-400 hover:bg-purple-300 text-white font-bold rounded-lg px-6 py-2 uppercase mr-3" onClick={() => deleteEntry(entry)}>
    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 -ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
   </svg> 
    <span>Delete</span>
    </button>

    <button class="inline-flex bg-purple-400 hover:bg-purple-300 text-white font-bold rounded-lg px-6 py-2 uppercase mr-3 mb-2" onClick={() => edit(entry)}>
    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 -ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
    <span>Edit</span>
    </button>

  {/* add a button to lead back to main page */}
    <Link to="/entry">
        <button class="inline-flex bg-purple-400 hover:bg-purple-300 text-white font-bold rounded-lg px-6 py-2 uppercase">
        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 -ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
         </svg>
        <span>Home</span>
        </button>
    </Link>
  </div>
};

export default SingleEntry;