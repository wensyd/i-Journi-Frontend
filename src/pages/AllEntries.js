import React from "react";
import Entry from "../components/entry";

const AllEntries = (props) => {
    // for each entry in the array, render an entry component

 return props.entries.map((entry) => {
    return <Entry key={entry.id} entry={entry}/>
 }) 
 
};

export default AllEntries;