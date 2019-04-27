import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../common/Button';

import { useModalState } from '../../../global-state';

export default function Modal() {
  const { modalState, modalActions } = useModalState();
  const { modalOpen, modalProduct } = modalState;
  const { closeModal } = modalActions;
  const { img, title, price } = modalProduct;
  // If Modal is closed don't display anything
  if (!modalOpen) return null;
  return (
    <ModalContainer>
      <div className="container">
        <div className="row">
          <div
            id="modal"
            className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalized p-5"
          >
            <h5>Item added to cart</h5>
            <img src={img} alt="Product" className="img-fluid" />
            <h5>{title}</h5>
            <h5 className="text-muted">Price: ${price}</h5>
            <Link to="/">
              <Button onClick={() => closeModal()}>Back</Button>
            </Link>
            <Link to="/cart">
              <Button cart onClick={() => closeModal()}>
                Go to cart
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  #modal {
    background: var(--mainWhite);
  }
`;
