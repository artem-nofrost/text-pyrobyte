import { Button, Col, Row } from 'antd';
import React from 'react';
import H1 from '../../style/H1';
import H3 from '../../style/H3';
import Text from '../../style/Text';
import styled from 'styled-components';
import H4 from '../../style/H4';
import { colors } from '../../style/colors';

const StyledH1 = styled(H1)`
    margin-top: 130px;
`;

const WrapperText = styled.div`
    position: relative;
`;

const StyledRow = styled(Row)`
    justify-content: center;
    gap: 50px;
    margin-top: 39px;
`;

const StyledCol = styled(Col)`
    max-width: 300px;
`;

const StyledH4 = styled(H4)`
    max-width: 754px;
    margin: auto;
    opacity: 0.48;
`;

const Intesect = styled.div`
    width: 220px;
    height: 504px;
    position: absolute;
    right: -170px;
    top: -230px;
    background-image: url(/images/new-york.png);
    background-size: cover;
    background-position: center;
    @media (max-width: 991.5px) {
        display: none;
    }
`;

const WrapperIconInfo = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 0px 8px 16px rgba(43, 107, 243, 0.16);
`;

const IconInfo = styled.div`
    width: ${(props) => props.logoWidth};
    height: ${(props) => props.logoHeight};
    background-image: ${(props) => props.logoSrc};
    background-size: cover;
    background-position: center;
`;

const StyledH3 = styled(H3)`
    text-align: start;
    margin-top: 30px;
`;

const H3link = styled.span`
    font-family: 'Intro Regular', Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 32px;
    text-decoration: underline;
    color: blue;
    transition: 0.3s all;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
        text-decoration: none;
    }
`;

const StyledText = styled(Text)`
    text-align: start;
    margin-top: 20px;
`;

const StyledButton = styled(Button)`
    max-width: 296px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 96px;
    margin-top: 36px !important;
    margin: auto;
    background: ${colors.yellow};
    border: 0;
    border-radius: 32px;
    font-family: 'Intro Regular', Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: ${colors.darkBlue};
    &:hover {
        background: ${colors.yellow};
        color: white;
    }
    &:focus,
    :active {
        background: ${colors.yellow};
        color: white;
    }
    @media (max-width: 767.5px) {
        max-width: 100%;
    }
`;

const Intro = () => {
    return (
        <>
            <StyledH1>What we do</StyledH1>
            <WrapperText>
                <StyledH4>
                    Express courier service in the city. We are a reliable
                    logistics partner for delivery services for online stores
                    and restaurants!
                </StyledH4>
                <Intesect></Intesect>
            </WrapperText>

            <StyledRow>
                <StyledCol>
                    <Row>
                        <WrapperIconInfo>
                            <IconInfo
                                logoSrc="url(/images/icon-calc.svg);"
                                logoWidth="40px"
                                logoHeight="40px"
                            ></IconInfo>
                        </WrapperIconInfo>
                    </Row>
                    <StyledH3>
                        Online <H3link>calculation</H3link>
                    </StyledH3>
                    <StyledText>
                        Instant calculation of the cost in the order form, the
                        price is updated in the process of filling out the form
                    </StyledText>
                </StyledCol>
                <StyledCol>
                    <Row>
                        <WrapperIconInfo>
                            <IconInfo
                                logoSrc="url(/images/icon-paperwork.svg);"
                                logoWidth="35px"
                                logoHeight="42px"
                            ></IconInfo>
                        </WrapperIconInfo>
                    </Row>
                    <StyledH3>Minimum paperwork</StyledH3>
                    <StyledText>
                        You can place an order for courier or freight delivery
                        without registration and contract.
                    </StyledText>
                </StyledCol>
                <StyledCol>
                    <Row>
                        <WrapperIconInfo>
                            <IconInfo
                                logoSrc="url(/images/icon-payment.svg);"
                                logoWidth="39px"
                                logoHeight="32px"
                            ></IconInfo>
                        </WrapperIconInfo>
                    </Row>
                    <StyledH3>Convenient payment</StyledH3>
                    <StyledText>
                        You can pay for delivery by card or in cash at any of
                        the order addresses. For legal entities non-cash is
                        available.
                    </StyledText>
                </StyledCol>
            </StyledRow>
            <StyledButton>Get started!</StyledButton>
        </>
    );
};

export default Intro;
