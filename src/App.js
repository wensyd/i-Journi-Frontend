//import all components
import AllEntries from "./pages/AllEntries";
import SingleEntry from "./pages/SingleEntry";
import Form from "./pages/Form";

//import hooks from React

import{useState, useEffect} from "react"

// Import Router 6 Component (Route -> Route, Switch -> Routes)
import {Route, Routes, Link, useNavigate} from "react-router-dom"


function App() {

//////////////////////////////
// State and Other Variables
//////////////////////////////

const navigate = useNavigate()

const url = "https://i-journi.herokuapp.com/entry/"

// state to hold all entries 
const [entries, setEntries] = useState([]);

// an empty entry for initializing the create form 
const nullEntry = {
  title: "",
  date: "",
  body: ""
}

const [targetEntry, setTargetEntry] = useState(nullEntry)

////////////////////////
  // Functions
  ////////////////////////

   // function to get list of entries from API
   const getEntries = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setEntries(data);
  };

  // function to add blogs 
  const addEntries = async (newEntry) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEntry)
    });

    // update the list of entries
    getEntries()
  }

  // to select an entry to edit 
  const getTargetEntry = (entry) => {
    setTargetEntry(entry)
    navigate("/edit")
  }

  //update the entry for the handlesubmit prop
  const updateEntry = async (entry) => {
    await fetch(url + entry.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    });

    //update the entries
    getEntries();
  };

    // delete the entry 

    const deleteEntry = async (entry) => {
      await fetch(url + entry.id, {
        method: "delete"
      })
  
      getEntries()
      navigate("/entry")
    }

  ////////////////////////
  // useEffects
  ////////////////////////

  useEffect(() => {
    getEntries()
  }, [])
  ////////////////////////
  // returned JSX
  ////////////////////////


  return (
    <div className="App">
   
      <Routes>
        <Route path="/entry" element={<AllEntries entries={entries}/>}/>
        <Route path="/entry/:id" element={<SingleEntry entries={entries}
        edit={getTargetEntry}
        deleteEntry={deleteEntry}/>}/>
        <Route path="/new" element={<Form
          initialEntry={nullEntry}
          handleSubmit={addEntries}
          buttonLabel="Create Entry"
          />} />
        <Route path="/edit" element={<Form
        initialEntry={targetEntry}
        handleSubmit={updateEntry}
        buttonLabel="update Entry"/>}/>
      </Routes>
    </div>
  );
}

export default App;
