import React, { useState } from 'react';
import styled from 'styled-components';
import Text from '../../style/Text';

const StyledText = styled(Text)`
    margin-top: 195px;
    text-align: start;
`;

const StyledText2 = styled(Text)`
    margin-top: 30px;
    margin-bottom: 84px;
    text-align: start;
`;

const IconMore = styled.span`
    width: 25px;
    height: 15px;
    display: inline-block;
    margin-bottom: -2px;
    margin-left: 20px;
    background-image: url(/images/icon-more.svg);
    background-size: cover;
    background-position: center;
    transition: 0.3s all;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;

const CompanyInfo = () => {
    const [hiddenText, setHiddenText] = useState(true);

    const handleClick = () => {
        setHiddenText(!hiddenText);
    };

    return (
        <>
            <StyledText>
                Since 2019, LibertyWalk has successfully provided express
                courier delivery services in the city for both individuals and
                legal entities, and is also a reliable logistics partner for
                delivery services for online stores and restaurants! Express
                delivery of documents and parcels for organizations, express
                delivery of correspondence, purchases, flowers, food, gifts and
                goods up to 1.5 tons - the most frequent orders in our company.
            </StyledText>
            <StyledText2>
                But at the same time, we do not limit the range of courier
                services and without problems we can buy and bring goods and
                products from the online store, arrange delivery for the online
                store, cafe, supermarket, restaurant or any other business.
                Around the clock on our website you can call a courier in just a
                minute and arrange an express courier delivery without
                unnecessary bureaucracy, negotiations and calls to the call
                center.
                {!hiddenText && <span> Hide text</span>}
                <IconMore onClick={handleClick}></IconMore>
            </StyledText2>
        </>
    );
};

export default CompanyInfo;
