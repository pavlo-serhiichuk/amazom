import React, {FC} from 'react';
import {
  Wrapper,
  Content,
  TitleContent,
  Img,
  Info,
  ContentContainer,
  AddToCart,
  BtnContainer
} from './PreorderProduct.style'
import {IProduct} from '../../models/IProduct'
import {Caption, MiddleTitle} from '../Title/Title.style'
import Delayed from '../Delayed/Delayed'
import {PreorderEnum} from '../../utils/preorder'

interface CartProductProps {
  preorderProduct: IProduct
  index: number
  preorderType: string
}

export const PreorderProduct: FC<CartProductProps> = ({preorderProduct, index, preorderType}) => {
  return (
    <Delayed
      waitBeforeShow={index * 100}>
      <Wrapper>
        <ContentContainer>
          <TitleContent>
            <MiddleTitle>
              {preorderProduct.title}
            </MiddleTitle>
            <Caption>
              Price
            </Caption>
          </TitleContent>
          <Content>
            <Img
              to={`/market/${preorderProduct.category}/${preorderProduct.id}`}
              url={preorderProduct.image[0]}
              target="_blank" />
            <Info>
              {preorderProduct.description}
            </Info>
          </Content>
        </ContentContainer>
        <BtnContainer>
          {preorderType === PreorderEnum.WISHES
            && <AddToCart>Add to cart</AddToCart>}
          {preorderType === PreorderEnum.CART
            && <AddToCart>Buy This Only</AddToCart>}
          <AddToCart bgc={'coral'}>Delete</AddToCart>
        </BtnContainer>
      </Wrapper>
    </Delayed>
  );
};
