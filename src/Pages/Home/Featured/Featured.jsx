import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item'>
            <SectionTitle subHeading={'Check It Out'} heading={'Featured Item'}
            ></SectionTitle>
            <div className='md:flex gap-3 justify-center items-center pb-20 pt-12 px-36'>
                <div>
                <img src={featuredImg} alt="" />

                </div>
                <div className='text-white'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea harum earum? Nam, earum blanditiis error nemo laudantium nesciunt suscipit nobis qui! Perferendis est recusandae consequatur voluptatum ullam, maxime fugit.</p>
                    <button className="btn btn-active btn-neutral">Order Now</button>

                </div>
            </div>
        </div>
    );
};

export default Featured;