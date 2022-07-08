import React, {useEffect} from 'react';
import {useActions} from '../../hooks/useActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {IProduct} from '../../models/IProduct'
import CategoryProduct from '../../components/CategoryProduct/CategoryProduct.component'
import {Content, ProductsWrapper, Wrapper} from './Market.style'
import Sidebar from '../../components/Sidebar/Sidebar.component'
import Search from '../../components/Search/Search.component'

const MarketPage = () => {

  return (
    <Wrapper>
      <Search />
      <hr/>
      <Content>
        <Sidebar />
      <ProductsWrapper>
        Market with different propositions and advertisment
      </ProductsWrapper>
      </Content>
    </Wrapper>
  );
};

export default MarketPage;