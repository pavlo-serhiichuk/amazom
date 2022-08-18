import React, {FC, useEffect, useState} from 'react';
import {IProduct} from '../../../models/IProduct'
import {AddToWishes, Button, Details, Img, Info, Price, Purchase, Title, Wrapper} from './CategoryProduct.style'
import {useActions} from '../../../hooks/useActions'

interface ProductProps {
  product: IProduct
}

const CategoryProduct: FC<ProductProps> = ({product}) => {
  const [isCartProduct, setIsCartProduct] = useState(false)
  const [isWishesProduct, setIsWishesProduct] = useState(false)
  const {addCartId, addWishesId, deleteWishesId, deleteCartId} = useActions()
  const productPath = `/market/${product.category}/${product.id}`

  useEffect(() => {
    if (checkIds('cart_ids')) {
      setIsCartProduct(true)
    }

    if (checkIds('wishes_ids')) {
      setIsWishesProduct(true)
    }
  })

  function checkIds(key: string) {
    return localStorage
      .getItem(key)?.split(',')
      .find(cartId => +cartId === product.id)
  }

  const addToCart = () => {
    addCartId(product.id)
  }
  const deleteFromCart = () => {
    deleteCartId(product.id)
    setIsCartProduct(false)
  }
  const addToWishes = () => {
    addWishesId(product.id)
  }
  const deleteFromWishes = () => {
    deleteWishesId(product.id)
    setIsWishesProduct(false)
  }

  return (
    <Wrapper>
      <Img
        to={productPath}
        url={product.image[0]}
      />
      <Details>
        <Info>
          <Title to={productPath}>{product.title}</Title>
          <Price>{product.author}</Price>
          <Price>{product.city}{product.address}</Price>
          <Price>{product.producer}</Price>
          <Price>${product.price}</Price>
        </Info>
        <Purchase>
          {
            isCartProduct
              ? <Button
                onClick={deleteFromCart}
              >
                Added
              </Button>
              : <Button
                onClick={addToCart}
                isCartProduct
              >
                Add To Cart
              </Button>
          }
          {
            isWishesProduct
              ? <AddToWishes size={60} onClick={deleteFromWishes} bgc={'lightseagreen'} />
              : <AddToWishes size={60} onClick={addToWishes} bgc={'#9a99'} />
          }
        </Purchase>
      </Details>
    </Wrapper>
  );
};

export default CategoryProduct;