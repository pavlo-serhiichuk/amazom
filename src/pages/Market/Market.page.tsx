import React from 'react';
import {Wrapper, Propositions} from './Market.style'
import Sidebar from '../../components/Sidebar/Sidebar.component'
import {Carousel} from '../../components/Carousel/Carousel.component'

const Market = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Propositions>
        <Carousel />
      </Propositions>
    </Wrapper>
  );
};

export default Market;