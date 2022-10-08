import React from 'react';
import styled from 'styled-components';
import { colors } from './colors';

const H5Styled = styled.h5`
    text-align: center;
    color: ${colors.darkBlue};
    font-family: 'Intro Regular', Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
`;

const H5 = (props) => {
    return <H5Styled {...props} />;
};

export default H5;
