import React, {useEffect, useState} from 'react';
import {Wrapper, Propositions} from './Market.style'
import Sidebar from '../../components/Sidebar/Sidebar.component'
import {Carousel} from '../../components/Carousel/Carousel.component'
import {Spring, animated} from 'react-spring'
import Appear from '../../components/Appear/Appear'

const Market = () => {
  const [delay, setDelay] = useState(500)
  useEffect(() => {
    setDelay(prevState => prevState + 1000)
  }, [])

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