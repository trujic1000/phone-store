import React, { useContext } from 'react';
import ProductItem from '../product-item/ProductItem';
import Title from '../../common/Title';
import { ProductContext } from '../../../context';

export default function ProductList() {
  // Getting state from context
  const state = useContext(ProductContext);
  let products = state.products.map(product => (
    <ProductItem key={product.id} product={product} />
  ));
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="Our" title="Products" />
          <div className="row">{products}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
