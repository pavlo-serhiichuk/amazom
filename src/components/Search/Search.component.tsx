import React, {useEffect, useState} from 'react';
import useDebounce from '../../hooks/useDebounce'
import {useActions} from '../../hooks/useActions'
import {Form, Input} from './Search.style'

const Search = () => {
  const [productName, setProductName] = useState('')
  const debouncedSearch: any = useDebounce(search, 1000)
  const {setProducts} = useActions()
  function search(query: string) {
    fetch(`http://localhost:1122/products?q=${query}`)
      .then((data: any) => data.json())
      .then((json: any) => {
        console.log(json)
        setProducts(json)
      })
  }
  useEffect(() => {
    setProductName('')
  }, [])

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    search(productName)
  }

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setProductName(e.target.value)
    if (e.target.value === '') {
      return false
    }
    debouncedSearch(e.target.value)
  }

  return (
    <Form action="" onSubmit={handleSubmit}>
      <Input value={productName} onChange={onChange} />
      <button>Search</button>
    </Form>
  );
};

export default Search;