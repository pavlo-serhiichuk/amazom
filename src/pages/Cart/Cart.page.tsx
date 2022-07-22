import React from 'react';
import {ContentWrapper as Wrapper} from '../pages.style'
import {Content, Title} from './Cart.style'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import CartProduct from '../../components/CartProduct/CartProduct.component'

const Cart = () => {
  const {cart: cartProducts} = useTypedSelector(state => state.cart)
  return (
    <Wrapper>
      <Content>
        <Title>
          Shopping Cart
        </Title>
        {cartProducts?.map(product =>
          <CartProduct
            cartProduct={product}
            key={product.id}
          />)}
      </Content>
    </Wrapper>
  );
};

export default Cart;