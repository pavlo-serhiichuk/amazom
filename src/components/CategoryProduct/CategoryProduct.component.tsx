import React, {FC, useEffect, useState} from 'react';
import {IProduct} from '../../models/IProduct'
import {AddToWishes, Button, Details, Img, Purchase, Title, Wrapper} from './CategoryProduct.style'
import {useActions} from '../../hooks/useActions'

interface ProductProps {
  product: IProduct
}

const CategoryProduct: FC<ProductProps> = ({product}) => {
  const [isCartProduct, setIsCartProduct] = useState(false)
  const [isWishesProduct, setIsWishesProduct] = useState(false)
  const {addCartId, addWishesId, deleteWishesId, deleteCartId} = useActions()

  useEffect(() => {
    if (localStorage.getItem('cart_ids')?.split(',').find(cartId => +cartId === product.id)) {
      setIsCartProduct(true)
    }
    if (localStorage.getItem('wishes_ids')?.split(',').find(wishesId => +wishesId === product.id)) {
      setIsWishesProduct(true)
    }
  })

  const productPath = `/market/${product.category}/${product.id}`

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
          <Title to={productPath}>
            {product.title}
          </Title>
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
                ? <AddToWishes size={60} onClick={deleteFromWishes} style={{
                  transition: 'all ease-in-out .3s',
                  backgroundColor: 'lightseagreen',
                  height: '23px',
                  padding: '10px'
                }} />
                : <AddToWishes size={60} onClick={addToWishes} style={{
                  transition: 'all ease-in-out .3s',
                  backgroundColor: '#9a99',
                  height: '23px',
                  padding: '10px'
                }} />
            }
          </Purchase>
        </Details>
      </Wrapper>
  );
};

export default CategoryProduct;