import React from 'react';
import { SubTitle } from '../../components/Title/Title.style';
import {useTypedSelector} from '../../hooks/useTypedSelector'
import SearchProduct from '../../components/SearchProduct/SearchProduct.component'

const Search = () => {
  const {searchProducts: products} = useTypedSelector(state => state.search)
  console.log(products)
  return (
    <div>
      <SubTitle>Searched Products:</SubTitle>
      {products.map(product => <SearchProduct product={product} />)}
    </div>
  );
};

export default Search;