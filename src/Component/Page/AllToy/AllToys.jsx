import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Category/Category';

const AllToys = () => {
    const categories = useLoaderData()
    console.log(categories)
    return (
        <div className='container'>
            <div className='row row-cols-1 row-cols-md-3 g-4 mt-5'>
                {
                    categories.map(category => <Category key={category._id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default AllToys;