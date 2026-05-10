import React from 'react'
import background from '../assets/hero-bg.png'
import '../App.css'
import.meta.env.VITE_TMDB_API_KEY

const home = () => {
  const [movies, setMovies] = React.useState([])

  React.useState(() => {
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.results)
      setMovies(data.results)
    })
  })

  return (
    <>
      <main>
        <img src={background} alt="" className='tint w-full h-full object-cover'/>
        <div className='flex flex-col items-center justify-center text-center gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>
          <h1 className='text-5xl bold relative'>Unlimited Movies, TV Shows and More</h1>
          <p className='relative'>Starts at 250. Cancel anytime.</p>
          <span>Ready to watch? Enter your email to create or restart your membership.</span>
          <div className='flex flex-row'>
            <input type="email" placeholder="Enter your email" />
            <button className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700'>Get Started &gt;</button>
          </div>
        </div>
      </main>

{/* Trending       */}
      <div className='flex w-full px-30 justify-center items-center flex-wrap gap-4'>
        <span className='w-full text-xl font-bold'>Trending Now</span>
        {movies.map(movie => (
          <div key={movie.id} className='flex flex-col items-center justify-center text-center gap-2'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title || movie.name} className='w-42 h-42'/>
            <h2>{movie.title || movie.name}</h2>
          </div>
        ))}
      </div>

{/* More Reasons to join       */}
      <div>

      </div>

{/* Frequently asked questions */}
      <div>

      </div>
    </>
  )
}

export default home