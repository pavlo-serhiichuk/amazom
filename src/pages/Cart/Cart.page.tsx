import React from 'react';
import {Title, Wrapper} from './Cart.style'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import CartProduct from '../../components/CartProduct/CartProduct.component'

const Cart = () => {
  const {cart: cartProducts} = useTypedSelector(state => state.cart)
  return (
      <Wrapper>
        <Title>
          Shopping Cart
        </Title>
        {cartProducts?.map(product =>
          <CartProduct
            cartProduct={product}
            key={product.id}
          />)}
      </Wrapper>
  );
};

export default Cart;