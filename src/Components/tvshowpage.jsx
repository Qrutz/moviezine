import React, {useEffect, useState, useContext} from 'react';
import Card from './Card';
import SearchBar from './SearchBar';
import { SearchContext } from './contexts/searchContext';



export default function Tvshowpage() {
    const {search, setSearch} = useContext(SearchContext)
    const [tvshows, setTvshows] = useState([])
    const [filteredTvshows, setFilteredTvshows] = useState(tvshows)

    // useEffect to fetch data from the API and store all tv shows in state
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=478b83570d49bc6dc32f339b9f0e06c4&language=en-US&page=1')
        .then(response => response.json())
        .then(data => {
            setTvshows(data.results)
        })
        
    }, [])

    const handleChange = (e) => {
      setSearch(e.target.value)
      const filteredtvs = tvshows.filter(show => show.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setFilteredTvshows(filteredtvs)
  }

// if search is empty, show all tvshows else show filtered tvshows
function displayTvshows() {
  if (search === '') {
    return tvshows.map(show => (
      <div className='container'>
      <Card image={`https://image.tmdb.org/t/p/w500${show.poster_path}`}  key={show.id}  title={show.name} />
      </div>
    ))
  } else {
    return filteredTvshows.map(show => (
      <div className='container'>
      <Card image={`https://image.tmdb.org/t/p/w500${show.poster_path}`}  key={(show.id) + 1}  title={show.name} />
      </div>
    ))
  }
}



  return (
     
    <div>  
      <SearchBar handleChange={handleChange} search={search} />
    <div className='grid grid-cols-7 gap-2 '>   
    {displayTvshows()}
    </div> 
    </div>
     
  )
}
