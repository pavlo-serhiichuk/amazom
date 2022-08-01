import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider'
import Options from '../../components/Options/Options.component'

const sliderImages = [
  {url: 'https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg'},
  {url: 'https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg'},
  {url: 'https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg'},
];

const Main = () => {
  return (
    <>
      <SimpleImageSlider
        width={'100%'}
        height={504}
        images={sliderImages}
        useGPURender={true}
        showNavs={true}
        showBullets={false}
        loop={true}
        autoPlay={true}
        autoPlayDelay={3}
        startIndex={2}
        navStyle={1}
        navSize={50}
        navMargin={30}
        bgColor={'#000'}
      />
      <Options />
    </>
  );
};

export default Main;