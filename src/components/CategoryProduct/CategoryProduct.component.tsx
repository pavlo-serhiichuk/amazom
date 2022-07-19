import React, {FC} from 'react';
import {IProduct} from '../../models/IProduct'
import {AddToWishes, Button, Details, Img, Purchase, Title, Wrapper} from './CategoryProduct.style'

interface ProductProps {
  product: IProduct
}

const CategoryProduct: FC<ProductProps> = ({product}) => {
  return (
    <Wrapper>
      <Img url={product.image[0]} />
      <Details>
        <Title>{product.title}</Title>
        <Purchase>
          <Button>Add To Cart</Button>
          <AddToWishes />
        </Purchase>
      </Details>
    </Wrapper>
  );
};

export default CategoryProduct;