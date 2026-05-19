import React from 'react'
import background from '../assets/hero-bg.png'
import '../App.css'
import.meta.env.VITE_TMDB_API_KEY
import ReasonsToJoin from '../components/ReasonsToJoin'
import FAQItem from '../components/FAQItem'
import EmailForm from '../components/EmailForm'

const home = () => {
  const [movies, setMovies] = React.useState([]) // State to hold the trending movies data

  React.useEffect(() => { // Fetch trending movies data from TMDB API when the component mounts
    fetch(`https://api.themoviedb.org/3/trending/movie/week?&api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.results)
      setMovies(data.results.slice(0, 10)) // Update the movies state with the first 10 trending movies
    })
  }, [])

  const reasons = [
    {title: "Enjoy on your TV", description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and more.", icon: "📺"},
    {title: "Download your shows to watch offline", description: "Save your favorites easily and always have something to watch.", icon: "📥"} ,
    {title: "Watch everywhere", description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.", icon: "🌍"},
    {title: "Create profiles for kids", description: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.", icon: "👶"}
  ]

  const [OpenFAQ, setOpenFAQ] = React.useState(null) // State to track which FAQ item is currently open
  
  const faqItems = [
    {question: "What is Netflix?", answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"},
    {question: "How much does Netflix cost?", answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs250 to Rs1100 a month. No extra costs, no contracts."},
    {question: "Where can I watch?", answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."},
    {question: "How do I cancel?", answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."},
    {question: "What can I watch on Netflix?", answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."}
  ]

  const scrollMoviesRef = React.useRef(null) // Ref to the scrollable movies container, null implies no element attached yet.
  const [showLeft, setShowLeft] = React.useState(false) //initially false because the user has not scrolled yet.
  const [showRight, setShowRight] = React.useState(true)

  const scrollLeft = () => {
    scrollMoviesRef.current?.scrollBy({ left: -300, behavior: 'smooth' }) // Scroll left by 300 pixels with smooth behavior 
  }
  const scrollRight = () => {
    scrollMoviesRef.current?.scrollBy({ left: 300, behavior: 'smooth' }) // Scroll right by 300 pixels with smooth behavior
  }
  const handleScroll = () => {
    const el = scrollMoviesRef.current
    setShowLeft(el.scrollLeft > 0) // Show left scroll button if the user has scrolled to the right
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth) // Show right scroll button if the user has not scrolled to the end of the container
  }

  return (
    <>
      <main className='relative h-screen'>
        <img src={background} alt="" className='w-full h-full object-cover absolute inset-0 bg-black/60'/>
        <div className='absolute inset-0 bg-black/60'></div>

        <div className='flex flex-col items-center justify-center text-center gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>
          <h1 className='text-6xl relative font-[900]'>Unlimited movies, TV shows and more</h1>
          <p className='relative font-semibold text-xl'>Starts at 250. Cancel anytime.</p>
          <EmailForm size="small" />
        </div>
      </main>
{/* Trending*/}
      <section className='md:px-[136px] px-8 py-4' id="trending">
        <span className='text-2xl font-bold'>Trending Now</span>
        <div className = "relative">
          {showLeft && (
            <div className="absolute bg-white h-full w-8 left-0 z-10 top-1/2 -translate-y-1/2 flex items-center justify-center p-4">
            <button onClick={scrollLeft} className='bg-gray-200 p-1 h-30 rounded-md text-xl'>{'<'}</button>
            </div>)}

          <div ref={scrollMoviesRef} onScroll={handleScroll} className='scroll-menu px-36'>
            {movies.slice(0, 10).map((movie, index) => (
              <div key={movie.id} className='movie-card relative w-46 h-full flex flex-col items-center justify-center rounded-md'>

                <span className='absolute -left-5 bottom-4 text-8xl font-black text-black' 
                      style={{WebkitTextStroke: '2px white'}}>
                      {index + 1}
                </span>                
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title || movie.name} className='w-full h-full object-cover rounded-xl'/>
              </div>
            ))}
          </div>

    {/* scrollRight button */}
          {showRight && (
            <div className="absolute bg-white h-full w-8 right-0 z-10 top-1/2 -translate-y-1/2 flex items-center justify-center p-4">
              <button onClick={scrollRight} className='bg-gray-200 p-1 h-30 rounded-md text-xl'>{'>'}</button>
            </div>
          )}
          </div>
      </section>

{/* More Reasons to join*/}
      <div className='px-8 md:px-[136px] py-4'>
        <h2 className='text-2xl font-bold'>More Reasons to Join</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 m-2 mb-8'>
          {reasons.map((reason, index) => (
            <ReasonsToJoin key={index} title={reason.title} description={reason.description} icon={reason.icon} />
          ))}
        </div>
      </div>

{/* Frequently asked questions */}
      <div className="px-8 md:px-[136px] py-4" id="faq">
        <h2 className='text-3xl font-bold text-center mb-4'>Frequently Asked Questions</h2>
        <div className='flex flex-col gap-2'>
          {faqItems.map((faq, index) => (
            <FAQItem 
              key={index}  
              question={faq.question} 
              answer={faq.answer} 
              isOpen = {OpenFAQ === index} // Pass a boolean to indicate if this FAQ item is currently open
              onToggle = {() => setOpenFAQ(OpenFAQ === index ? null : index)} // Toggle the open state of this FAQ item when clicked
            />
          ))}
        </div>
      </div>

      <div className='px-8 md:px-[136px] py-4 items-center flex justify-center text-center gap-4'>
        <EmailForm size="large"/>
    
      </div>
    </>
  )
}

export default home