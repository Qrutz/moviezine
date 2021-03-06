import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Moviepage from './moviepage';
import Tvshowpage from './tvshowpage';


export default function Navigation() {

  return (
    <Router> 
                
              {/* <Link to="/">Home</Link>
            
              <Link to="/movies">Movies</Link>
         
            
              <Link to="/tvshows">tv-series</Link> */}
              {/* Create a navigation bar with links to the movie page and tv show page. */}
              <nav className="flex items-center justify-between flex-wrap bg-gray-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                  <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                  <span className="font-semibold text-xl tracking-tight">MovieDB</span>
                </div>
                <div className="block lg:hidden">
                  <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                  </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                  <div className="text-lg lg:flex-grow flex justify-items-stretch ml-8">
                  
                    <Link to="/movies" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                      MOVIES
                    </Link>
                    <Link to="/tvshows" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                      TV-SERIES
                    </Link>
                  </div>
                </div>
              </nav>

            
          

       
      
      
      
<Routes>
<Route path="/" element={<Moviepage />}>
  
</Route>
<Route path="/movies" element={<Moviepage />}>
  
</Route>
<Route path="/tvshows" element={<Tvshowpage />}> 

</Route>

</Routes>

</Router>
  )
}
