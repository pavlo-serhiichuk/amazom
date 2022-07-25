import React, {useEffect, useState} from 'react';
import useDebounce from '../../hooks/useDebounce'
import {useActions} from '../../hooks/useActions'
import {Button, Form, Input} from './SearchForm.style'
import Dropdown from '../Dropdown/Dropdown.component'

const Search = () => {
  const [productTitle, setProductTitle] = useState('')
  const debouncedSearch: any = useDebounce(productTitle, search, 1000)
  const {setSearch} = useActions()

  function search(query: string) {
    fetch(`http://localhost:1122/products?title_like=${query}`)
      .then((data: any) => data.json())
      .then((json: any) => {
        // if (json.length > 0)
        debugger
        setSearch(json)
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

  return (
    <Form action="" onSubmit={handleSubmit}>
      <Input value={productTitle} onChange={onChange} />
      <Button>Search</Button>
      <Dropdown />
    </Form>
  );
};

export default Search;