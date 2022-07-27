import {useEffect, useState} from 'react'

type Props = {
  children: any;
  waitBeforeShow?: number;
};

const Delayed = ({ children, waitBeforeShow = 500 }: Props) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
    return () => clearTimeout(timer);
  }, [waitBeforeShow]);

  return isShown ? children : null;
};

export default Delayed