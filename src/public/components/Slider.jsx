import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import sliderImg1 from '../../assets/slider1.jpg';
import sliderImg2 from '../../assets/slider2.jpg';

const Slider = () => {
    return (
        <div className='grid grid-cols-2 justify-between mt-4 gap-2 p-6'>
            <div className='rounded-md shadow-lg'>
            <Carousel>
                <div>
                    <img src={sliderImg1} />
                </div>
                <div>
                    <img src={sliderImg2} />
                </div>
            </Carousel>
            </div>
            <div className='flex flex-col gap-2 '>
                <img className='rounded-lg shadow-lg' src={banner1} alt="" />
                <img className='rounded-lg shadow-lg' src={banner2} alt="" />
            </div>
        </div>
    );
};

export default Slider;