import React, {FC} from 'react';
import {Wrapper, Content, TitleContent, Img, Info} from './CartProduct.style'
import {IProduct} from '../../models/IProduct'
import {Caption, H4} from '../Title/Title.style'

interface CartProductProps {
  cartProduct: IProduct
}

const CartProduct: FC<CartProductProps> = ({cartProduct}) => {
  return (
    <Wrapper>
      <TitleContent>
        <H4>{cartProduct.title}</H4>
        <Caption>Price</Caption>
      </TitleContent>
      <hr />
      <Content>
        <Img to={`/market/${cartProduct.category}/${cartProduct.id}`} url={cartProduct.image[0]} target="_blank" />
        <Info>
          {cartProduct.description}
        </Info>
      </Content>
    </Wrapper>
  );
};

export default CartProduct;