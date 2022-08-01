import React, {useEffect} from 'react';
import CategoryProduct from '../../components/CategoryProduct/CategoryProduct.component'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import {IProduct} from '../../models/IProduct'
import Sidebar from '../../components/Sidebar/Sidebar.component'
import {ProductsWrapper, Content} from './Category.style'
import Loader from '../../components/Loader/Loader.component'
import {useParams} from 'react-router-dom'
import Delayed from '../../components/Delayed/Delayed'
import ShowMore from '../../components/ShowMore/ShowMore.component'
import Filters from '../../components/Filter/Filter.component'

const Category = () => {
  const {loadProducts, setCategory} = useActions()
  const params: any = useParams()
  const {category, products, isLoading} = useTypedSelector(state => state.product)
  useEffect(() => {
    setCategory(params.category)
    loadProducts(category)
  }, [category])

  return (
    <>

      <Filters />
      <Content>
        <Sidebar />
        {
          isLoading
            ? <Loader />
            : <ProductsWrapper>
              {products?.map((product: IProduct, index) =>
                <Delayed waitBeforeShow={index * 50} key={product.id}>
                  <CategoryProduct
                    product={product}
                    key={product.id}
                  />
                </Delayed>
              )}
              <Delayed waitBeforeShow={600}><ShowMore /></Delayed>
            </ProductsWrapper>
        }
      </Content>
    </>
  );
};

export default Category;