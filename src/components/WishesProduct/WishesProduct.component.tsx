import React, {FC} from 'react';
import {IProduct} from '../../models/IProduct'
import {Wrapper} from './WishesProduct.style'

interface WishesProductProps {
  wishes: IProduct
}

const WishesProduct: FC<WishesProductProps> = ({wishes}) => {
  return (
    <Wrapper>
      {wishes.title}
    </Wrapper>
  );
};

export default WishesProduct;