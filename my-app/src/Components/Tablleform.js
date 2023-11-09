import React from 'react';
import { useEffect } from 'react';
import {v4 as uuidv4 } from "uuid"
function Tablleform({Description,Quantity,price,Amount,setDescription,setQuantity,setPrice,setAmount,list,setList,total,setTotal}) {

   useEffect(()=>{
    const calculateAmount = () => {
        setAmount( price * Quantity )
    }
    calculateAmount()
   },[price,Quantity,setAmount])
    
   
   console.log(total)
   const handleSubmit =(e)=>{
      e.preventDefault();
      const newItems ={
        id:uuidv4(),
        Description,
        Quantity,
        price,
        Amount
      }
      setDescription("");
      setQuantity("");
      setPrice("");
      setAmount("")
      setList([...list,newItems])
   }
    
  return (
    <>
    <form onSubmit={handleSubmit}>
     <div className='flex flex-col mg:mt-16'>
    <label htmlFor="enter your Description">Enter your item Description </label>
     <input
      type="text"
      id="Description"
      name="Description"
      autoComplete="off"
      placeholder="Enter Your Description"
      value={Description}
      onChange={(e) => setDescription(e.target.value)}
    />
    </div>
    <article className="md:grid grid-cols-3 gap-10">
         <div className='flex flex-col'>
          <label htmlFor="Enter your Quantity">Enter your Quantity</label>
           <input
            type="text"
            id="Quantity"
            name="Quantity"
            autoComplete="off"
            placeholder="Enter Your Quantity"
            value={Quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          </div>
          
           <div className='flex flex-col'>
           <label htmlFor="enter your price">Enter your Price</label>
           <input
            type="text"
            id="price"
            name="price"
            autoComplete="off"
            placeholder="Enter Your price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
           </div>
           
           <div className='flex flex-col'>
           <label htmlFor="enter your Amount">Enter your Amount</label>
             <p>{Amount}</p>
           </div>
           <button type='submit'  className="mb-3 bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500
               hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5">Add Item</button>
    </article>
    </form>
    
    </>
   
  )
}

export default Tablleform