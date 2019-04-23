import React, { useContext } from 'react';
import Title from '../common/Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotal from './CartTotal';
import { StateContext } from '../../context/StateContext';

export default function Cart() {
  const { cartState, cartActions } = useContext(StateContext);
  const { cart } = cartState;
  let content;
  content =
    cart.length > 0 ? (
      <React.Fragment>
        <Title name="your" title="cart" />
        <CartColumns />
        <CartList cart={cart} />
        <CartTotal cartState={cartState} cartActions={cartActions} />
      </React.Fragment>
    ) : (
      <EmptyCart />
    );
  return content;
}
