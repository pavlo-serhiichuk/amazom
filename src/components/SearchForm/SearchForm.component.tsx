import React, {memo, useEffect, useState} from 'react';
import useDebounce from '../../hooks/useDebounce'
import {useActions} from '../../hooks/useActions'
import {Button, Form, Input} from './SearchForm.style'
import Dropdown from '../Dropdown/Dropdown.component'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {RoutePath} from '../../utils/paths'
import {searchAPI} from '../../api/api'

const Search = memo(() => {
  const [productTitle, setProductTitle] = useState('')
  const debouncedSearch: any = useDebounce(productTitle, search, 1000)
  const {searchProducts} = useTypedSelector(state => state.search)
  const {setSearch} = useActions()

  function search(query: string) {
    searchAPI.getSearchedProducts(query)
      .then((res: any) => {
        setSearch(res.data)
      })
  }

  useEffect(() => {
    setProductTitle('')
  }, [])

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    search(productTitle)
  }

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setProductTitle(e.target.value)
    if (e.target.value === '') {
      return false
    }
    debouncedSearch(e.target.value)
  }

  const handleSearchButton = () => {
    setProductTitle('')
  }

  return (
    <Form action="" onSubmit={handleSubmit}>
      <Input
        value={productTitle}
        onChange={onChange}
      />
      <Button
        onClick={handleSearchButton}
        to={RoutePath.SEARCH}
      >
        Search
      </Button>
      {
        productTitle
        && <Dropdown
              handleClear={() => setProductTitle('')}
              products={searchProducts}
          />
      }
    </Form>
  );
});

export default Search;