import React, {FC} from 'react';
import {DroppedProduct, Title, Wrapper} from './Dropdown.style'
import {IProduct} from '../../models/IProduct'
import {useNavigate} from 'react-router-dom'
import {useActions} from '../../hooks/useActions'

interface DropdownProps {
  products: IProduct[],
  handleClear: () => void
}

const Dropdown: FC<DropdownProps> = ({products, handleClear}) => {
  const navigate = useNavigate()
  const {setCurrentProduct, setCategory} = useActions()
  const redirect = (product: IProduct) => {
    handleClear()
    setCurrentProduct(product)
    setCategory(product.category)
    navigate(`market/${product.category}/${product.id}`)
  }
  return (
    <Wrapper>
      {products.map(product =>
        <DroppedProduct key={product.id}>
          <Title
            onClick={() => redirect(product)}
          >
            {product.title}
          </Title>
        </DroppedProduct>
      )}
    </Wrapper>
  );
};

export default Dropdown;