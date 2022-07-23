import React from 'react';
import {Title, Wrapper} from '../Cart/Cart.style'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import WishesProduct from '../../components/WishesProduct/WishesProduct.component'

const Wishes = () => {
  const {wishes} = useTypedSelector(state => state.wishes)

  return (
      <Wrapper>
        <Title>Wishes</Title>
        {wishes?.map(product =>
          <WishesProduct
            wishes={product}
            key={product.id}
          />)}
      </Wrapper>
  );
};

export default Wishes;