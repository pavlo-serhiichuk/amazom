import React, {useEffect, useState} from 'react';
import {Wrapper, Propositions} from './Market.style'
import Sidebar from '../../components/Sidebar/Sidebar.component'
import MarketCarousels from '../../components/MarketCarousels/MarketCarousels'
import {MainTitle} from '../../components/Title/Title.style'


const Market = () => {
  const [delay, setDelay] = useState(500)
  useEffect(() => {
    setDelay(delay + 1000)
  }, [])

  return (
    <Wrapper>
      <Sidebar />
      <Propositions>
        <MainTitle>Find everything you need</MainTitle>
        <MarketCarousels />
      </Propositions>
    </Wrapper>
  );
};

export default Market;