import React from 'react';
import styled from 'styled-components';
import { colors } from './colors';

const H4Styled = styled.h4`
    text-align: center;
    color: ${colors.darkBlue};
    font-family: 'Intro Book', Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 32px;
`;

const H4 = (props) => {
    return <H4Styled {...props} />;
};

export default H4;
