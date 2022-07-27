import React, {memo} from 'react';
import {A, Desktop, Mobile, Links, Amount} from './Header.style'
import {RouteEnum} from '../../utils/routes'
import Search from '../SearchForm/SearchForm.component'
import {FaUserAstronaut as UserIcon} from 'react-icons/fa'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {RiLoginBoxLine as LoginIcon} from 'react-icons/ri'
import {AiOutlineShoppingCart as CartIcon} from 'react-icons/ai'
import {BsBookmarkHeart as WishesIcon} from 'react-icons/bs'

const iconSize = 35

const Header = memo(() => {
  const {isAuth} = useTypedSelector(state => state.auth)
  const {cart} = useTypedSelector(state => state.cart)
  const {wishes} = useTypedSelector(state => state.wishes)
  return (
    <>
      <Desktop>
        <Links>
          <A to={RouteEnum.MAIN}>Amazom</A>
          <A to={RouteEnum.MARKET}>Market</A>
          <A to={RouteEnum.ARTICLES}>Articles</A>
        </Links>
        <Search />
        <Links>
          <A to={RouteEnum.CART}>
            <CartIcon size={iconSize}/>
            {
              !!cart.length
              && <Amount>{cart.length }</Amount>
            }
          </A>
          <A to={RouteEnum.WISHES}>
            <WishesIcon size={30} />
            {
              !!wishes.length
              && <Amount>{wishes.length }</Amount>
            }

          </A>
          {
            isAuth
              ? <>
                <A to={RouteEnum.ACCOUNT}><UserIcon size={iconSize} /></A>
              </>
              : <A to="/login"><LoginIcon size={iconSize} /></A>
          }
        </Links>
      </Desktop>
      <Mobile>
        <A to={RouteEnum.MAIN}>Ama</A>
        <A to={RouteEnum.MARKET}>M</A>
        <A to={RouteEnum.ARTICLES}>Art</A>
        <A to={RouteEnum.CART}>C</A>
        <A to={RouteEnum.WISHES}>W</A>
        {
          isAuth
            ? <>
              <A to={RouteEnum.ACCOUNT}>Acc</A>
            </>
            : <A to="/login"><LoginIcon size={iconSize} /></A>
        }
      </Mobile>
    </>
  );
});

export default Header;