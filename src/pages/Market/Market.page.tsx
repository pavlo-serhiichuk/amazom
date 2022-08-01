import React, {useEffect, useState} from 'react';
import {Wrapper, Propositions} from './Market.style'
import Sidebar from '../../components/Sidebar/Sidebar.component'

const Market = () => {
  const [delay, setDelay] = useState(500)
  useEffect(() => {
    setDelay(prevState => prevState + 1000)
  }, [])

  return (
    <Wrapper>
      <Sidebar />
      <Propositions>
      </Propositions>
    </Wrapper>
  );
};

export default Market;