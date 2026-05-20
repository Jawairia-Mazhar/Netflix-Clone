import React, { useEffect, useState } from 'react'

const MovieModal = ({ movie, onClose }) => {
  const [logoPath, setLogoPath] = useState(null)

  useEffect(() => {
    if (!movie?.id) return
    const apiKey = import.meta.env.VITE_TMDB_API_KEY
    if (!apiKey) return

    fetch(`https://api.themoviedb.org/3/movie/${movie.id}/images?api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        setLogoPath(data.logos?.[0]?.file_path || null)
      })
      .catch(() => setLogoPath(null))
  }, [movie?.id])

  return ( 
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative max-w-4xl overflow-hidden rounded-md bg-zinc-950 text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full px-3 py-1 text-3xl text-white"
        >
          ×
        </button>

        <div className="grid gap-4 lg:grid-cols-[275px_0.75fr]">
          <div className="relative h-80 overflow-hidden bg-zinc-900 lg:h-full">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
              alt={movie?.title || movie?.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 p-6 text-white">
            {logoPath && (
              <img
                src={`https://image.tmdb.org/t/p/w500${logoPath}`}
                alt={`${movie?.title || movie?.name} logo`}
                className="left-4 top-4 max-h-16 w-auto object-contain"
              />
            )}
            <div className="flex gap-2 text-sm text-white mt-6">
              <span className="bg-zinc-500 w-10 px-1 py-1 rounded-md flex items-center justify-center text-center">{movie?.release_date?.split('-')[0] || 'Unknown'}</span>
              <span className="bg-zinc-500 w-10 px-1 py-1 rounded-md flex items-center justify-center text-center">{movie?.vote_average?.toFixed(1) ?? 'N/A'}</span>
            </div>
            <p className="text-sm leading-6 text-zinc-300">{movie?.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal