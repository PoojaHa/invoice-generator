import React from 'react'
import { useEffect } from 'react';

function Table({Description,Quantity,price,Amount,list,setTotal,total}) {

  
         const items = list.map((item,i)=>{
            return(
                <tr key={i} className='item'>
                    <td>{item.Description}</td>
                    <td>{item.Quantity}</td>
                    <td>{item.price}</td>
                    <td className='amount'>{item.Amount}</td>

                </tr>
            )
         })
         
  return (
    <>
     <table width="100%">
        <thead>
            <tr className='bg-gray-300 p-1 '>
                <td className='font-bold px-1'>Description</td>
                <td  className='font-bold'>Quantity</td>
                <td  className='font-bold'>Price</td>
                <td  className='font-bold'>Amount</td>
            </tr>
        </thead>
        <tbody>
            
                {items}
            
        </tbody>
     </table>
    </>
  )
}

export default Table