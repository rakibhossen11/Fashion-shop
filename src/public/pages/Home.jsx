import React from 'react';
import Slider from '../components/Slider';
import Man from './Products/Man';

const Home = () => {
    return (
        <div>
            <Slider />
            <h1 className='font-bold text-left text-2xl border-b-2 border-black pb-2 '>Gents</h1>
            <Man />
        </div>
    );
};

export default Home;