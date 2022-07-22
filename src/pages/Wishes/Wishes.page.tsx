import React from 'react';
import {ContentWrapper as Wrapper} from '../pages.style'
import {Content, Title} from '../Cart/Cart.style'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import WishesProduct from '../../components/WishesProduct/WishesProduct.component'

const Wishes = () => {
  const {wishes} = useTypedSelector(state => state.wishes)

  return (
    <Wrapper>
      <Content>
        <Title>
          Wishes
        </Title>
        {wishes?.map(product =>
          <WishesProduct
            wishes={product}
            key={product.id}
          />)}
      </Content>
    </Wrapper>
  );
};

export default Wishes;