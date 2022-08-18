import React, {FC} from 'react';
import {IProduct} from '../../models/IProduct'
import {Link, Wrapper} from './BreadCrumbs.style'

interface BreadCrumbsProps {
  product: IProduct
}

const BreadCrumbs: FC<BreadCrumbsProps> = ({product}) => {
  return (
    <Wrapper>
      <Link to="market">
        Market
      </Link>
      <Link to={`market/${product.category}`}>
        &nbsp;/ {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
      </Link>
      <Link to={`market/${product.category}/${product.id}`}>
        &nbsp;/ {product.title}
      </Link>
    </Wrapper>
  );
};

export default BreadCrumbs;