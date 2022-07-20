import React, {memo} from 'react';
import {A, Desktop, Mobile, UserLinks} from './Header.style'
import {RouteEnum} from '../../constants/routes'
import Search from '../Search/Search.component'
import {FaUserAstronaut} from 'react-icons/fa'
import {useTypedSelector} from '../../hooks/useTypedSelector'

const Header = memo(() => {
  const {isAuth} = useTypedSelector(state => state.auth)
  return (
    <>
      <Desktop>
        <UserLinks>
          <A to={RouteEnum.MAIN}>Amazom</A>
          <A to={RouteEnum.MARKET}>Market</A>
          <A to={RouteEnum.ARTICLES}>Articles</A>
        </UserLinks>
        <Search />
        <UserLinks>
          {
            isAuth
              ? <>
                <A to={RouteEnum.CART}>Cart</A>
                <A to={RouteEnum.WISHES}>Wishes</A>
                <A to={RouteEnum.ACCOUNT}>Account</A>
              </>
              : <A to="/login"><FaUserAstronaut size={30} width={100} /></A>
          }
        </UserLinks>
      </Desktop>
      <Mobile>
        <A to={RouteEnum.MAIN}>Ama</A>
        <A to={RouteEnum.MARKET}>M</A>
        <A to={RouteEnum.ARTICLES}>Art</A>
        {
          isAuth
            ? <>
              <A to={RouteEnum.CART}>C</A>
              <A to={RouteEnum.WISHES}>W</A>
              <A to={RouteEnum.ACCOUNT}>Acc</A>
            </>
            : <A to="/login"><FaUserAstronaut size={30} width={100} /></A>
        }
      </Mobile>
    </>
  );
});

export default Header;