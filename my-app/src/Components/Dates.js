import React from 'react'

function Dates({InvoiceNumber,InvoiceDate,Duedates}) {
  return (
    <>
     <article className='my-5 flex items-end justify-end flex-col'>
    <ul >
      <li className='p-1'> <span className='font-bold'>Invoice Date:{InvoiceDate}</span></li>
      <li className='p-1'> <span className='font-bold' >Due Date:{Duedates}</span></li>
      <li className='p-1'><span className='font-bold'>Invoice Number:{InvoiceNumber}</span></li>
    </ul>
  </article>
    
    </>
  )
}

export default Dates