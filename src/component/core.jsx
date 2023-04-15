import React from 'react';
import Image from './image/image';
import Content from './content/content';
import Cart from './cart/cart';

export default function Core() {
    return (
        <div className='overflow-hidden m-5 rounded-xl bg-white pb-7 lg:flex justify-center lg:mt-40 lg:mb-40 lg:ml-80 lg:mr-80 lg:h-96'>
            <div className='lg:w-96'>
                <Image />
            </div>
            <div className='lg:w-96 '>
                <Content />
                <Cart />
            </div>
        </div>
    );
}
