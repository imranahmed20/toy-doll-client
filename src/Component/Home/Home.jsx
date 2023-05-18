import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Categories from './Categories/Categories';
import Free from './Free/Free';
import Tranding from './Tranding/Tranding';



const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categories></Categories>
            <Free></Free>
            <Tranding></Tranding>
        </div>
    );
};

export default Home;