import React, {FC} from 'react';
import {IProduct} from '../../models/IProduct'
import {LinkTo, Wrapper} from './BreadCrumbs.style'

interface BreadCrumbsProps {
  product: IProduct
}

const BreadCrumbs: FC<BreadCrumbsProps> = ({product}) => {
  return (
    <Wrapper>
      <LinkTo to="/market">
        Market
      </LinkTo>
      <LinkTo to={`/market/${product.category}`}>
        &nbsp;/ {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
      </LinkTo>
      <LinkTo to={`/market/${product.category}/${product.id}`}>
        &nbsp;/ {product.title}
      </LinkTo>
    </Wrapper>
  );
};

export default BreadCrumbs;