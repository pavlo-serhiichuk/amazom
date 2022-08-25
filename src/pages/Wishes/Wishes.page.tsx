import React from 'react';
import {Content, Products, TitleContainer, Wrapper} from '../Cart/Cart.style'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {InformTitle, SubTitle} from '../../components/Title/Title.style'
import {
  PreorderProduct as WishesProduct
} from '../../components/PreorderProduct/PreorderProduct.component'
import PreorderCheck from '../../components/PreorderCheck/PreorderCheck.component'
import Loader from '../../components/Loader/Loader.component'
import {Link} from 'react-router-dom'

const Wishes = () => {
  const {wishes, isLoading} = useTypedSelector(state => state.wishes)

  if (isLoading) return <Loader />

  return (
    <Wrapper bgc={'#ebffba'}>
      <SubTitle>Wishes</SubTitle>
      {wishes.length
        ? <Content>
          <Products>
            {wishes?.map((product, index) =>
              <WishesProduct
                preorderType="wishes"
                key={product.id}
                index={index}
                preorderProduct={product} />)}
          </Products>
          {!isLoading
            && <PreorderCheck
                  price={200}
                  totalAmount={wishes.length} />}
        </Content>
        : <TitleContainer>
          <InformTitle>
            Your wishes is currently empty...
            Visit <Link to={'/market'}><b>our market</b></Link>.</InformTitle>
        </TitleContainer>
      }
    </Wrapper>
  );
};

export default Wishes;