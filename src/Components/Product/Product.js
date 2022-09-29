import React from 'react';
const Product = (props) => {
    const {img, title, describe, age, time} = props.product;
    return (
        <div className='product bg-white p-4'>
            <img className='w-full h-[200px]' src={img} alt=""/>
            <div className='product-info'>
                <h1 className='product-name text-2xl font-semibold'>{title}</h1>
                <p>{describe}</p>
                <h5>For age: {age}s</h5>
                <h5>Time required: {time}s</h5>
            </div>
            <button onClick={ ()=> props.handleAddToCart(props.product)} className='p-3 bg-blue-700 rounded-md'>
                <p>Add To List</p>
            </button>
        </div>
    );
};
export default Product;