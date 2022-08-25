import React, {FC} from 'react';
import {IProduct} from '../../models/IProduct'
import Delayed from '../Delayed/Delayed'
import CategoryProduct from './CategoryProduct/CategoryProduct.component'
import ShowMore from '../ShowMore/ShowMore.component'
import {ProductsWrapper} from './CategoryProducts.style'

interface CategoryProductsProps {
  products: IProduct[]
}

const CategoryProductsComponent:FC<CategoryProductsProps> = ({products}) => {

  return (
    <ProductsWrapper>
      {products?.map((product: IProduct, index) =>
        <Delayed waitBeforeShow={index * 50} key={product.id}>
          <CategoryProduct
            product={product}
            key={product.id}
          />
        </Delayed>
      )}
      <Delayed waitBeforeShow={600}><ShowMore /></Delayed>
    </ProductsWrapper>
  );
};
export default CategoryProductsComponent
