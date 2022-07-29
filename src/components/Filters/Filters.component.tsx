import React from 'react';
import {Wrapper} from './Filters.style'
import {useTypedSelector} from '../../hooks/useTypedSelector'

const Filters = () => {
  const {totalCount, products, category} = useTypedSelector(state => state.product)
  console.log(totalCount)
  return (
    <Wrapper>
      <>
        {`1-${products.length} of ${totalCount} ${category}`}
      </>
    </Wrapper>
  );
};

export default Filters;