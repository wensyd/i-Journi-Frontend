import {React} from "react";
import { Link } from "react-router-dom";

const Header = () => {

return(

    <nav class="bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
    
          <div class="flex space-x-4">
            
            <div>
              <Link to="/entry" class="flex items-center justify-start py-5 px-2 text-2xl text-purple-700 hover:text-purple-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
                <span class="font-bold">i-Journi</span>
              </Link>
            </div>
    
           
            <div class="flex items-center md:hidden">
              
              <Link to="/entry" class="py-5 px-3 text-purple-700 hover:text-purple-300">Home</Link>
              <Link to="/new" class="py-5 px-3 text-purple-700 hover:text-purple-300">New Entry</Link>
            </div>
          </div>

    </div>
  </div>

</nav>

)
}

export default Header