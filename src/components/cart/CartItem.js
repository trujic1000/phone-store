import React from 'react';

export default function CartItem({ product, state }) {
  const { cart, inc, dec, removeItem } = state;
  const { id, title, img, price, total, count } = product;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          alt="Product"
          style={{ width: '5rem', height: '5rem' }}
          className="img-fluid"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Product: </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price: </span>${price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <span className="btn btn-black mx-1" onClick={() => dec(id)}>
            -
          </span>
          <span className="btn btn-black mx-1" style={{ cursor: 'auto' }}>
            {count}
          </span>
          <span className="btn btn-black mx-1" onClick={() => inc(id)}>
            +
          </span>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div
          className="cart-icon"
          onClick={() => {
            removeItem(id);
          }}
        >
          <i className="fas fa-trash" />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong className="d-lg-none">Item total: </strong>
        <strong>${price}</strong>
      </div>
    </div>
  );
}
