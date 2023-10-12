import React from "react";
import { FaLocationArrow, FaMobileAlt,  FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import "./Footer.scss";

const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                Crafting Tomorrow’s IT Solutions, Today. Your Partner in Tech Excellence.</div>
            </div>

            <div className="col">
               <div className="title">Contact</div>
               <div className="c-item">
                 <FaLocationArrow />
                 <div className="text">Near Krishna Hospital Haldwani, Nainital 263139</div>
               </div>
            
            <div className="c-item">
                 <FaMobileAlt />
                 <div className="text">Phone: 65739478392</div>
               </div>
               <div className="c-item">
                 <FaEnvelope />
                 <div className="text">Email: acb@gmail.com</div>
               </div>
               </div>

            <div className="col">
                <span className="title">Categories</span>
                 <span className="text mt-5">Smart Watches</span>
                 <span className="text">Perfume</span>
                 <span className="text">Glasses</span>
                 <span className="text">Jwellery</span>
                 <span className="text">Handbags</span>
                 <span className="text">Wallet</span>
            </div>

            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Terms & conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">© 2023 PreetEnterprise, Inc. All Rights Reserved</div>
                <img src={Payment} />
            </div>
        </div>
    </footer>;
};

export default Footer;
