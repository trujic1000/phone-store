import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CartTotal({ cartState, cartActions }) {
  const { cartSubtotal, cartTax, cartTotal } = cartState;
  const { addTotals, clearCart } = cartActions;
  // Updating Total value
  useEffect(() => {
    addTotals();
  }, [cartSubtotal]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalized text-right">
          <Link to="/">
            <button
              onClick={() => clearCart()}
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              type="button"
            >
              Clear Cart
            </button>
          </Link>
          <h5>
            <span className="text-title">Subtotal: </span>
            <strong>${cartSubtotal}</strong>
          </h5>
          <h5>
            <span className="text-title">Tax: </span>
            <strong>${cartTax}</strong>
          </h5>
          <h5>
            <span className="text-title">Total: </span>
            <strong>${cartTotal}</strong>
          </h5>
        </div>
      </div>
    </div>
  );
}
