import React from 'react';
import {Content, ProductsWrapper, Wrapper} from './Market.style'
import Sidebar from '../../components/Sidebar/Sidebar.component'

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