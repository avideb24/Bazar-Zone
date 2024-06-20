'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CiHeart } from "react-icons/ci";
import useCart from '@/hooks/useCart';
import Swal from 'sweetalert2';

const Card = ({ product }) => {

    const [cart, setCart] = useCart();

    const cartProduct = {
        _id: product?._id,
        title: product?.title,
        img1: product?.img1,
        price: product?.price,
        quantity: 1,
    }


    const handleAddToCart = (productId) => {
        const isAlreadyAdded = cart?.find(product => product._id == productId);

        if (isAlreadyAdded) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Already Added!",
                showConfirmButton: false,
                timer: 1500
              });
        }
        else {
            setCart((prev) => [...prev, cartProduct])
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Added Successfully!",
                showConfirmButton: false,
                timer: 1500
              });
        }

    };

    return (
        <div className='max-w-72 group'>
            <div className='max-h-80 relative'>
                <Link href={`/products/${product?._id}`}>
                    <Image src={product?.img1} width={500} height={500} className='w-full h-full object-cover ' alt='product image' />
                </Link>
                {/* <img src={product?.img1} className='w-full h-full object-cover ' alt="" /> */}
                {/* favourite btn */}
                <button className='absolute right-3 top-3 text-xl bg-white px-2 py-2 rounded-full hover:bg-secondary hover:text-white duration-200'>
                    <CiHeart />
                </button>
                {/* add to cart btn */}
                <button onClick={() => handleAddToCart(product?._id)} className='absolute left-0 -bottom-5 bg-secondary text-white text-center font-semibold py-3 w-full uppercase opacity-0 group-hover:opacity-100 group-hover:bottom-0 hover:bg-primary duration-200'>+ add to cart</button>
            </div>
            {/* title & price */}
            <div className='flex flex-col items-center py-5'>
                <Link href={`/products/${product?._id}`}>
                    <h2 className='text-base font-semibold mb-1 hover:text-primary duration-150'>{product?.title}</h2>
                </Link>
                <p>$26.65</p>
            </div>
        </div>
    );
};

export default Card;