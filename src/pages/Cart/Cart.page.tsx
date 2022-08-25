import React from 'react';
import {Content, Products, TitleContainer, Wrapper} from './Cart.style'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {InformTitle, SubTitle} from '../../components/Title/Title.style'
import {PreorderProduct as CartProduct} from '../../components/PreorderProduct/PreorderProduct.component'
import PreorderCheck from '../../components/PreorderCheck/PreorderCheck.component'
import {IProduct} from '../../models/IProduct'
import Loader from '../../components/Loader/Loader.component'
import {Link} from 'react-router-dom'

const Cart = () => {
  const {cart, isLoading} = useTypedSelector(state => state.cart)

  if (isLoading) return <Loader />

  return (
    <Wrapper bgc={'rgba(204,240,255,0.73)'}>
      <SubTitle>Shopping Cart</SubTitle>
      {
        cart.length
          ? <Content>
            <Products>
              {cart?.map((product: IProduct, index: number) =>
                <CartProduct
                  preorderType="cart"
                  index={index}
                  preorderProduct={product} />)}
            </Products>
            {!isLoading
              && <PreorderCheck
                    price={200}
                    totalAmount={cart.length} />}
          </Content>
          : <TitleContainer>
            <InformTitle>
              Your cart is currently empty...
              Visit <Link to={'/market'}><b>our market</b></Link>.</InformTitle>
          </TitleContainer>
      }

    </Wrapper>
  );
};

export default Cart;