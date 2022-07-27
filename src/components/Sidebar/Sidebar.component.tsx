import React from 'react';
import {Wrapper} from './Sidebar.style'
import {StyledLink} from '../StyledLink/StyledLink.component'
import {RouteEnum} from '../../utils/routes'

const Sidebar = () => {
  return (
    <Wrapper>
        <StyledLink to={RouteEnum.BOOKS} category="books">Books</StyledLink>
        <StyledLink to={RouteEnum.GUITARS} category="guitars">Guitars</StyledLink>
        <StyledLink to={RouteEnum.VOUCHERS} category="vouchers">Vouchers</StyledLink>
    </Wrapper>
  );
};

export default Sidebar;