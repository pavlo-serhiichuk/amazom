import React, {FC} from 'react';
import {IProduct} from '../../models/IProduct'
import {Wrapper} from './CategoryProduct.style'

interface ProductProps {
  product: IProduct
}

const CategoryProduct: FC<ProductProps> = ({product}) => {
  return (
    <Wrapper>
      {product.title}
    </Wrapper>
  );
};

export default CategoryProduct;