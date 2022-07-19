import React, {FC} from 'react'
import {A} from './StyledLink.style'
import {useActions} from '../../hooks/useActions'

interface StyledLinkProps {
  children: React.ReactNode
  to: string
  category?: string
}

export const StyledLink: FC<StyledLinkProps> = ({children, to, category}) => {
  const {setCategory} = useActions()

  const handleClick = () => {
    return category ? setCategory(category) : null
  }

  return (
    <A to={to} onClick={handleClick}>
          {children}
    </A>
  )
}