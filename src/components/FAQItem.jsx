import React from 'react'

export const FAQItem = ( { question, answer, isOpen } ) => {
  const [open, setOpen] = React.useState(isOpen) // Local state to track if this FAQ item is open or closed
  return (
    <div className='text-white'>  
      <div className='flex justify-between items-center bg-zinc-600 p-4 cursor-pointer'
       onClick={() => setOpen(!open)} > {/* Toggle the open state when the FAQ item is clicked */}
        <h3 className="text-2xl">{question}</h3>
        <button className='w-8 h-8 text-3xl items-center smooth-transition'>{open ? "×" : "+"}</button>
      </div>
      
      {open && 
      <div className='bg-zinc-600 p-4 border-t border-black'>
        <p className='text-2xl'>{answer}</p>
      </div>}
    </div>
  )
}
export default FAQItem