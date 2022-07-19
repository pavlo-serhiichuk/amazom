import React, {useEffect} from 'react';
import CategoryProduct from '../../components/CategoryProduct/CategoryProduct.component'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import {IProduct} from '../../models/IProduct'
import Sidebar from '../../components/Sidebar/Sidebar.component'
import {Content, ProductsWrapper, Wrapper} from './Category.style'
import Loader from '../../components/Loader/Loader.component'

const Category = () => {
  const {loadProducts} = useActions()
  const {category, products, isLoading} = useTypedSelector(state => state.product)
  useEffect(() => {
    loadProducts(category)
  }, [category])

  return (
    <Wrapper>
      <hr/>
      <Content>
        <Sidebar />
        {
          isLoading
          ? <Loader />
          : <ProductsWrapper>
          {products.map((product: IProduct) => <CategoryProduct product={product} key={product.id} />)}
        </ProductsWrapper>
        }
      </Content>
    </Wrapper>
  );
};

export default Category;