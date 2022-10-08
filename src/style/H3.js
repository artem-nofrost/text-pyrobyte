import React from 'react';
import styled from 'styled-components';
import { colors } from './colors';

const H3Styled = styled.h3`
    text-align: center;
    color: ${colors.darkBlue};
    font-family: 'Intro Regular', Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 32px;
`;

const H3 = (props) => {
    return <H3Styled {...props} />;
};

export default H3;
