import React, {FC} from 'react';
import {IProduct} from '../../models/IProduct'
import {AddToWishes, Button, Details, Img, Purchase, Title, Wrapper} from './CategoryProduct.style'

interface ProductProps {
  product: IProduct
}


const CategoryProduct: FC<ProductProps> = ({product}) => {
  const productPath = `/market/${product.category}/${product.id}`
  return (
    <Wrapper>
      <Img
        to={productPath}
        url={product.image[0]}
      />
      <Details>
        <Title to={productPath}>
          {product.title}
        </Title>
        <Purchase>
          <Button>
            Add To Cart
          </Button>
          <AddToWishes />
        </Purchase>
      </Details>
    </Wrapper>
  );
};

export default CategoryProduct;