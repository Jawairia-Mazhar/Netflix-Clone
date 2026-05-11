import React from 'react'
import background from '../assets/hero-bg.png'
import '../App.css'
import.meta.env.VITE_TMDB_API_KEY 

const home = () => {
  const [movies, setMovies] = React.useState([])

  React.useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?qty=5&api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.results)
      setMovies(data.results)
    })
  }, [])

  return (
    <>
      <main className='relative h-screen'>
        <img src={background} alt="" className='w-full h-full object-cover absolute inset-0 bg-black/60'/>
        <div className='absolute inset-0 bg-black/60'></div>

        <div className='flex flex-col items-center justify-center text-center gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>
          <h1 className='text-6xl bold relative font-[900]'>Unlimited Movies, TV Shows and More</h1>
          <p className='relative'>Starts at 250. Cancel anytime.</p>
          <span>Ready to watch? Enter your email to create or restart your membership.</span>
          <div className='flex flex-row'>
            <input type="email" placeholder="Enter your email" />
            <button className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700'>Get Started &gt;</button>
          </div>
        </div>
      </main>

{/* Trending*/}
      <section className='px-34 py-4'>
        <span className='w-full text-xl font-bold'>Trending Now</span>
        <div className='scroll-menu '>
          {movies.map(movie => (
            <div key={movie.id} className='movie-card w-44 h-full flex flex-col items-center justify-center gap-2 rounded-md'>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title || movie.name} className='w-full h-full object-cover rounded'/>
            </div>
          ))}
        </div>
      </section>

{/* More Reasons to join*/}
      <div>

      </div>

{/* Frequently asked questions */}
      <div>

      </div>
    </>
  )
}

export default home