import React from 'react';
import './Gallery.css'
import image1 from '../../../image/gellary1.avif'
import image2 from '../../../image/gellary2.avif'
import image3 from '../../../image/gallery4.avif'
import image4 from '../../../image/gallery7.jpg'
import image5 from '../../../image/gallery8.jpg'
import image6 from '../../../image/gellary9.jpg'

const Gallery = () => {
    return (
        <div className='container gallery-title'>
            <div className='mb-5'>
                <h1 className='text-center fw-bold'>Our Doll Gallery</h1>
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-3'>
                <div className='col '>
                    <div className='card'>
                        <img src={image1} className='rounded p-2 img-fluid' alt="" />
                    </div>
                </div>
                <div className='col'>
                    <div className='card'>
                        <img src={image2} className='rounded  img-fluid p-2' alt="" />
                    </div>
                </div>
                <div className='col'>
                    <div className='card'>
                        <img src={image3} className='img-fluid p-2 rounded' alt="" />
                    </div>
                </div>
                <div className='col'>
                    <div className='card'>
                        <img src={image4} className='img-fluid p-2 rounded' alt="" />
                    </div>
                </div>
                <div className='col'>
                    <div className='card'>
                        <img src={image5} style={{height:"360px"}} className='img-fluid p-2 rounded' alt="" />
                    </div>
                </div>
                <div className='col'>
                    <div className='card'>
                        <img src={image6} style={{height:"360px"}} className='img-fluid p-2 rounded' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;