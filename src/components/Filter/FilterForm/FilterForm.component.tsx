import React, {useState} from 'react';
import {useActions} from '../../../hooks/useActions'
import {useTypedSelector} from '../../../hooks/useTypedSelector'

const FilterForm = () => {
  const [filter, setFilter] = useState('')
  const {category} = useTypedSelector(state => state.product)
  const {getSortedProducts} = useActions()

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setFilter(e.target.value)
    getSortedProducts(category, filter)
  }

  return (
    <form>
      <label>Sort By:&nbsp;</label>
      <select value={filter} onChange={handleChange}>
        <option value="empty">...</option>
        <option value="desc">Price: Low to High</option>
        <option value="asc">Price: High to Low</option>
      </select>
    </form>
  );
};

export default FilterForm;