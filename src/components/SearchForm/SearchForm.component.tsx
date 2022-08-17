import React, {memo, useEffect, useState} from 'react';
import useDebounce from '../../hooks/useDebounce'
import {useActions} from '../../hooks/useActions'
import {Button, Form, Input} from './SearchForm.style'
import Dropdown from '../Dropdown/Dropdown.component'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {RoutePath} from '../../utils/paths'
import {searchAPI} from '../../api/api'
import {useNavigate} from 'react-router-dom'

const Search = memo(() => {
  const [productTitle, setProductTitle] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const debouncedSearch: any = useDebounce(productTitle, search, 1000)
  const {searchProducts} = useTypedSelector(state => state.search)
  // const navigate = useNavigate()
  const {fetchSearch} = useActions()
  useEffect(() => {
    setProductTitle('')
  }, [])

  function search(query: string) {
    fetchSearch(query)
  }

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setProductTitle(e.target.value)
    if (e.target.value === '') {
      return false
    }
    debouncedSearch(e.target.value)
    setIsDropdownOpen(true)
  }

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    search(productTitle)
  }

  const handleSearchButton = () => {
    setProductTitle('')
  }

  const handleBlur = () => {
    setIsDropdownOpen(false)
  }

  return (
    <Form
      onSubmit={handleSubmit}
      // onBlur={handleBlur}
    >
      <Input
        value={productTitle}
        onChange={onChange}
        onClick={() => setIsDropdownOpen(true)}
      />
      <Button
        onClick={handleSearchButton}
        to={RoutePath.SEARCH}
      >
        Search
      </Button>
      {productTitle
        && isDropdownOpen
        && <Dropdown
              handleClear={() => setProductTitle('')}
              products={searchProducts}
          />}
    </Form>
  );
});

export default Search;