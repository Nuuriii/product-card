import React from 'react';

function Content() {
    return (
        <div className=''>
            <div className=''>
                <div className='m-7'>
                    <h4 className='font-mono flex gap-1'>
                        <span>P</span>
                        <span>E</span>
                        <span>R</span>
                        <span>F</span>
                        <span>U</span>
                        <span>M</span>
                        <span>E</span>
                    </h4>
                    <h1 className='text-3xl font-bold mt-3'>
                        Gabrielle Essence Eau De Parfum
                    </h1>
                    <p className='mt-3'>
                        A floral, solar and voluptuous interpretation composed
                        by Olivier Polge, Perfumer-Creator for the House of
                        CHANEL.
                    </p>
                </div>
                <div className='flex gap-5 ml-7 mr-7 mb-4'>
                    <p className='text-3xl text-green-800 font-bold'>$149.99</p>
                    <p className='line-through mt-auto mb-auto'>$169.99</p>
                </div>
            </div>
        </div>
    );
}

export default Content;
