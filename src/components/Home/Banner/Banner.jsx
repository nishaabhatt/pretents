import "./Banner.scss";
import BannerImg from "../../../assets/hero-banner/e-commerce.png";

const Banner = () => {
    return (<div className="hero-banner">
        <div className="content">
           <div className="text-content">
            <h1>SALES</h1>
            <p>BUY FROM OUR WEBSITE</p>
            <div className="ctas">
                <div className="banner-cta">Read More</div>
                <div className="banner-cta v2">Shop Now</div>
            </div>
           </div>
           <img src={BannerImg} alt="" className="banner-img" />
        </div>
    </div>
    );
};

export default Banner;
