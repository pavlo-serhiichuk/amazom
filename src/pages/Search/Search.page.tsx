import React from 'react';
import { SubTitle } from '../../components/Title/Title.style';
import {useTypedSelector} from '../../hooks/useTypedSelector'
import SearchProduct from '../../components/SearchProduct/SearchProduct.component'

const Search = () => {
  const {searchProducts: products, isLoading} = useTypedSelector(state => state.search)
  console.log(products)
  return (
    <div>
      <SubTitle>Searched Products:</SubTitle>
      {isLoading
        && <div>Loading...</div>}
      {products.map(product => <SearchProduct product={product} />)}
    </div>
  );
};

export default Search;