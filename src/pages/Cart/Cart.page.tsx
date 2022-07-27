import React from 'react';
import {Wrapper} from './Cart.style'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import CartProduct from '../../components/CartProduct/CartProduct.component'
import {H2} from '../../components/Title/Title.style'
import Delayed from '../../components/Delayed/Delayed'

const Cart = () => {
  const {cart: cartProducts} = useTypedSelector(state => state.cart)
  return (
      <Wrapper>
        <H2>
          Shopping Cart
        </H2>
        {cartProducts?.map((product, index) =>
          <Delayed waitBeforeShow={index * 100}>
            <CartProduct
              cartProduct={product}
              key={product.id}
            />
          </Delayed>
          )}
      </Wrapper>
  );
};

export default Cart;