import React from 'react';
import {Content, Products, Wrapper} from '../Cart/Cart.style'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {SubTitle} from '../../components/Title/Title.style'
import {
  PreorderProduct as WishesProduct
} from '../../components/PreorderProduct/PreorderProduct.component'
import Delayed from '../../components/Delayed/Delayed'
import PreorderCheck from '../../components/PreorderCheck/PreorderCheck.component'

const Wishes = () => {
  const {wishes} = useTypedSelector(state => state.wishes)
  debugger
  return (
    <Wrapper bgc={'#ebffba'}>
      <SubTitle>
        Wishes
      </SubTitle>
      <Content>
        <Products>
          {
            wishes?.map((product, index) =>
              <Delayed
                waitBeforeShow={index * 100}
                key={product.id}
              >
                <WishesProduct
                  preorderProduct={product}
                />
              </Delayed>
            )
          }
        </Products>

        <PreorderCheck
          price={200}
          totalAmount={wishes.length}
        />
      </Content>
    </Wrapper>
  );
};

export default Wishes;