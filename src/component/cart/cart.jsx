import React from 'react';

function Cart() {
    return (
        <div>
            <div className='flex justify-center '>
                <button className='bg-green-700 flex gap-3 justify-center px-20 py-3 rounded-lg hover:bg-green-900'>
                    <div className='m-auto'>
                        <img src='../public/img/icon-cart.svg' alt='' />
                    </div>
                    <p className='text-white font-bold'>Add to Cart</p>
                </button>
            </div>
        </div>
    );
}

export default Cart;
