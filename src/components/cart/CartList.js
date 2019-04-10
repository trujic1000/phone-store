import React from 'react';
import CartItem from './CartItem';

export default function CartList({ state }) {
  return (
    <div className="container-fluid">
      {state.cart.map(product => (
        <CartItem key={product.id} product={product} state={state} />
      ))}
    </div>
  );
}
