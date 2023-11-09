import React from 'react'

function ClientDetails({ClientName,ClientAddress}) {
  return (
    <>
    <section className='mt-5'>
    
    <h2 className='text-xl uppercase'>{ClientName}</h2>
    <p>{ClientAddress}</p>
 </section>
    
    </>
  )
}

export default ClientDetails