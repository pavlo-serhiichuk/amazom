import React from 'react';
import {UserLinks, Wrapper} from './Header.style'
import {StyledLink} from '../StyledLink/StyledLink.component'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <Wrapper>
      <StyledLink to="/market">Market</StyledLink>
      <div>
        <UserLinks>
          <StyledLink to="/signup">Sign Up</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
        </UserLinks>
      </div>
    </Wrapper>
  );
};

export default Header;