import React from 'react';
const RegisterEvigneette = ({ id, data, loading }) => {

    return (
        <div className='max-w-[800px] mx-auto h-auto mb-4 -z-10 mt-[48px]'>
            <h1 className='text-2xl'>Register e-vignette</h1>
            {loading && <p>loading...</p>}
            <div className='flex mt-4 justify-between'>
                <div className='bg-neutral-300 p-2 rounded'>Select e-vigneette</div>
                <div className={id ? 'bg-orange-400 p-2 rounded' : 'bg-neutral-300 p-2 rounded'}>Number {"&"} validity</div>
                <div className='bg-neutral-300 p-2 rounded'>shopping cart</div>
                <div className='bg-neutral-300 p-2 rounded'>Email address</div>
                <div className='bg-neutral-300 p-2 rounded'>Overview, T {"&"}C</div>
                <div className='bg-neutral-300 p-2 rounded'>Pay{"&"}go</div>
            </div>
            <div className='border-black border-2 mt-10 h-[65px] p-3 bg-emerald-200 text-2xl'>
                you have selected vihicles : <span className='font-bold text-orange-500'>{data?.vihicles} </span>

            </div>
            <p className='my-3 text-2xl font-semibold'>Valid in: <span className='text-gray-400'>{data?.Country} </span> </p>
            <div className='bg-gray-100 p-3'>
                <h1 className='text-2xl mb-4'>Vehicle details</h1>
                <p className='mb-6'>Country of registration <select className="select select-warning border-gray-400 border-2 h-[40px] rounded w-full max-w-xs">
                    <option>Cheese</option>
                    <option>Veggie</option>
                    <option>Pepperoni</option>
                    <option>Margherita</option>
                    <option>Hawaiian</option>
                </select>
                    <p className='ml-[168px]'>In which Country is your vihicles registered</p>
                </p>
            </div>

            <div className='border-black border-2 mt-10 h-[65px] p-3 bg-emerald-200 text-2xl'>
                you have selected Duration : <span className='font-bold text-orange-500'>  {data?.Duration} </span>

            </div>
            <div className='bg-gray-100 p-3 mt-8'>
                <h1 className='text-2xl mb-4'>Vehicle period</h1>
                <p className='mb-6'>Start date <input type="text" className="select select-warning border-gray-400 border-2 h-[40px] rounded w-full max-w-xs" />

                </p>
            </div>
            <div className='mt-4'>
                <p>Start date: <span className='text-2xl font-bold text-teal-700 mt-4'>Please first select the start date.</span></p>
            </div>
            <button className='w-full h-[40px] rounded bg-blue-700 mt-4'>Add toCart</button>
            <p className='mt-3'>Secure: Your data is transmitted SSL-encrypted.</p>
        </div>
    );
};

export default RegisterEvigneette;