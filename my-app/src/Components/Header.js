import React from 'react'

function Header({handlePrint}) {
  return (
    <>

   <header className='flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between'>
           <div>
            <h1 className='font-bold uppercase tracking-wide text-4xl mb-3'>Invoice</h1>
          </div>

            <div>
              <ul className='flex justify-between items-center flex-wrap mt-0'>
                {/* <li className='btn-print'><button onClick={handlePrint}    className="bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500
               hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5">print</button></li> */}
              
                {/* <li className='btn-send'>
                <button    className="bg-gray-500 py-2 px-8 rounded shadow border-2 border-gray-500
               hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5">Send</button></li> */}
              
              </ul>
            </div>
        </header>
    </>
  )
}

export default Header