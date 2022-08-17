import React, {FC} from 'react';
import Slider from 'react-slick'
import {IProduct} from '../../models/IProduct'
import {Img, Wrapper} from './Carousel.style'

interface CarouselProps {
  products?: IProduct[]
  autoplaySpeed?: number
  autoplay?: boolean
}

const Carousel: FC<CarouselProps> = ({products, autoplay= true, autoplaySpeed = 2000}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay,
    autoplaySpeed: autoplaySpeed,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {products?.map(product =>
          <Img
          key={product.id}
          to={`/market/${product.category}/${product.id}`}
          url={product.image[0]}
          />
        )}
      </Slider>
    </Wrapper>
  );
}

export default Carousel;