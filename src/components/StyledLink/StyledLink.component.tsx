import React, {FC, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {StyledLinkWrapper} from './StyledLink.style'
import {useActions} from '../../hooks/useActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'

interface StyledLinkProps {
  children: React.ReactNode
  to: string
  category?: string
}

export const StyledLink: FC<StyledLinkProps> = ({children, to, category}) => {
  const {setCategory} = useActions()

  const handleClick = () => {
    return category ? setCategory(category): null
  }

  return (
    <StyledLinkWrapper>
      <NavLink to={to} onClick={handleClick}>{children}</NavLink>
    </StyledLinkWrapper>
  )
}