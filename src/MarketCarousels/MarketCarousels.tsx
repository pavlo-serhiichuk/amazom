import React, {useEffect, useState} from 'react';
import {IProduct} from '../models/IProduct'
import Carousel from '../components/Carousel/Carousel.component'
import {productsAPI} from '../api/api'
import Loader from '../components/Loader/Loader.component'
import {H4} from '../components/Title/Title.style'

const MarketCarousels = () => {
  const [books, setBooks] = useState<IProduct[]>()
  const [guitars, setGuitars] = useState<IProduct[]>()
  const [vouchers, setVouchers] = useState<IProduct[]>()
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    fetchProducts('books',).then(data => setBooks(data))
    fetchProducts('guitars',).then(data => setGuitars(data))
    fetchProducts('vouchers',).then(data => setVouchers(data))
  }, [])

  const fetchProducts = async (category: string) => {
    try {
      setLoading(true)
      const response = await productsAPI.getProducts(category)
      return response.data
    } catch (e: any) {
      console.log(e.message)
    } finally {
      setLoading(false)
    }
  }

  if (isLoading) return <Loader />

  return (
    <>
      <H4>Books:</H4>
      <Carousel products={books} />
      <H4>Guitars:</H4>
      <Carousel products={guitars} />
      <H4>Vouchers:</H4>
      <Carousel products={vouchers} />
    </>
  );
};

export default MarketCarousels;