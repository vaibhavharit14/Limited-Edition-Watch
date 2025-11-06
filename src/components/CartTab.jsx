import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { toggleStatusTab } from '../stores/Cart';


const CartTab = () => {
  const carts = useSelector(store => store.cart.items);
  const statusTab = useSelector(store => store.cart.statusTab);
  const dispatch = useDispatch();

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <div className={`cart-tab ${statusTab === false ? 'cart-tab-hidden' : ''}`}>
      <h2 className="cart-title">Shopping Cart</h2>
      <div className="cart-items">
        {carts.map((item, key) => (
          <CartItem key={key} data={item} />
        ))}
      </div>
      <div className="cart-buttons">
        <button className="btn-close" onClick={handleCloseTabCart}>CLOSE</button>
        <button className="btn-checkout">CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartTab;
