import React from 'react';
import './Banner.css'
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../../image/banner-1.avif'
import image2 from '../../../image/banner-2.avif'
import image3 from '../../../image/gellary3.avif'

const Banner = () => {
    return (
        <div className='container mt-5'>
            <Carousel
                variant="dark">
                <Carousel.Item>
                    <div className="row g-4">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div>
                                <h1 className="banner-title fw-bolder "><span className='text-primary'>Welcome To</span> <br /> Our Doll Store</h1>
                                <p className="fw-semibold">
                                    One of the best terms of endearment or compliments you can use with a guy is cute. While some may think it's too soft, that isn't the case. Guys can be just as cute and adorable as girls.
                                </p>
                                <button className="btn btn-danger fw-semibold">See More</button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={image1} className="d-block w-100 rounded" alt="..." style={{ height: 400 }} />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row g-4">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div>
                                <h1 className=" banner-title fw-bolder"><span className='text-success'>Valentine's Day </span>  <br /> Supper Sale</h1>
                                <p className="fw-semibold">
                                    Valentine's Day, which is also known as St Valentine's Day, is celebrated every year on the 14 February around the world. For many, it's a special time in the year when people show their affection for another person or people by sending cards, flowers or chocolates with messages of love.
                                </p>
                                <button className="btn btn-danger fw-semibold">See More</button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={image2} className="d-block w-100 rounded" alt="..." style={{ height: 400 }} />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row g-4">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div>
                                <h1 className="banner-title fw-bolder"><span className='text-danger'>How cute !</span> <br /> Mega Sale</h1>
                                <p className="fw-semibold">
                                    Our Generation is a world and lifestyle with endless possibilities. Let your imagination run free by collecting dolls, clothes, accessories books and more!

                                </p>
                                <button className="btn btn-success fw-semibold">See More</button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={image3} className="d-block w-100 rounded" alt="..." style={{ height: 400 }} />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;