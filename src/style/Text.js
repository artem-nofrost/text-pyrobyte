import React from 'react';
import styled from 'styled-components';

const TextStyled = styled.p`
    text-align: center;
    margin-bottom: 0;
    color: #666666;
    font-family: 'Intro Book', Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`;

const Text = (props) => {
    return <TextStyled {...props} />;
};

export default Text;
