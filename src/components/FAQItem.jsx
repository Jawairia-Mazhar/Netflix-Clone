import React from 'react'

export const FAQItem = ( { question, answer, isOpen } ) => {
  const [open, setOpen] = React.useState(isOpen) // Local state to track if this FAQ item is open or closed
  return (
    <div className='text-white'>  
      <div className='flex justify-between items-center bg-zinc-600 p-4 cursor-pointer hover:bg-zinc-500'
       onClick={() => setOpen(!open)} > {/* Toggle the open state when the FAQ item is clicked */}
        <h3 className="text-2xl">{question}</h3>
        <button className='flex w-8 h-8 items-center justify-center text-3xl transition-all duration-200'>{open ? "×" : "+"}</button>
      </div>
      
      {open && 
      <div className='bg-zinc-600 p-4 border-t border-black'>
        <p className='text-2xl'>{answer}</p>
      </div>}
    </div>
  )
}
export default FAQItem