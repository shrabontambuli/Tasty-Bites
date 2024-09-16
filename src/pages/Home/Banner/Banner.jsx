import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';

import img1 from '../../../assets/home/passepartout-slide1.jpg';
import img2 from '../../../assets/home/passepartout-slide2-new-new.jpg';
import img3 from '../../../assets/home//passepartout-slide3.jpg';
import sign from '/passepartout-slide-logo.png';

const Banner = () => {
    // useEffect(() => {
    //     AOS.init({ duration: 1000 });
    // }, []);
    return (
        <Carousel autoPlay={Boolean} infiniteLoop={Boolean}>
            <div className='w-[1920px] h-[700px]'>
                <img className='w-full h-full relative' src={img1} />
                <div className='centerP'>
                    <div className='w-60 h-10 mx-auto'>
                        <img src={sign} alt="" />
                    </div>
                    <div className='mt-28' data-aos="zoom-out-down">
                        <h1 className='text-7xl'>Fresh Restaurant</h1>
                        <button className="btn btn-outline border border-[#C19977] border-b-4 shadow-md mt-10">Order Now</button>
                    </div>
                </div>
            </div>
            <div className='w-[1920px] h-[700px]'>
                <img className='w-full h-full relative ' src={img2} />
                <div className='centerP'>
                    <div className='w-60 h-10 mx-auto'>
                        <img src={sign} alt="" />
                    </div>
                    <div className='mt-28'>
                        <h1 className='text-7xl'>Traditional Food</h1>
                        <button className="btn btn-outline border border-[#C19977] border-b-4 shadow-md mt-10">Order Now</button>
                    </div>
                </div>
            </div>
            <div className='w-[1920px] h-[700px]'>
                <img className='w-full h-full relative ' src={img3} />
                <div className='centerP'>
                    <div className='w-60 h-10 mx-auto'>
                        <img src={sign} alt="" />
                    </div>
                    <div className='mt-28'>
                        <h1 className='text-7xl'>Authentic Dishes</h1>
                        <button className="btn btn-outline border border-[#C19977] border-b-4 shadow-md mt-10">Order Now</button>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;