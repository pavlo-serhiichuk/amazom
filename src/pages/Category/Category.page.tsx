import React, {useEffect} from 'react';
import CategoryProduct from '../../components/CategoryProduct/CategoryProduct.component'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import {IProduct} from '../../models/IProduct'
import Sidebar from '../../components/Sidebar/Sidebar.component'
import {Content, ProductsWrapper} from './Category.style'
import Loader from '../../components/Loader/Loader.component'
import {useParams} from 'react-router-dom'
import Delayed from '../../components/Delayed/Delayed'

const delays = [0, 50, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650]

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
      Filters
      <Content>
        <Sidebar />
        {
          isLoading
            ? <Loader />
            : <ProductsWrapper>
              {products?.map((product: IProduct, index) =>
                <Delayed waitBeforeShow={delays[index]} key={product.id}>
                <CategoryProduct
                  product={product}
                  key={product.id}
                />
                </Delayed>
              )}
            </ProductsWrapper>
        }
      </Content>
    </>
  );
};

export default Category;