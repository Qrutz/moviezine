import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Moviepage from './moviepage';
import Tvshowpage from './tvshowpage';


export default function Navigation() {

  return (
    <Router> 
    <div className='mx-auto'>
       <nav className="h-24">
          <ul className='flex justify-around w-full self-center '>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/tvshows">tv-series</Link>
            </li>
          </ul>

        </nav>
      
      
      
<Routes>
<Route path="/" element={<Moviepage />}>
  
</Route>
<Route path="/movies" element={<Moviepage />}>
  
</Route>
<Route path="/tvshows" element={<Tvshowpage />}> 

</Route>

</Routes>
</div>
</Router>
  )
}
