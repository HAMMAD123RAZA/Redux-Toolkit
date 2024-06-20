import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/CartSlice';
import { fetchProducts } from '../redux/ProductSlice';

const Home = () => {
    
    const dispatch = useDispatch();
    const {data:products,status}=useSelector((state)=>state.product)
    
    useEffect(() => {
        dispatch(fetchProducts())
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {products.map((product, index) => (
                <div key={index} className='max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
                    <img src={product.image} alt={product.title} className='w-full h-56' />
                    <div className='px-6 py-4'>
                        <h1 className='text-xl font-bold font-serif mb-2'>{product.title}</h1>
                        <p className='text-gray-700 text-base'>{product.description}</p>
                        <p className='text-gray-700 text-base font-bold mt-2'>${product.price}</p>
                    </div>
                    <div className='px-6 py-4'>
                        <button className='hover:bg-purple-500 my-2 bg-purple-800 text-white px-4 py-2 rounded-md focus:outline-none focus:bg-purple-600' onClick={() => handleAdd(product)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;
