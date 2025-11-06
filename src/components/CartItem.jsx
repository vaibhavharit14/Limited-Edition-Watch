import React, { useState, useEffect } from 'react';
import { products } from './products';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/Cart';

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.find(product => product.id === productId);
    setDetail(findDetail);
  }, [productId]);

  const handleMinusQuantity = () => {
    dispatch(changeQuantity({
      productId: productId,
      quantity: quantity - 1
    }));
  };

  const handlePlusQuantity = () => {
    dispatch(changeQuantity({
      productId: productId,
      quantity: quantity + 1
    }));
  };

  if (!detail) {
    return (
      <div className="cart-item">
        <p>Loading item details...</p>
      </div>
    );
  }

  return (
    <div className="cart-item">
      <img src={detail.image} alt={detail.name} className="cart-item-image" />
      <h3 className="cart-item-name">{detail.name}</h3>
      <p className="cart-item-price">${detail.price * quantity}</p>
      <div className="cart-item-controls">
        <button className="qty-btn" onClick={handleMinusQuantity}>-</button>
        <span>{quantity}</span>
        <button className="qty-btn" onClick={handlePlusQuantity}>+</button>
      </div>
    </div>
  );
};

export default CartItem;