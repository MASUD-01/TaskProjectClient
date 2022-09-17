import React from 'react';
import img from "../asset/vintrica_splash.jpg"
import Header from './Header';
import Section from './Section';

const Home = ({ setId }) => {
    return (
        <div className='mt-[48px]'>
            <Section setId={setId}></Section>
            <div className="hero bg-base-200 p-14">
                <div className="hero-content flex justify-between lg:flex-row-reverse px-20">
                    <img src={img} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='w-[500px]'>

                        <p className="py-6 text-2xl">E-vignette: here’s how it works</p>
                        <p>With vintrica it’s easy to register your number plate online for all motorways and main roads that require a vignette. You can simply buy a vignette either from home before you start your journey or on the spur of the moment during your journey on your smartphone before you get on the motorway.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;