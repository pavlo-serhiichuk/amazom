import React from 'react';
import {Wrapper} from './Filter.style'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import FilterForm from './FilterForm/FilterForm.component'

const Filters = () => {
  const {totalCount, products, category} = useTypedSelector(state => state.product)
  return (
    <Wrapper>
        <span>
          {`1-${products.length} of ${totalCount} ${category}`}
        </span>
        <FilterForm />
    </Wrapper>
  );
};

export default Filters;