import React, {useEffect} from 'react';
import CategoryProduct from '../../components/CategoryProduct/CategoryProduct.component'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import {IProduct} from '../../models/IProduct'
import Sidebar from '../../components/Sidebar/Sidebar.component'
import {Content, ProductsWrapper} from './Category.style'
import Loader from '../../components/Loader/Loader.component'
import {ContentWrapper as Wrapper} from '../pages.style'
import {useParams} from 'react-router-dom'

const Category = () => {
  const {loadProducts, setCategory} = useActions()
  const params: any = useParams()
  const {category, products, isLoading} = useTypedSelector(state => state.product)

  useEffect(() => {
    setCategory(params.category)
    loadProducts(category)
  }, [category])

  return (
    <Wrapper>
      <Content>
        <Sidebar />
        {
          isLoading
          ? <Loader />
          : <ProductsWrapper>
          {products?.map((product: IProduct) => <CategoryProduct product={product} key={product.id} />)}
        </ProductsWrapper>
        }
      </Content>
    </Wrapper>
  );
};

export default Category;