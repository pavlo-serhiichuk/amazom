import React from 'react';
import {A, UserLinks, Wrapper} from './Header.style'
import {RouteEnum} from '../../constants/routes'
import Search from '../Search/Search.component'

const Header = () => {
  return (
    <Wrapper>
      <UserLinks>
        <A to={RouteEnum.MAIN}>Amazom</A>
        <A to={RouteEnum.MARKET}>Market</A>
        <A to={RouteEnum.ARTICLES}>Articles</A>
      </UserLinks>
      <Search />
      <UserLinks>
        <A to="/signup">Sign Up</A>
        <A to="/login">Login</A>
      </UserLinks>
    </Wrapper>
  );
};

export default Header;