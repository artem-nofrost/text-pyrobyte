import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    @media (min-width: 992.5px) {
        max-width: 960.5px;
        margin-right: auto;
        margin-left: auto;
    }
    @media (min-width: 1200.5px) {
        max-width: 1140px;
    }
    @media (min-width: 1360.5px) {
        max-width: 1240px;
    }
`;

const Container = (props) => {
    return <StyledContainer {...props} />;
};

export default Container;
