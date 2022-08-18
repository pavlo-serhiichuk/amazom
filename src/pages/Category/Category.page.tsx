import React, {useEffect} from 'react';
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import Sidebar from '../../components/Sidebar/Sidebar.component'
import {Content} from './Category.style'
import Loader from '../../components/Loader/Loader.component'
import {useParams} from 'react-router-dom'
import Filters from '../../components/Filter/Filter.component'
import CategoryProducts from '../../components/CategoryProducts/CategoryProducts'

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
            : <CategoryProducts products={products}/>
        }
      </Content>
    </>
  );
};

export default Category;