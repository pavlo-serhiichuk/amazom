import React from 'react';
import {UserLinks, Wrapper} from './Header.style'
import {StyledLink} from '../StyledLink/StyledLink.component'
import {RouteEnum} from '../../constants/routes'
import Search from '../Search/Search.component'

const Header = () => {
  return (
    <Wrapper>
      <UserLinks>
        <StyledLink to={RouteEnum.MAIN}>Amazom</StyledLink>
        <StyledLink to={RouteEnum.MARKET}>Market</StyledLink>
        <StyledLink to={RouteEnum.ARTICLES}>Articles</StyledLink>
      </UserLinks>
      <Search />
      <UserLinks>
        <StyledLink to="/signup">Sign Up</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      </UserLinks>
    </Wrapper>
  );
};

export default Header;