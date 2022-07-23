import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import {Wrapper} from './Product.style'

const Product = () => {
  const {currentProduct: product} = useTypedSelector(state => state.product)
  const {loadCurrentProduct} = useActions()
  const params: any = useParams()
  useEffect(() => {
    console.log('params: ', params)
    loadCurrentProduct(params.category, params.id)
  }, [])

  return (
    <Wrapper>
      <div>BreadCrumbs</div>
      {product.title}
    </Wrapper>
  );
};

export default Product;