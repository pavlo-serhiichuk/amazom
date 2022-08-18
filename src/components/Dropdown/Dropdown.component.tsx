import React, {FC} from 'react';
import {DroppedProduct, Title, Wrapper} from './Dropdown.style'
import {IProduct} from '../../models/IProduct'

interface DropdownProps {
  products: IProduct[],
  redirect: (product: IProduct) => void
}

const Dropdown: FC<DropdownProps> = ({products, redirect}) => {

  return (
    <Wrapper>
      {products.map(product =>
        <DroppedProduct key={product.id}>
          <Title
            onClick={() => redirect(product)}
            to={`market/${product.category}/${product.id}`}
          >
            {product.title}
          </Title>
        </DroppedProduct>
      )}
    </Wrapper>
  );
};

export default Dropdown;