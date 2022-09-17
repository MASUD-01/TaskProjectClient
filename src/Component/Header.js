import React from 'react';
import img from "../asset/logo.png"

const Header = () => {
    return (
        <header className='flex justify-between px-4 shadow-lg fixed w-full top-0 z-50 bg-white'>
            <div className='flex flex-1'>
                <div >
                    <img width="146px" className='p-4' src={img} alt="" />
                </div>
                <ul className='flex p-2'>
                    <a href="#"><li className='ml-3'>HomePage</li></a>
                    <a href="#"><li className='ml-3'>How It works</li></a>
                    <a href="#"><li className='ml-3'>Faqs</li></a>



                </ul>
            </div>
            <div className='flex list-none justify-end p-2 bg-orange-600'>
                <li className='ml-3'>EUR</li>
                <li className='ml-3'>Flags</li>
                <li className='ml-3'>Cart</li>
            </div>
        </header>
    );
};

export default Header;