import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../../image/banner-1.avif'

const Banner = () => {
    return (
        <div className='container'>
            <Carousel
                variant="dark">
                <Carousel.Item>
                    <div className="row g-4">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div>
                                <h1 className="fw-bolder fs-1">Welcome to our Doll store</h1>
                                <p className="fw-semibold">
                                </p>
                                <button className="btn btn-danger fw-semibold"></button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={image1} className="d-block w-100 rounded" alt="..." />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="row g-4">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div>
                                <h1 className="fw-bolder fs-1">Welcome to our Doll store</h1>
                                <p className="fw-semibold">
                                </p>
                                <button className="btn btn-danger fw-semibold"></button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={image1} className="d-block w-100 rounded" alt="..." />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;