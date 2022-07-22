import React from 'react';
import {Content, ProductsWrapper} from './Market.style'
import Sidebar from '../../components/Sidebar/Sidebar.component'
import {ContentWrapper as Wrapper} from '../pages.style'

const Market = () => {
  return (
    <Wrapper>
      <Content>
        <Sidebar />
      <ProductsWrapper>
        Market with different propositions and advertisment
      </ProductsWrapper>
      </Content>
    </Wrapper>
  );
};

export default Market;