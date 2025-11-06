import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../components/products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/Cart';


const Detail = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.filter(product => product.slug === slug);
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      window.location.href = '/';
    }
  }, [slug]);

  const handleMinusQuantity = () => {
    setQuantity(prev => (prev - 1 < 1 ? 1 : prev - 1));
  };

  const handlePlusQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: detail.id,
      quantity: quantity
    }));
  };

  return (
    <div className="detail-wrapper">
      <h2 className="detail-title">PRODUCT DETAIL</h2>
      <div className="detail-grid">
        <div>
          <img src={detail.image} alt="" className="detail-image" />
        </div>
        <div className="detail-info">
          <h1 className="detail-name">{detail.name}</h1>
          <p className="detail-price">${detail.price}</p>
          <div className="detail-cart-controls">
            <div className="quantity-box">
              <button className="qty-btn" onClick={handleMinusQuantity}>-</button>
              <span className="qty-value">{quantity}</span>
              <button className="qty-btn" onClick={handlePlusQuantity}>+</button>
            </div>
            <button className="add-cart-btn" onClick={handleAddToCart}>Add To Cart</button>
          </div>
          <p className="detail-description">{detail.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
