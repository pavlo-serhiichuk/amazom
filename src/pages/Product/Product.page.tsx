import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import {Content, Description, Img, ImgContainer, Info, Property, Title, Wrapper} from './Product.style'

const Product = () => {
  const {currentProduct: product} = useTypedSelector(state => state.product)
  const {loadCurrentProduct} = useActions()
  const params: any = useParams()
  useEffect(() => {
    loadCurrentProduct(params.category, params.id)
  }, [])

  return (
    <Wrapper>
      <div>BreadCrumbs</div>
      <Title>{product.title}</Title>
      <Content>
        <ImgContainer>
          {product.image
            && <Img url={product.image[0]} />}
        </ImgContainer>
        <Info>
          <Property>Description:</Property>
          <Description>{product.description}</Description>
        </Info>
      </Content>
    </Wrapper>
  );
};

export default Product;