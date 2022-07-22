import React, {useEffect, useState} from 'react';
import {ContentWrapper as Wrapper} from '../../pages/pages.style'
import {useParams} from 'react-router-dom'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import {Content} from './Product.style'

const Product = () => {
  const {currentProduct: product} = useTypedSelector(state => state.product)
  const {loadCurrentProduct} = useActions()
  const params: any = useParams()
  useEffect(() => {
    console.log('params: ', params)
    loadCurrentProduct(params.category, params.id)
  }, [])
  console.log(product)
  return (
    <Wrapper>
      <Content>
        <div>BreadCrumbs</div>
        {product.title}
      </Content>
    </Wrapper>
  );
};

export default Product;