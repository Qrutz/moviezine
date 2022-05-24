import React, {useState, useEffect} from "react"
import MovieCard from "./movieCard";


export default function MovieCardList(props) {
    const [movies, setMovies] = useState([]) 

   
    // use effect to fetch data from the API and store all movies in props.genre in the movies array
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=478b83570d49bc6dc32f339b9f0e06c4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
        .then(response => response.json())
        .then(data => {
            const moviesByCat = data.results.filter(movie => movie.genre_ids.includes(props.genreID))
            setMovies(moviesByCat)
        })
    }, [])

  return (
    <div>
        {movies.map(movie => (
            <MovieCard genr={props.genreName} key={movie.id} title={movie.title} image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            
        ))}
    </div>
  )
}
