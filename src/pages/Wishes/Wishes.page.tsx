import React from 'react';
import {Wrapper} from '../Cart/Cart.style'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import WishesProduct from '../../components/WishesProduct/WishesProduct.component'
import {H2} from '../../components/Title/Title.style'

const Wishes = () => {
  const {wishes} = useTypedSelector(state => state.wishes)

  return (
      <Wrapper>
        <H2>Wishes</H2>
        {wishes?.map(product =>
          <WishesProduct
            wishes={product}
            key={product.id}
          />)}
      </Wrapper>
  );
};

export default Wishes;