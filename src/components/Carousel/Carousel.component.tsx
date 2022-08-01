import React, {FC} from 'react';
import Slider from 'react-slick'
import {IProduct} from '../../models/IProduct'
import {Img, Wrapper} from './Carousel.style'

interface CarouselProps {
  products?: IProduct[]
}

const Carousel: FC<CarouselProps> = ({products}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {products?.map(product =>
          <Img to={`/market/${product.category}/${product.id}`} url={product.image[0]}/>
        )}
      </Slider>
    </Wrapper>
  );
}

export default Carousel;