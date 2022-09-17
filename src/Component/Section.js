import React from 'react';
import img from "../asset/splash-index.png"
import { Link } from "react-router-dom";

const Section = () => {
    return (
        <div className='h-[300px] flex justify-center items-center' style={{
            backgroundImage: `url(${img})`, fontSize: '',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom 25% center'

        }}>
            <div className='w-[1200px] rounded'>
                <h1 className='text-2xl'>E-vignettes at vintrica</h1>
                <p className='my-2'>Buy a motorway e-vignette quickly and easily at vintrica.</p>
                <div className='bg-orange-600 py-3 flex justify-evenly rounded'>
                    <select className="select select-secondary w-full h-[40px] max-w-xs">
                        <option disabled selected>Country</option>
                        <option>Bulgaria</option>
                        <option>Hungray</option>
                        <option>Slovakia</option>
                        <option>Czech republic</option>

                    </select>
                    <select className="select select-secondary w-full h-[40px] max-w-xs">
                        <option disabled selected>vihicles Catagory</option>
                        <option>vihicles</option>
                        <option>Thirils</option>
                        <option>Cars</option>
                        <option>Motorcycles</option>
                        <option>Cars/good/transport</option>
                        <option>Buses</option>
                        <option>Thrills for catagory D2 and B2</option>

                    </select>
                    <select className="select select-secondary w-full h-[40px] max-w-xs">
                        <option disabled selected>Duration</option>
                        <option>1 weeked</option>
                        <option>1 week</option>
                        <option>1 month</option>
                        <option>3 month</option>
                        <option>1 year</option>

                    </select>
                    <Link to="/vignettes" className="btn bg-blue-600 px-4 pt-2 rounded">Continue {'>>'}</Link>
                </div>

                <p className='mt-10'>Secure: Your data is transmitted SSL-encrypted.</p>
            </div>


        </div>
    );
};

export default Section;