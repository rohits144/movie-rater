import React, {useState, useEffect} from 'react';
import './App.css';
import MovieList from './components/movie-list'
import MovieDetails from './components/movie-detail'

function App() {

  const [movies, setMovie] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  
  useEffect(()=>{
    fetch("http://localhost:8000/api/movies/", {
      method: 'GET',
      headers: {
        'content-Type': 'application/json',
        'Authorization': 'Token dd8e839761a0230d9c62fb6694493fa9a4026627'
      }
    })
    .then(resp => resp.json())
    .then(resp => setMovie(resp))
    .catch(error => console.log(error))
  }, [])

  const movieClicked = movie => {
    setSelectedMovie(movie);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Movie Rator</h1>
      </header>
      <div className="layout">
          <MovieList movies={movies} movieClicked={movieClicked} />
          
          <MovieDetails movie={selectedMovie} />
        </div>
    </div>
  );
}

export default App;
