import React, {FC} from 'react';
import {Confirm, Wrapper} from './PreorderCheck.style'
import Delayed from '../Delayed/Delayed'
import {PreorderEnum} from '../../utils/preorder'


interface PreorderProps {
  price: number
  totalAmount: number
  preorderType: string
}

const PreorderCheck: FC<PreorderProps> = ({price, totalAmount, preorderType}) => {
  console.log(price)
  return (
    <Delayed waitBeforeShow={100}>
      <Wrapper>
        Subtotal ({totalAmount} items): ${price}
        <br />
        {preorderType === PreorderEnum.WISHES
          && <Confirm>Transfer all to Cart</Confirm>}
        {preorderType === PreorderEnum.CART
          && <Confirm>Proceed to checkout</Confirm>}
      </Wrapper>
    </Delayed>
  );
};

export default PreorderCheck;