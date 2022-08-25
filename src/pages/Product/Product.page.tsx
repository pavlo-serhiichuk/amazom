import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import {Content, Description, Field, Img, ImgContainer, Info, Property, Title, Wrapper} from './Product.style'
import BreadCrumbs from '../../components/BreadCrums/BreadCrumbs'
import Loader from '../../components/Loader/Loader.component'

const Product = () => {
  const {currentProduct: product, isLoading} = useTypedSelector(state => state.product)
  const {loadCurrentProduct} = useActions()
  const params: any = useParams()
  useEffect(() => {
    loadCurrentProduct(params.category, params.id)
  }, [])

  if (isLoading) return <Loader />

  return (
    <Wrapper>
      {product.id
        && <BreadCrumbs product={product} />}
      <Title>{product.title}</Title>
      <Content>
        <ImgContainer>
          {product.image
            && <Img url={product.image[0]} />}
        </ImgContainer>
        <Info>
          <Field>
            <Property>Description:</Property>
            <Description>{product.description}</Description>
          </Field>
          <Field>
            <Property>price:</Property>
            <Description>{product.price}</Description>
          </Field>
        </Info>
      </Content>
    </Wrapper>
  );
};

export default Product;