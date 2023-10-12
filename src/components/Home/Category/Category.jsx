// import { useNavigate } from "react-router-dom";
// import "./Category.scss";


// const Category = ({categories}) => {

//     if (!categories || !categories.data) {
//         // Handle the case where categories or categories.data is undefined
//         return null; // or you can render an error message or loading indicator
//     }

//     const navigate = useNavigate();

//     return (
//     <div className="shop-by-category">
//         <div className="categories">
//             {categories.data.map((item) => (
//                 <div key={item.id} className="category" onClick={() => navigate(`/category${item.id}`)}>
//                 <img src={process.env.REACT_APP_DEV_URL  + item.attributes.img.data.attributes.url}
//                  alt="" />
//                 </div>
//             ))}
//         </div>
//     </div>
//     );
// };

// export default Category;

import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ categories }) => {
    const navigate = useNavigate(); // Always call the hook unconditionally

    if (!categories || !categories.data) {
        // Handle the case where categories or categories.data is undefined
        return null; // or you can render an error message or loading indicator
    }

    const handleCategoryClick = (itemId) => {
        navigate(`/category/${itemId}`);
    };

    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories?.data?.map((item) => (
                    <div key={item.id} className="category" onClick={() => handleCategoryClick(item.id)}>
                        <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
