import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux/CartSlice'


const Cart = () => {
  const dispatch=useDispatch();
const select=useSelector((state)=>state.cart);
const handleRemove=(id)=>{
dispatch(remove(id))
}
  return (
    <>
<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
    {
      select.map((item,id)=>{
        return (
          <div key={id} className='overflow-hidden my-5 max-w-sm mx-auto shadow-lg rounded-lg'>      
                    <img src={item.image} alt="" className='w-full h-56' />
                    <h1 className='py-3 text-2xl font-serif font-bold'>{item.title}</h1>
                    <div className='text-gray-900 py-4'>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    </div>
                    <button className='bg-purple-700 my-2 hover:bg-purple-500 px-6 py-3 text-white rounded-md'  onClick={()=>handleRemove(item.id)}>Remove</button>
          </div>
        )
      })
    }
              </div>

    </>
  )
}

export default Cart