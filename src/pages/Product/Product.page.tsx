import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import {Content, Description, Field, Img, ImgContainer, Info, Property, Title, Wrapper} from './Product.style'
import BreadCrumbs from '../../components/BreadCrums/BreadCrumbs'
import Loader from '../../components/Loader/Loader.component'
import {PathEnum} from '../../utils/paths'

const Product = () => {
  const {currentProduct: product, isLoading, error} = useTypedSelector(state => state.product)
  const {loadCurrentProduct} = useActions()
  const params: any = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadCurrentProduct(params.category, params.id)
  }, [])

  if (error) {
    navigate(PathEnum.ERROR)
  }

  if (isLoading || !product.title) {
    return <Loader />
  }

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
          {product.author && <Field>
            <Property>Author:</Property>
            <Description>{product.author}</Description>
          </Field>}
          {product.producer && <Field>
            <Property>Producer:</Property>
            <Description>{product.producer}</Description>
          </Field>}
          <Field>
            <Property>Description:</Property>
            <Description>{product.description}</Description>
          </Field>
        <Field>
            <Property>price:</Property>
            <Description>{product.price}</Description>
          </Field>
        <Field>
            <Property>address:</Property>
            <Description>{product.address}</Description>
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

// title
// price
// category
// description
// liked
// image
// author
// genres

export default Product;