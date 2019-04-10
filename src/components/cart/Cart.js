import React, { useContext } from 'react';
import Title from '../common/Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotal from './CartTotal';
import { ProductContext } from '../../context';

export default function Cart() {
  const state = useContext(ProductContext);
  const { cart } = state;
  let content;
  content =
    cart.length > 0 ? (
      <React.Fragment>
        <Title name="your" title="cart" />
        <CartColumns />
        <CartList state={state} />
        <CartTotal state={state} />
      </React.Fragment>
    ) : (
      <EmptyCart />
    );
  return content;
}
