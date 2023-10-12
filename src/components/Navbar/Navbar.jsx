
"use client"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import "./Navbar.scss";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const closeMenu = () => {
        setClick(false);
    };

    const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 200) {
        setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, []);

    const content = (
        <div className="md:hidden z-50 block absolute  w-full left-0 right-0 transition ">
            <ul className="text-center text-xl p-10 ">
                <Link to="/"><li className="hover:text-blue-600 transition border-b-2 border-white
             hover:blue-400 cursor-pointer">HOME</li></Link>
                <Link to="/">
                    <li className="my-4 py-4 border-b border-blue-200 text-blue-700 hover:text-blue-500
                transition-all duration-150 hocer:bg-blue-200 hover:rounded ">CATEGORY</li>
                </Link>
                <Link to="/"><li className="hover:text-blue-600 transition border-b-2 border-white
             hover:blue-400 cursor-pointer">MENS</li></Link>
                <Link to="/"><li className="hover:text-blue-600 transition border-b-2 border-white
             hover:blue-400 cursor-pointer">WOMENS</li></Link>
                <Link to="/"><li className="hover:text-blue-600 transition border-b-2 border-white
             hover:blue-400 cursor-pointer">JWELLERY</li></Link>
                <Link to="/"><li className="hover:text-blue-600 transition border-b-2 border-white
             hover:blue-400 cursor-pointer">PERFUME</li></Link>
                <Link to="/"><li className="hover:text-blue-600 transition border-b-2 border-white
             hover:blue-400 cursor-pointer">COLLECTIONS</li></Link>
                <Link to="/"><li className="hover:text-blue-600 transition border-b-2 border-white
             hover:blue-400 cursor-pointer">HOT OFFERS</li></Link>
            </ul>
        </div>
    );

    return (
        <nav className={`${scrolled ? 'sticky-header' : ''} z-50 bg-white text-black`}>
            <div className="h-10vh flex justify-between items-center lg:py-5 px-20 py-8 border-b ">
                <div className="lg:flex md:flex flex-1 justify-center items font-normal hidden " >
                    <ul className="flex gap-8 mr-16 text-[18px]">
                        <Link to="/"><li className="hover:text-blue-600 transition border-b-2
                         border-white
             hover:blue-400 cursor-pointer">HOME</li></Link>
                        {/* mega menu start */}
                        <div className="group">
                            <button className="hover:text-blue-600 transition border-b-2 border-white
                 hover:blue-400 cursor-pointer"><Link to="/">CATEGORY</Link></button>
                            <div className="hidden group-hover:flex flex-col absolute  p-10 w-[220px] bg-white 
                    z-20 text-black duration-300 shadow-lg ">
                                <div className="flex flex-col ">
                                    <h3 className="mb-4 text-2xl text-blue-800 font-semibold">Products</h3>
                                    <a href='/' className="hover:underline hover:text-red-900">abc</a>
                                    <a href='/' className="hover:underline hover:text-red-900">abc</a>
                                    <a href='/' className="hover:underline hover:text-red-900">abc</a>
                                    <a href='/' className="hover:underline hover:text-red-900">abc</a>
                                </div>
                            </div>
                        </div>
                        {/* mega menu end */}
                        <Link to="/"><li className="hover:text-blue-600 transition border-b-2 border-white
             hover:blue-400 cursor-pointer">MENS</li></Link>
                        <Link to="/"><li className="hover:text-blue-600 transition border-b-2 border-white
             hover:blue-400 cursor-pointer">WOMENS</li></Link>
                        <Link to="/"><li className="hover:text-blue-600 transition border-b-2 border-white
             hover:blue-400 cursor-pointer">JWELLERY</li></Link>
                        <Link to="/"><li className="hover:text-blue-600 transition border-b-2 border-white
             hover:blue-400 cursor-pointer">PERFUME</li></Link>
                        <Link to="/"><li className="hover:text-blue-600 transition border-b-2 border-white
             hover:blue-400 cursor-pointer">COLLECTIONS</li></Link>
                        <Link to="/"><li className="hover:text-blue-600 transition border-b-2 border-white
             hover:blue-400 cursor-pointer">HOT OFFERS</li></Link>
                    </ul>
                </div>
                <div>{click && content}</div>
                <button className="block sm:hidden transition-none" onClick={handleClick} >
                    {click ? <FaTimes className="text-black" /> : <CiMenuFries />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

