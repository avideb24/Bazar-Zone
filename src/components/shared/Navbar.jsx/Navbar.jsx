'use client';

import Link from "next/link";
import { useState } from "react";
import { CiSearch, CiUser, CiShoppingCart, CiLogin } from "react-icons/ci";
import { HiOutlineXMark } from "react-icons/hi2";
import { TypeAnimation } from "react-type-animation";
import { IoMdAddCircleOutline } from "react-icons/io";

const Navbar = () => {

    const [searchBtnClicked, setSearchBtnClicked] = useState(false);
    const [isTypeAnimationVisible, setIsTypeAnimationVisible] = useState(true);


    const handleSeachText = e => {
        const searchText = e.target.value;

        if (searchText.length > 0) {
            setIsTypeAnimationVisible(false)
        }
        else {
            setIsTypeAnimationVisible(true)
        }


    }


    return (
        <header className="bg-[color:var(--bg-primary)] pb-3 md:pb-0 shadow-md mb-4">
            <nav className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <nav className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="nav-items menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-200 rounded-box w-52">
                            <li>
                                <Link href={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link href={'/products'}>Products</Link>
                            </li>
                            <li>
                                <Link href={'/'}>About Us</Link>
                            </li>
                            <li>
                                <Link href={'/contact'}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <Link href={'/'}>Bazar-Zone</Link>
                </div>
                <nav className="navbar-center hidden lg:flex">
                    <ul className="nav-items menu menu-horizontal px-1">
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link href={'/products'}>Products</Link>
                        </li>
                        <li>
                            <Link href={'/'}>About Us</Link>
                        </li>
                        <li>
                            <Link href={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="navbar-end flex items-center gap-4 pr-3">
                    <div className="relative">
                        <button className="text-[28px] mt-2 hover:text-primary duration-150" onClick={() => setSearchBtnClicked(!searchBtnClicked)}>
                            {
                                searchBtnClicked ? <HiOutlineXMark /> : <CiSearch />
                            }
                        </button>
                        <form className={`search-form w-60 flex absolute right-1/4 duration-200 ${searchBtnClicked ? '-bottom-[90%] opacity-100' : '-bottom-[130%] opacity-0 pointer-events-none'}`}>
                            <input onChange={(e) => handleSeachText(e)} type="text" className="w-[80%] bg-[color:var(--bg-primary)] shadow-md border border-slate-100 px-3 py-1 rounded-l-sm outline-none" />

                            <div className={`${isTypeAnimationVisible ? '' : 'hidden'} absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none text-base`}>
                                <TypeAnimation
                                    sequence={[
                                        '',
                                        1000,
                                        'Search Products...',
                                        1000,
                                    ]}
                                    wrapper="span"
                                    speed={60}
                                    cursor={true}
                                    repeat={Infinity}
                                />
                            </div>

                            <button className="w-[20%]" type="submit">
                                <CiSearch className="text-xl p-2 w-full bg-secondary hover:bg-primary text-white h-10 duration-150  rounded-r-sm" />
                            </button>
                        </form>
                    </div>

                    {/* cart */}
                    <button className="inline-block relative">
                        <CiShoppingCart className="text-2xl" />
                        <span className="w-4 h-4 bg-primary text-white absolute -top-2 -right-2 text-[10px] text-center rounded-full">8</span>
                    </button>

                    {/* user */}
                    <button>
                        <CiUser className="text-2xl" />
                    </button>

                    {/* login / logout */}
                    <button className="text-2xl">
                        <CiLogin />
                    </button>

                    {/* add product btn */}
                    <Link href={'/add-product'} className="hidden"><IoMdAddCircleOutline /></Link>
                </div>

            </nav>
        </header>
    );
};

export default Navbar;



