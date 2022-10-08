import React from 'react';
import styled from 'styled-components';
import { colors } from './colors';

const H1Styled = styled.h1`
    text-align: center;
    color: ${colors.darkBlue};
    font-family: 'Intro Bold', Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
`;

const H1 = (props) => {
    return <H1Styled {...props} />;
};

export default H1;
