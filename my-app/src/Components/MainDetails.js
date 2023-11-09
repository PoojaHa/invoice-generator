import React from 'react'

function MainDetails({Name,address}) {
  return (
    <>
     <section className='flex items-end justify-end flex-col'>
     <h2 className='text-xl uppercase'>{Name}</h2>
     <p>{address}</p>
  </section>

    </>
  )
}

export default MainDetails