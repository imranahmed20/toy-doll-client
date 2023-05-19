import React from 'react';

const Category = ({ category }) => {
    console.log(category)
    const { _id, name, price, rating, image } = category;
    return (
        <div className='col'>
            <div className="card">

                <h1>{name}</h1>
            </div>
        </div>
    );
};

export default Category;