import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  useProductState,
  useCartState,
  useModalState
} from '../../../global-state';

export default function ProductItem({ product }) {
  const { id, title, img, price, inCart } = product;
  const { productActions } = useProductState();
  const { setProductDetails } = productActions;
  const { cartActions } = useCartState();
  const { addItemToCart } = cartActions;
  const { modalActions } = useModalState();
  const { openModal } = modalActions;
  return (
    <Product className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div
          className="img-container p-5"
          onClick={() => setProductDetails(product)}
        >
          <Link to="/details">
            <img src={img} alt="product" className="card-img-top" />
          </Link>
          <button
            className="cart-btn"
            disabled={inCart}
            onClick={() => {
              addItemToCart(id);
              openModal(id);
            }}
          >
            {inCart ? (
              <p className="text-capitalize m-0 p-0" disabled>
                In Cart
              </p>
            ) : (
              <i className="fas fa-cart-plus" />
            )}
          </button>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">${price}</span>
          </h5>
        </div>
      </div>
    </Product>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const Product = styled.div`
  .card {
    border-color: transparent;
    transition: all 500ms linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 500ms linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 500ms linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transition: all 500ms linear;
    transform: translate(100%, 100%);
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
