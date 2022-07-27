import React, {FC} from 'react';
import {IProduct} from '../../models/IProduct'
import {AddToWishes, Button, Content, Details, Img, Purchase, Title} from './CategoryProduct.style'
import {useActions} from '../../hooks/useActions'

interface ProductProps {
  product: IProduct
}

const CategoryProduct: FC<ProductProps> = ({product}) => {
  const {addCartId, addWishesId} = useActions()
  const productPath = `/market/${product.category}/${product.id}`

  const handleCartClick = () => {
    addCartId(product.id)
  }

  const handleWishesClick = () => {
    addWishesId(product.id)
  }

  return (
    <>
    <Content>
      <Img
        to={productPath}
        url={product.image[0]}
      />
      <Details>
        <Title to={productPath}>
          {product.title}
        </Title>
        <Purchase>
          <Button onClick={handleCartClick}>
            Add To Cart
          </Button>
          <AddToWishes onClick={handleWishesClick}/>
        </Purchase>
      </Details>
    </Content>

    </>

  );
};

export default CategoryProduct;