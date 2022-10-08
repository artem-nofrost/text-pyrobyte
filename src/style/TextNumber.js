import React from 'react';
import styled from 'styled-components';
import { colors } from './colors';

const TextStyled = styled.p`
    text-align: center;
    margin-bottom: 0;
    color: ${colors.darkBlue};
    font-family: 'Intro Regular', Helvetica, Arial, sans-serif;
    font-size: 32px;
    line-height: 40px;
`;

const TextNumber = (props) => {
    return <TextStyled {...props} />;
};

export default TextNumber;
