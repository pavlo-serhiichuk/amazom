import React, {memo} from 'react';
import {A, Desktop, Mobile, Links, Amount} from './Header.style'
import {PathEnum} from '../../utils/paths'
import Search from '../SearchForm/SearchForm.component'
import {FaUserAstronaut as UserIcon} from 'react-icons/fa'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {RiLoginBoxLine as LoginIcon} from 'react-icons/ri'
import {AiOutlineShoppingCart as CartIcon} from 'react-icons/ai'
import {BsBookmarkHeart as WishesIcon} from 'react-icons/bs'

const iconSize = 35

const Header = memo(() => {
  const {isAuth} = useTypedSelector(state => state.auth)
  const {cartIds} = useTypedSelector(state => state.cart)
  const {wishesIds} = useTypedSelector(state => state.wishes)

  return (
    <>
      <Desktop>
        <Links>
          <A to={PathEnum.MAIN}>Amazom</A>
          <A to={PathEnum.MARKET}>Market</A>
          <A to={PathEnum.ARTICLES}>Articles</A>
        </Links>
        <Search />
        <Links>
          <A to={PathEnum.CART}>
            <CartIcon size={iconSize}/>
            {
              !!cartIds.length
              && <Amount>{cartIds.length}</Amount>
            }
          </A>
          <A to={PathEnum.WISHES}>
            <WishesIcon size={30} />
            {
              !!wishesIds.length
              && <Amount>{wishesIds.length }</Amount>
            }

          </A>
          {
            isAuth
              ? <>
                <A to={PathEnum.ACCOUNT}><UserIcon size={iconSize} /></A>
              </>
              : <A to="/login"><LoginIcon size={iconSize} /></A>
          }
        </Links>
      </Desktop>
      <Mobile>
        <A to={PathEnum.MAIN}>Ama</A>
        <A to={PathEnum.MARKET}>M</A>
        <A to={PathEnum.ARTICLES}>Art</A>
        <A to={PathEnum.CART}>C</A>
        <A to={PathEnum.WISHES}>W</A>
        {
          isAuth
            ? <>
              <A to={PathEnum.ACCOUNT}>Acc</A>
            </>
            : <A to="/login"><LoginIcon size={iconSize} /></A>
        }
      </Mobile>
    </>
  );
});

export default Header;