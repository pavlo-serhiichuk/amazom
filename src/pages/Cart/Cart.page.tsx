import React from 'react';
import {Content, Products, Wrapper} from './Cart.style'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {SubTitle} from '../../components/Title/Title.style'
import Delayed from '../../components/Delayed/Delayed'
import {PreorderProduct as CartProduct} from '../../components/PreorderProduct/PreorderProduct.component'
import PreorderCheck from '../../components/PreorderCheck/PreorderCheck.component'
import {IProduct} from '../../models/IProduct'

const Cart = () => {
  const {cart} = useTypedSelector(state => state.cart)

  return (
    <Wrapper bgc={'rgba(204,240,255,0.73)'}>
      <SubTitle>
        Shopping Cart
      </SubTitle>
      <Content>
        <Products>
          {
            cart?.map((product: IProduct, index: number) =>
              <Delayed
                waitBeforeShow={index * 100}
                key={product.id}
              >
                <CartProduct preorderProduct={product} />
              </Delayed>
            )
          }
        </Products>
        <PreorderCheck
          price={200}
          totalAmount={cart.length}
        />
      </Content>
    </Wrapper>
  );
};

export default Cart;