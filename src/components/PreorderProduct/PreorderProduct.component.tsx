import React, {FC} from 'react';
import {Wrapper, Content, TitleContent, Img, Info} from './PreorderProduct.style'
import {IProduct} from '../../models/IProduct'
import {Caption, H4} from '../Title/Title.style'

interface CartProductProps {
  preorderProduct: IProduct
}

export const PreorderProduct: FC<CartProductProps> = ({preorderProduct}) => {
  return (
    <Wrapper>
      <TitleContent>
        <H4>
          {preorderProduct.title}
        </H4>
        <Caption>
          Price
        </Caption>
      </TitleContent>
      <hr />
      <Content>
        <Img
          to={`/market/${preorderProduct.category}/${preorderProduct.id}`}
          url={preorderProduct.image[0]}
          target="_blank" />
        <Info>
          {preorderProduct.description}
        </Info>
      </Content>
    </Wrapper>
  );
};
