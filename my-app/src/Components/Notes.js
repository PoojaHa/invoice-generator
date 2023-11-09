import React from 'react'

function NotesComponent({Notes}) {
  return (
    <>
<section className='mt-20 mb-5'>
  <p className="lg:w-1/2 text-justify">{Notes}</p>
 </section>
    </>
  )
}

export default NotesComponent