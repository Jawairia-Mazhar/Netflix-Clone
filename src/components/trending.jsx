import React from 'react'

const trending = () => {
  const [movies, setMovies] = React.useState([])

  React.useState(() => {
    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=00cc61764b49bac3e96e8f52a054e8b1')
    .then(res => res.json())
    .then(data => {
      console.log(data.results)
      setMovies(data.results)
    })
  })

  return (
    <section>
      {movies.map(movie => (
      <div key={movie.id}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title || movie.name} className='w-42 h-42'/>
        <h2>{movie.title || movie.name}</h2>
      </div>
      ))}
    </section>
  )
}

export default trending