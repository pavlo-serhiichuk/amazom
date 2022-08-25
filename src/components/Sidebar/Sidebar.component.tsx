import React, {memo} from 'react';
import {Wrapper} from './Sidebar.style'
import {StyledLink} from '../StyledLink/StyledLink.component'
import {PathEnum} from '../../utils/paths'

const Sidebar = memo(() => {
  return (
    <Wrapper>
        <StyledLink to={PathEnum.BOOKS} category="books">Books</StyledLink>
        <StyledLink to={PathEnum.GUITARS} category="guitars">Guitars</StyledLink>
        <StyledLink to={PathEnum.VOUCHERS} category="vouchers">Vouchers</StyledLink>
    </Wrapper>
  );
})

export default Sidebar;