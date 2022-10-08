import React from 'react';
import styled from 'styled-components';
import { colors } from './colors';

const TextStyled = styled.p`
    text-align: center;
    margin-bottom: 0;
    color: ${colors.darkBlue};
    font-family: 'Intro Book', Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
`;

const Text2 = (props) => {
    return <TextStyled {...props} />;
};

export default Text2;
