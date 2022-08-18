import React from 'react';
import {Wrapper} from './Loader.style'
import preloader from '../../images/rolling.svg'

const Loader = () => {
  return (
    <Wrapper>
      <img src={preloader} />
    </Wrapper>
  );
};

export default Loader;