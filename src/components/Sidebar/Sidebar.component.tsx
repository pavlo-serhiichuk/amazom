import React, {memo} from 'react';
import {Wrapper} from './Sidebar.style'
import {StyledLink} from '../StyledLink/StyledLink.component'
import {RoutePath} from '../../utils/paths'

const Sidebar = memo(() => {
  return (
    <Wrapper>
        <StyledLink to={RoutePath.BOOKS} category="books">Books</StyledLink>
        <StyledLink to={RoutePath.GUITARS} category="guitars">Guitars</StyledLink>
        <StyledLink to={RoutePath.VOUCHERS} category="vouchers">Vouchers</StyledLink>
    </Wrapper>
  );
})

export default Sidebar;