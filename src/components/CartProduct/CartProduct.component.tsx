import React, {FC} from 'react';
import {Wrapper} from './CartProduct.style'
import {IProduct} from '../../models/IProduct'

interface CartProductProps {
  cartProduct: IProduct
}

const CartProduct: FC<CartProductProps> = ({cartProduct}) => {
  return (
    <Wrapper>
      {cartProduct.title}
    </Wrapper>
  );
};

export default CartProduct;