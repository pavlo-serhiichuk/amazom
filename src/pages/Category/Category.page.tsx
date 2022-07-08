import React, {useEffect} from 'react';
import CategoryProduct from '../../components/CategoryProduct/CategoryProduct.component'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import {IProduct} from '../../models/IProduct'
import Sidebar from '../../components/Sidebar/Sidebar.component'
import {Content, ProductsWrapper, Wrapper} from './Category.style'
import Search from '../../components/Search/Search.component'

const CategoryPage = () => {
  const {loadProducts} = useActions()
  const {category, products} = useTypedSelector(state => state.product)
  useEffect(() => {
    loadProducts(category)
  }, [category])

  return (
    <Wrapper>
      <Search />
      <hr/>
      <Content>
        <Sidebar />
        <ProductsWrapper>
          {products.map((product: IProduct) => <CategoryProduct product={product} key={product.id} />)}
        </ProductsWrapper>
      </Content>
    </Wrapper>
  );
};

export default CategoryPage;