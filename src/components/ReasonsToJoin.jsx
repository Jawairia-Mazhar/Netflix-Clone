import React from 'react'

const ReasonsToJoin = ({ title, description, icon }) => {
  return (
    <div className='relative bg-linear-to-br from-blue-950 to-rose-950 rounded-md p-4 md:pb-12 text-left gap-2 w-full md:max-w-sm max-w-lg h-68'>
        <h3 className = "text-2xl text-white font-bold">{title}</h3>
        <p className='text-gray-200 py-2'>{description}</p>
        <span className='absolute right-4 bottom-4 text-2xl'>{icon}</span>
    </div>
  )
}

export default ReasonsToJoin
