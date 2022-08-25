import React, {FC} from 'react';
import {Wrapper} from './PreorderCheck.style'
import Delayed from '../Delayed/Delayed'


interface PreorderProps {
  price: number
  totalAmount: number
}

const PreorderCheck: FC<PreorderProps> = ({price, totalAmount}) => {
  return (
    <Delayed waitBeforeShow={100}>
      <Wrapper>
        Subtotal ({totalAmount} items): ${price}
        <br />
        <button>Proceed to checkout</button>
      </Wrapper>
    </Delayed>
  );
};

export default PreorderCheck;