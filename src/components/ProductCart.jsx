import React from 'react';
import { Link } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../stores/Cart';


const ProductCart = (props) => {
  const carts = useSelector(store => store.cart.items);
  const { id, name, price, image, slug } = props.data;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: id,
      quantity: 1
    }));
  };

  return (
    <div className="product-card">
      <Link to={slug}>
        <img
          src={image}
          alt=""
          className="product-image"
        />
      </Link>
      <h3 className="product-name">{name}</h3>
      <div className="product-footer">
        <p>
          $<span className="product-price">{price}</span>
        </p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          <img src={iconCart} alt="" className="cart-icon" />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
