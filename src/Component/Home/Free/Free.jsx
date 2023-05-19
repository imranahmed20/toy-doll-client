import React from 'react';
import image1 from '../../../image/free1.jpg'
import image2 from '../../../image/free3.avif'


const Free = () => {
    return (
        <div className='gallery-title'>
            <div className='row row-cols-1 row-cols-md-2 g-4'>
                <div className="col">
                    <div className='card bg-info p-4'>
                        <div className='row'>
                            <div className="card-body col-8">
                                <h3 className="card-title fw-bold fs-1">Baby Toy Doll</h3>
                                <h4 className="card-text fw-semibold mb-4 mt-3">Get Up To 70% off</h4>
                                <button className='btn btn-danger fw-semibold'>Shop Now</button>
                            </div>
                            <div className='col-4'>
                                <img src={image1} style={{ height: '170px' }} className="img-fluid rounded" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className='card bg-warning p-4'>
                        <div className='row'>
                            <div className="card-body col-8">
                                <h3 className="card-title fw-bold fs-1">Tady Bear  Doll</h3>
                                <h4 className="card-text fw-semibold mb-4 mt-3">Get Up To 80% off</h4>
                                <button className='btn btn-danger fw-semibold'>Shop Now</button>
                            </div>
                            <div className='col-4'>
                                <img src={image2} className="img-fluid rounded" style={{ height: '170px' }} alt="..." />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Free;