import React from 'react'

const EmailForm = ({size = "large"}) => {
  const isLarge = size === "large"
  return (
    <div className= ''>
      <span className="p-2">Ready to watch? Enter your email to create or restart your membership.</span>
    <div className="flex flex-row gap-2 p-2">
      <input type="email" placeholder="Email Address" className={` h-14 p-2 bg-white/10 backdrop-blur-xs text-white bg-clip-padding border border-gray-500 rounded-sm ${isLarge ? 'w-130' : 'w-100'}`} />
      <button className={`h-14 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 font-bold text-xl ${isLarge ? 'w-50 ' : 'w-40'}`}>Get Started &gt;</button>
    </div>
    </div>  
  )
}

export default EmailForm