// "use client"
// import React, {useState,useEffect, useContext} from "react";
// import logo from '../../assets/logo/logo.jpg';
// import { Link } from "react-router-dom";
// import { BsSearch } from "react-icons/bs";
// import { BiUser } from "react-icons/bi";
// import { FiHeart } from "react-icons/fi";
// import { HiOutlineShoppingBag } from "react-icons/hi";
// import {IoSearchOutline} from "react-icons/io5";
// import Cart from "../Cart/Cart";

// const Header = () => {
  

//   return (
//     <>
    
//     <div className=" border-b border-gray-200 py-4" >
//   <div className="container flex justify-between items-center">
    
//     <div className="h-10 w-[30%] sm:w-[300px] md:w-[15%] flex relative">
//    <input className="h-full w-full rounded-sm px-4 text-black text-base outline-none
//    border-[1px] border-slate-200 focus-visible:border-black duration-200 " type="text"
//    placeholder='Search...' />
//    <span className="absolute w-8 h-8 rounded-full flex items-center justify-center
//    top-1 right-1  text-black text-xl "><IoSearchOutline /></span>
// </div>

//     <div className="font-bold text-center pb-4 sm:pb-0 text-blackish">
//       <Link to="/" >
//         <img
//           src={logo}
//           alt=""
//           className="h-[6rem] w-[5rem] pt-5 sm:h-[8rem] sm:w-auto md:h-[6rem] md:w-auto lg:h-[8rem] lg:w-auto"
//         />
//       </Link>
//     </div>

//     <div className="flex gap-4 text-gray-500 text-[20px] md:text-[30px]">

//       <BiUser />
      

      
//         <FiHeart />
      

      
//         <div className="relative">
//           <HiOutlineShoppingBag />
//           <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[15px] h-[15px] md:w-[18px]
//            md:h-[18px] text-[8px] md:text-[12px] text-white grid place-items-center translate-x-1 
//            -translate-y-1">
//             {/* {cartItemCount} */}0
//           </div>
//         </div>
      
//     </div>
//   </div>
// </div>
// <Cart />
// </>
//   );
// };

// export default Header;

import "./Header.scss";
import {React, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo/logo.jpg';
import {useNavigate} from "react-router-dom";
import {TbSearch} from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";
import Search from "./Search/Search";
import {Context} from "../../utils/context";
import Cart from "../Cart/Cart";

const Header = () => {

  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const {cartCount} = useContext(Context);
  const navigate = useNavigate();

  return (
  <>
    <header className="main-header">
      <div className="header-content">

        <ul className="left">
          <li onClick={() => navigate("/")}>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
        
        <div className="center" onClick={() => navigate("/")}>
       <img
          src={logo}
          alt=""
          className="h-[6rem] w-[5rem] pt-5 sm:h-[8rem] sm:w-auto md:h-[6rem] md:w-auto 
          lg:h-[8rem] lg:w-auto"
        />
        </div>

        <div className="right">
          <TbSearch onClick={() => setShowSearch(true)} />
          <AiOutlineHeart />
          <span className="cart-icon" onClick={() => setShowCart(true)}>
            <CgShoppingCart />
          {!!cartCount && <span>{cartCount}</span>}
          </span>
        </div>

      </div>
    </header>
    {showCart && <Cart setShowCart={setShowCart}/>}
    {showSearch && <Search setShowSearch={setShowSearch} />}
  </>  
  )
}

export default Header



