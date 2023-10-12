import "./Products.scss";
import Product from "./Product/Product"

const Products = ({ products, innerPage, headingText }) => {

    if (!products || !products.data) {
        // Handle the case where categories or categories.data is undefined
        return null; // or you can render an error message or loading indicator
    }

    return <div className="products-container">
    {!innerPage && <div className="sec-heading">{headingText}</div>}
        <div className="product">
            {products?.data?.map((item) => (
                    <Product key={item.id} id={item.id} data={item.attributes} />
            ))}
        </div>
    </div>;
};

export default Products;
