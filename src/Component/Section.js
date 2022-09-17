import React, { useState } from 'react';
import img from "../asset/splash-index.png"
import { useNavigate } from "react-router-dom";

const Section = ({ setId }) => {
    const [myCar, setMyCar] = useState("");
    const [myCars, setMyCars] = useState("");
    const [myCarss, setMyCarss] = useState("");
    const navigate = useNavigate();

    const handleTask = () => {
        fetch('http://localhost:5000/task', {
            method: "POST",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({ Country: myCar, vihicles: myCars, Duration: myCarss })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                setId(data?.insertedId)
            })

        navigate("/vignettes")
    }


    console.log(myCars)
    const handleChange = (event) => {
        setMyCar(event.target.value)
    }
    const handleChanges = (event) => {
        setMyCars(event.target.value)
    }
    const handleChangess = (event) => {
        setMyCarss(event.target.value)
    }
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
                    <select className="select select-secondary w-full h-[40px] max-w-xs" onChange={handleChange}>
                        <option disabled selected>Country</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Hungray">Hungray</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Czech republic">Czech republic</option>
                    </select>
                    <select className="select select-secondary w-full h-[40px] max-w-xs" onChange={handleChanges}>

                        <option disabled selected>vihicles Catagory</option>
                        <option value="vihicles">vihicles</option>
                        <option value="Thirils">Thirils</option>
                        <option value="Cars">Cars</option>
                        <option value="Motorcycles">Motorcycles</option>
                        <option value="Cars/good/transport">Cars/good/transport</option>
                        <option value="Buses">Buses</option>
                        <option value="Thrills for catagory D2 and B2">Thrills for catagory D2 and B2</option>
                    </select>
                    <select className="select select-secondary w-full h-[40px] max-w-xs" onChange={handleChangess}>

                        <option disabled selected>Duration</option>
                        <option value="1 weeked">1 weeked</option>
                        <option value="1 week">1 week</option>
                        <option value="1 month">1 month</option>
                        <option value="3 month">3 month</option>
                        <option value="1 year">1 year</option>
                    </select>

                    <button className="btn bg-blue-600 px-4 rounded" disabled={!(myCar && myCars && myCarss)} onClick={handleTask}>Continue {'>>'}</button>
                </div>


                <p className='mt-10'>Secure: Your data is transmitted SSL-encrypted.</p>
            </div>


        </div>
    );
};

export default Section;