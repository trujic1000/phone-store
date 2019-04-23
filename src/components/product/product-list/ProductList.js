import React, { useContext } from 'react';
import ProductItem from '../product-item/ProductItem';
import Title from '../../common/Title';
// import { ProductContext } from '../../../context';
import { StateContext } from '../../../context/StateContext';

export default function ProductList() {
  // Getting product from context
  // const { products } = useContext(ProductContext);
  const { product } = useContext(StateContext);
  const { products } = product;
  let productItems = products.map(product => (
    <ProductItem key={product.id} product={product} />
  ));
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="Our" title="Products" />
          <div className="row">{productItems}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
