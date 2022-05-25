import React, {useState, useEffect, useContext} from 'react'
import Card from './Card'
import SearchBar from './SearchBar'
import {MovieContext} from './contexts/movieContext'
import {SearchContext} from './contexts/searchContext'


export default function Moviepage() {

  const {movies, setMovies} = useContext(MovieContext)
  const {search, setSearch} = useContext(SearchContext)
  const [filteredMovies, setFilteredMovies] = useState(movies)

  


  const handleChange = (e) => {
    setSearch(e.target.value)
    const filteredMoviez = movies.filter(movie => movie.title.toLowerCase().includes(e.target.value.toLowerCase()))
    setFilteredMovies(filteredMoviez)
}

useEffect(() => {
          
  fetch('https://api.themoviedb.org/3/movie/popular?api_key=478b83570d49bc6dc32f339b9f0e06c4&language=en-US&page=1')
  .then(response => response.json())
  .then(data => {
      setMovies(data.results)
  })
  
}, )
   
// if search is empty, show all movies else show filtered movies
function displayMovies() {
  if (search === '') {
    return movies.map(movie => (
      <div className='container'> 
      <Card image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} id={movie.id} key={movie.id}  title={movie.title} />
      </div>
    ))
  } else {
    return filteredMovies.map(movie => (
      <div className=''> 
      <Card image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} id={movie.id} key={movie.id}  title={movie.title} />
      </div>
    ))
  }
}
         
        
  return (
    
  
    <div> 
    
      <SearchBar handleChange={handleChange} search={search} />
    
    <div className='grid grid-cols-7 gap-2 w-full'>
      
    {displayMovies()}
    </div> 
    
    </div>
    
   
     
  )
}
