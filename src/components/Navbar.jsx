import React from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink, Navigate, useNavigate, useLocation, useParams, useSearchParams, useOutlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { FaCartArrowDown } from "react-icons/fa";


const Navbar = () => {
    const items=useSelector((state)=>state.cart)
  return (
    <>
    <div className="px-5 flex justify-center items-center  text-purple-600 font-bold ">
    <div>
<Link to="/" className='px-3 hover:border-purple-400 hover:border-b-2 hover:text-purple-800' >Home</Link>
</div>
<Link className='px-3 hover:border-purple-400 hover:border-b-2 hover:text-purple-800'to="/cart">Cart</Link>
{/* <details className="dropdown">
  <summary className="m-1 ">Category</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details> */}
<div className='text-purple-500 '>
<span>{items.length}<FaCartArrowDown/></span>
</div>

</div>
    </>
  )
}

export default Navbar