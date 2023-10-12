
import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/product/jwellery4.jpg"
import { useContext } from "react";
import { Context } from "../../../utils/context";

const CartItem = () => {
    const { cartItems, handeRemoveFromCart, handeCartProductQuantity } = useContext(Context);

    return (
        <div className="cart-products">
            {cartItems.map((item) => (
                <div key={item.id} className="cart-product">
                    <div className="img-container">
                        <img src={process.env.REACT_APP_DEV_URL + 
                            item.attributes.img.data[0].attributes.url}
                             alt="" />
                    </div>
                    <div className="prod-details">
                        <span className="name"> {item.attributes.title} </span>
                        <MdClose className="close-btn" onClick={() => handeRemoveFromCart(item)}/>
                        <div className="quantity-buttons">
                            <span onClick={() => handeCartProductQuantity('dec', item)}>-</span>
                            <span>{item.attributes.quantity}</span>
                            <span onClick={() => handeCartProductQuantity('inc', item)}>+</span>
                        </div>
                        <div className="text">
                            <span>{item.attributes.quantity}</span>
                            <span>x</span>
                            <span>&#8377; {item.attributes.price * item.attributes.quantity} </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartItem;


