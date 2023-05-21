import React from 'react';
import image1 from '../../../image/tranding1.avif'
import image2 from '../../../image/tranding2.avif'
import image3 from '../../../image/tranding3.avif'

const Tranding = () => {
    return (
        <div className='gallery-title' data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <h1 className='text-center fw-bold mb-3'>Treding Products</h1>
            <p className='fw-semibold mb-5 fs-6 text-center'>Since ancient times, dolls have played a central role in magic and religious rituals and have been used as representations of deities. Dolls have also traditionally been toys for children. Dolls are also collected by adults, for their nostalgic value, beauty, historical importance or financial value.</p>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className='card p-2'>
                        <img src={image1} className='rounded' style={{ height: '250px' }} alt="" />
                    </div>
                </div>
                <div className="col" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className='card p-2'>
                        <img src={image2} className='rounded' style={{ height: '250px' }} alt="" />
                    </div>
                </div>
                <div className="col" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className='card p-2'>
                        <img src={image3} className='rounded img-fluid' style={{ height: '250px' }} alt="" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Tranding;