import React, {FC} from 'react';
import {animated, Spring} from 'react-spring'

interface AppearProps {
  children: React.ReactNode
  delay: number
}

const Appear: FC<AppearProps> = ({children, delay}) => {

  return (
    <Spring
      from={{ opacity: 0.9, marginTop: '200px' }}
      to={[
        { opacity: 1, marginTop: '0px' },
      ]}
      config={{
        duration: delay
      }}
    >
      {styles => (
        <animated.div style={styles}>{children}</animated.div>
      )}
    </Spring>
  );
};

export default Appear;