import React from 'react';
import styled from 'styled-components';
import { colors } from './colors';

const H2Styled = styled.h2`
    text-align: center;
    color: ${colors.darkBlue};
    font-family: 'Intro Bold', Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
`;

const H2 = (props) => {
    return <H2Styled {...props} />;
};

export default H2;
