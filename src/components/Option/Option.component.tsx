import React, {FC} from 'react';
import {Img, Title, Wrapper} from './Option.style'
import {NavLink} from 'react-router-dom'

interface PropositionProps {
    title: string
    url: string
    to: string
}

const Option: FC<PropositionProps> = ({title, url,to}) => {
    return (
        <Wrapper>
            <NavLink to={to}>
                <Img url={url} />
              <Title>{title}</Title>
            </NavLink>
        </Wrapper>
    );
};

export default Option;