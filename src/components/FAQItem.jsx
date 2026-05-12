import React from 'react'

export const FAQItem = ( { question, answer, isOpen } ) => {
    const [open, setOpen] = React.useState(isOpen) // Local state to track if this FAQ item is open or closed
  return (
    <div 
      className='bg-gray-400 p-4 rounded-md cursor-pointer hover:bg-gray-300'
      onClick={() => setOpen(!open)} >  {/* Toggle the open state when the FAQ item is clicked */}
        <div className='flex justify-between items-center'>
            <h3 className="text-xl">{question}</h3>
            <button className='w-8 h-8 text-3xl items-center'>{open ? "×" : "+"}</button>
        </div>
        {open && <p className=''>{answer}</p>}
    </div>
  )
}
export default FAQItem