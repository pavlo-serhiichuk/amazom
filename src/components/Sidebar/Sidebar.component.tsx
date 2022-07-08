import React from 'react';
import {Wrapper} from './Sidebar.style'
import {StyledLink} from '../StyledLink/StyledLink.component'

const Sidebar = () => {
  return (
    <Wrapper>
        <StyledLink to={'/market/books'} category="books">Books</StyledLink>
        <StyledLink to={'/market/guitars'} category="guitars">Guitars</StyledLink>
        <StyledLink to={'/market/vouchers'} category="vouchers">Vouchers</StyledLink>
    </Wrapper>
  );
};

export default Sidebar;