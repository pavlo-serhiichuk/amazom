import React, {FC} from 'react';
import {IProduct} from '../../models/IProduct'

interface SearchProductProps {
  product: IProduct
}

const SearchProduct:FC<SearchProductProps> = ({product}) => {
  console.log(product)
  return (
    <div>
      {product.title}
    </div>
  );
};

export default SearchProduct;