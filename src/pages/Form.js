import {useState} from "react";
import {useNavigate} from "react-router-dom"

const Form = ({initialEntry, handleSubmit, buttonLabel}) => {
  const navigate = useNavigate()

  //The Form State
  const [formData, setFormData] = useState(initialEntry)

  // Handle Change to Update State when Input changes
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  // HandleSubmit for when the form is submitted
  const handleSubmission = (event) => {
    // prevent the page from refreshing
    event.preventDefault()
    //pass the formData to the handleSubmit function passes as props
    handleSubmit(formData)
    //push user back to main page
    navigate("/entry")

  }

  return <div class="container mx-auto w-full max-w-xs mb-10">
   <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10" onSubmit={handleSubmission}>
   <div class="mb-4">
   <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
        Title:
   </label>
   <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    type="text"
    onChange={handleChange}
    value={formData.title}
    name="title"
    />
    </div>
    <div class="mb-4">
   <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
        Date:
   </label>
  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    type="text"
    onChange={handleChange}
    value={formData.date}
    name="date"
    />
    </div>
    <div class="mb-4">
   <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
        Journal Entry:
   </label>
  <textarea class="shadow appearance-none border rounded w-full h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  type="text"
  onChange={handleChange}
  value={formData.body}
  name="body"
  />
  </div>
  <input class="inline-block bg-purple-400 hover:bg-purple-300 text-white font-bold rounded-lg px-6 py-2 uppercase" type="submit" value={buttonLabel} />
</form>
</div>
};

export default Form;