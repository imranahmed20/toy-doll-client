import React from 'react';
import { Container } from 'react-bootstrap';
import { FaClock, FaMailBulk, FaLocationArrow, FaPhone, FaPaypal, FaCcVisa, FaCcMastercard, FaCcAmazonPay } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer bg-dark text-white mt-5 p-5'>
            <Container>
                <div className='row row-cols-1 row-cols-md-4' data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className="col">
                        <h4 className='text-warning'>Information</h4>
                        <div className='mt-5'>
                            <p><a href="" className='text-decoration-none text-white'>About Us</a></p>
                            <p><a href="" className='text-decoration-none text-white'>Contacts</a></p>
                            <p><a href="" className='text-decoration-none text-white'>FAQ</a></p>
                            <p><a href="" className='text-decoration-none text-white'>Toy Doll Shop</a></p>
                        </div>
                    </div>
                    <div className="col">
                        <h4 className='text-warning'>Have a Question?</h4>
                        <div className='mt-5'>
                            <p><FaClock></FaClock><span className='ms-3'>Sun. - Mon.: 10:50 - 08:30</span></p>
                            <p><FaMailBulk></FaMailBulk><span className='ms-3'>rohit@gmail.com</span></p>
                            <p><FaLocationArrow></FaLocationArrow><span className='ms-3'>Dhaka, Bangladesh</span></p>
                            <p><FaPhone></FaPhone><span className='ms-3'>01824578100</span></p>

                        </div>

                    </div>
                    <div className="col">
                        <h4 className='text-warning'>Extras</h4>
                        <div className='mt-5'>
                            <p><a href="" className='text-decoration-none text-white'>My account</a></p>
                            <p><a href="" className='text-decoration-none text-white'>Wishlist</a></p>
                            <p><a href="" className='text-decoration-none text-white'>Order Tracking</a></p>
                            <p><a href="" className='text-decoration-none text-white'>Terms & Conditions</a></p>
                        </div>
                    </div>
                    <div className="col">
                        <h4 className='text-warning'>Payment Options</h4>
                        <div className='mt-5'>
                            <p><FaPaypal></FaPaypal> <span className='ms-3'>Paypal</span></p>
                            <p><FaCcVisa></FaCcVisa> <span className='ms-3'>Visa</span></p>
                            <p><FaCcMastercard></FaCcMastercard> <span className='ms-3'>Mastercard</span></p>
                            <p><FaCcAmazonPay></FaCcAmazonPay> <span className='ms-3'>AmazonPaysa</span></p>
                        </div>
                    </div>



                </div>
                <p className='text-center mt-5'>All rights reserved copyright@2023</p>
            </Container>

        </div>

    );
};

export default Footer;