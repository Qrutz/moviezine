import React, {useEffect, useState} from 'react';
import MovieCardList from './Components/movieCardList';


export default function App() {
  const API_KEY = '478b83570d49bc6dc32f339b9f0e06c4';

  

   // get genres from api and store in array
    const [genres, setGenres] = useState([])

    useEffect(() => {
      fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=478b83570d49bc6dc32f339b9f0e06c4')
        .then(res => res.json())
        .then(data => {
          setGenres(data.genres)
        })
      }, [])

      // on click of genre button filter the state genres array and return the movies that match the genre
      const handleGenreClick = (genreT) => {
        const filteredGenres = genres.filter(genre => genre.name === genreT)
        setGenres(filteredGenres)
      }


 
  return (
    <div className='box-border'>
      <h1>Movies</h1>
      <button onClick={() => handleGenreClick("Action")}>Action</button>
      <button onClick={() => handleGenreClick("Adventure")}>Adventure</button>
      <button onClick={() => handleGenreClick("Family")}>Family</button>
      <div className='flex'>   
      {genres.map(genre => (
        <div className='container flex'> 
        <MovieCardList key={genre.id} genreName={genre.name} genreID={genre.id} />
        </div>
      ))}
      </div>  
    
            
       
       </div>
        
            
  
  )
}
  