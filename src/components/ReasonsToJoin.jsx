import React from 'react'

const ReasonsToJoin = ({ title, description, icon }) => {
  return (
    <div className='bg-gray-400 rounded-md p-2 flex flex-col text-left gap-2 items-start'>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className=''>{icon}</span>
    </div>
  )
}

export default ReasonsToJoin