import React, {FC} from 'react';
import {Wrapper} from './PreorderCheck.style'


interface PreorderProps {
  price: number
  totalAmount: number
}

const PreorderCheck: FC<PreorderProps> = ({price, totalAmount}) => {
  return (
    <Wrapper>
      Subtotal ({totalAmount} items): ${price}
      <br/>
      <button>Proceed to checkout</button>
    </Wrapper>
  );
};

export default PreorderCheck;