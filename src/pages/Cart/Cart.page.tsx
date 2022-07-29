import React from 'react';
import {Content, Products, Wrapper} from './Cart.style'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {H2} from '../../components/Title/Title.style'
import Delayed from '../../components/Delayed/Delayed'
import {PreorderProduct as CartProduct} from '../../components/PreorderProduct/PreorderProduct.component'
import PreorderCheck from '../../components/PreorderCheck/PreorderCheck.component'

const Cart = () => {
  const {cart} = useTypedSelector(state => state.cart)

  return (
    <Wrapper bgc={'rgba(204,240,255,0.73)'}>
      <H2>
        Shopping Cart
      </H2>
      <Content>
        <Products>
          {
            cart?.map((product, index) =>
              <Delayed
                waitBeforeShow={index * 100}
              >
                <CartProduct
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

export default Cart;