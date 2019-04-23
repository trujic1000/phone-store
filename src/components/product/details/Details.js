import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { StateContext } from '../../../context/StateContext';
import { Button } from '../../common/Button';

export default function Details() {
  const { product, cartActions, modalActions } = useContext(StateContext);
  const { productDetails } = product;
  const { addItemToCart } = cartActions;
  const { openModal } = modalActions;

  const { id, title, img, price, company, info, inCart } = productDetails;
  return (
    <div className="container py-5">
      {/* Product Title */}
      <div className="row">
        <div className="col-10 mx-auto text-center text-blue my-5">
          <h1>{title}</h1>
        </div>
      </div>
      {/* End Product Title  */}
      {/* Product Info */}
      <div className="row">
        {/* Product Image */}
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={img} alt="Product" className="img-fluid" />
        </div>
        {/* Product Details */}
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h2>Model: {title}</h2>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            Made by: {company}
          </h4>
          <h4 className="text-blue">
            <strong>
              Price: <span>$</span>
              {price}
            </strong>
          </h4>
          <p className="text-capitalized font-weight-bold mt-3 mb-0">
            Some info about the product:
          </p>
          <p className="text-muted lead">{info}</p>
          {/* Buttons */}
          <div>
            <Link to="/">
              <Button>Back To Products</Button>
            </Link>
            <Button
              cart
              disabled={inCart}
              onClick={() => {
                addItemToCart(productDetails);
                openModal(id);
              }}
            >
              {inCart ? 'In Cart' : 'Add to cart'}
            </Button>
          </div>
        </div>
      </div>
      {/* End Product Info */}
    </div>
  );
}
