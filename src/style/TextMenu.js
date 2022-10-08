import React from 'react';
import styled from 'styled-components';
import { colors } from './colors';

const TextStyled = styled.p`
    text-align: center;
    margin-bottom: 0;
    color: ${colors.darkBlue};
    font-family: 'Intro Book', Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 48px;
`;

const TextMenu = (props) => {
    return <TextStyled {...props} />;
};

export default TextMenu;
