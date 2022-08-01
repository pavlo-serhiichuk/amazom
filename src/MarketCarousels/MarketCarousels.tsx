import React, {useEffect, useState} from 'react';
import {IProduct} from '../models/IProduct'
import Carousel from '../components/Carousel/Carousel.component'
import {productsAPI} from '../api/api'
import Loader from '../components/Loader/Loader.component'
import {MiddleTitle} from '../components/Title/Title.style'

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
      <MiddleTitle>Bestsellers:</MiddleTitle>
      <Carousel
        products={books}
        autoplaySpeed={1000}
      />
      <MiddleTitle>Popular guitars:</MiddleTitle>
      <Carousel
        products={guitars}
        autoplaySpeed={3000}
      />
      <MiddleTitle>Crowded hotels:</MiddleTitle>
      <Carousel
        products={vouchers}
      />
    </>
  );
};

export default MarketCarousels;