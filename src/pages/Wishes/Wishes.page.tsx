import React from 'react';
import {Content, Products, Wrapper} from '../Cart/Cart.style'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {H2} from '../../components/Title/Title.style'
import {
  PreorderProduct as WishesProduct
} from '../../components/PreorderProduct/PreorderProduct.component'
import Delayed from '../../components/Delayed/Delayed'
import PreorderCheck from '../../components/PreorderCheck/PreorderCheck.component'

const Wishes = () => {
  const {wishes} = useTypedSelector(state => state.wishes)

  return (
    <Wrapper bgc={'#ebffba'}>
      <H2>
        Wishes
      </H2>
      <Content>
        <Products>
          {
            wishes?.map((product, index) =>
              <Delayed
                waitBeforeShow={index * 100}
              >
                <WishesProduct
                  preorderProduct={product}
                  key={product.id}
                />
              </Delayed>
            )
          }
        </Products>
        <PreorderCheck />
      </Content>
    </Wrapper>
  );
};

export default Wishes;