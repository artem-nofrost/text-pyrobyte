import { Col, Row } from 'antd';
import React from 'react';
import H1 from '../../style/H1';
import H4 from '../../style/H4';
import styled from 'styled-components';
import { colors } from '../../style/colors';
import H3 from '../../style/H3';
import Text from '../../style/Text';

const StyledH1 = styled(H1)`
    margin-top: 100px;
`;

const StyledH4 = styled(H4)`
    max-width: 754px;
    margin: auto;
    opacity: 0.48;
`;

const StyledRow = styled(Row)`
    justify-content: center;
    gap: 50px;
    margin-top: 39px;
`;

const StyledCol = styled(Col)`
    max-width: 330px;
    min-height: 280px;
`;

const WrapperInfo = styled.div`
    height: 100%;
    border: 1px solid ${colors.lightBlue};
    border-radius: 8px;
    padding: 24px;
    transition: 0.3s all;
    cursor: pointer;
    &:hover {
        border: 2px solid ${colors.blue};
    }
`;

const StyledH3 = styled(H3)`
    text-align: start;
`;

const SyledRowLogo = styled(Row)`
    margin-top: 10px;
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
    width: 48px;
    height: 48px;
    background-image: ${(props) => props.logoSrc};
    background-size: cover;
    background-position: center;
`;

const IconRoute = styled.div`
    width: 102px;
    height: 76px;
    background-image: url(/images/icon-route.svg);
    background-size: cover;
    background-position: center;
`;

const StyledText = styled(Text)`
    text-align: start;
    margin-top: 36px;
`;

const SepLine = styled.div`
    width: 100vw;
    height: 2px;
    position: absolute;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 94px;
    background: ${colors.lightBlue};
`;

const WrapperSepLogo = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: white;
`;

const SepLogo = styled.div`
    width: 32px;
    height: 28px;
    background-image: url(/images/icon-box.svg);
    background-size: cover;
    background-position: center;
`;

const Info = () => {
    return (
        <>
            <StyledH1>Express delivery market revolution</StyledH1>
            <StyledH4>
                Express courier service in the city. We are a reliable logistics
                partner for delivery services for online stores and restaurants!
            </StyledH4>
            <StyledRow>
                <StyledCol>
                    <WrapperInfo>
                        <StyledH3>Become a Courier</StyledH3>
                        <SyledRowLogo>
                            <WrapperIconInfo>
                                <IconInfo logoSrc="url(/images/icon-circle.svg);"></IconInfo>
                            </WrapperIconInfo>

                            <IconRoute></IconRoute>
                        </SyledRowLogo>

                        <StyledText>
                            You choose a schedule. You decide how much and when
                            to earn. Earnings from day one
                        </StyledText>
                    </WrapperInfo>
                </StyledCol>
                <StyledCol>
                    <WrapperInfo>
                        <StyledH3>Help & Support</StyledH3>
                        <SyledRowLogo>
                            <WrapperIconInfo>
                                <IconInfo logoSrc="url(/images/icon-support.svg);"></IconInfo>
                            </WrapperIconInfo>
                        </SyledRowLogo>

                        <StyledText>
                            Door-to-door delivery in 90 minutes or at your
                            convenience
                        </StyledText>
                    </WrapperInfo>
                </StyledCol>
                <StyledCol>
                    <WrapperInfo>
                        <StyledH3>Affiliate Program</StyledH3>
                        <SyledRowLogo>
                            <WrapperIconInfo>
                                <IconInfo logoSrc="url(/images/icon-suitcase.svg);"></IconInfo>
                            </WrapperIconInfo>
                        </SyledRowLogo>

                        <StyledText>
                            Use our service and feel new quality of this
                            traditional service!
                        </StyledText>
                    </WrapperInfo>
                </StyledCol>
            </StyledRow>
            <SepLine>
                <WrapperSepLogo>
                    <SepLogo></SepLogo>
                </WrapperSepLogo>
            </SepLine>
        </>
    );
};

export default Info;
