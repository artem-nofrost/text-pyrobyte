import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import { colors } from '../../style/colors';
import H2 from '../../style/H2';
import H5 from '../../style/H5';
import Text2 from '../../style/Text2';
import TextNumber from '../../style/TextNumber';

const SepLine = styled.div`
    width: 100vw;
    height: 2px;
    position: absolute;
    left: 0;
    background: ${colors.lightBlue};
`;

const StyledRow = styled(Row)`
    margin: 0 -30px;
    margin-top: 168px;
    .ant-col {
        padding: 0 30px;
        margin-bottom: 30px;
    }
    @media (max-width: 991.5px) {
        margin-top: 133px;
    }
`;

const LogoFooter = styled.div`
    width: 44px;
    height: 46px;
    margin-top: 55px;
    background-image: url(/images/logo-footer.svg);
    background-size: cover;
    background-position: center;
`;

const StyledH2 = styled(H2)`
    margin-bottom: ${(props) => props.marginBottom || '32px'};
    text-align: start;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
`;

const Line = styled.div`
    width: 100%;
    height: 2px;
    margin-bottom: 21px;
    background: ${colors.lightBlue};
`;

const StyledText2 = styled(Text2)`
    text-align: start;
    opacity: 0.64;
`;

const StyledText2Link = styled(StyledText2)`
    transition: 0.3s all;
    cursor: pointer;
    &:hover {
        opacity: 0.5;
    }
`;

const StyledTextNumber = styled(TextNumber)`
    text-align: start;
`;

const IconLocation = styled.div`
    width: 12px;
    height: 16px;
    margin-top: 5px;
    margin-right: 10px;
    background-image: url(/images/icon-location-footer.svg);
    background-size: cover;
    background-position: center;
`;

const StyledText2Address = styled(StyledText2)`
    width: 91%;
`;

const StyledRowSocial = styled(Row)`
    margin-top: 58px;
`;

const SocialLink = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.blue};
    border-radius: 50%;
    transition: 0.3s all;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
    @media (max-width: 767.5px) {
        margin: auto;
    }
`;

const SocialLinkIcon = styled.div`
    width: 40px;
    height: 40px;
    background-image: ${(props) => props.iconSrc};
    background-size: cover;
    background-position: center;
`;

const StyledColSocial = styled(Col)`
    padding: 0 !important;
`;

const SepLine2 = styled.div`
    width: 100%;
    height: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 25px;
    background: ${colors.lightBlue};
`;

const WrapperSepText = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: white;
`;

const SepText = styled(H5)`
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${colors.lightBlue};
`;

const BottomLogo = styled.div`
    width: 85px;
    height: 64px;
    background-image: url(/images/logo-footer2.svg);
    background-size: cover;
    background-position: center;
    margin: auto;
`;

const RowPrivate = styled(Row)`
    justify-content: center;
`;

const LogoPrivate = styled.div`
    width: 10px;
    height: 13px;
    margin-top: 5px;
    margin-right: 13px;
    background-image: url(/images/icon-private.svg);
    background-size: cover;
    background-position: center;
`;

const StyledText2Footer = styled(Text2)`
    opacity: 0.64;
`;

const StyledText2FooterRights = styled(StyledText2Footer)`
    @media (max-width: 767.5px) {
        margin-top: 15px;
    }
`;

const StyledRowBottom = styled(Row)`
    align-items: center;
    margin-bottom: 56px;
`;

const Footer = () => {
    return (
        <>
            <SepLine></SepLine>
            <StyledRow>
                <Col xs={4} sm={3} md={2} lg={2}>
                    <LogoFooter></LogoFooter>
                </Col>
                <Col xs={20} sm={21} md={10} lg={6}>
                    <StyledH2>About Whoosh</StyledH2>
                    <StyledText2>
                        Express delivery of documents and parcels for
                        organizations, correspondence, purchases, flowers, food,
                        gifts and goods up to 1.5 tons.
                    </StyledText2>
                </Col>
                <Col xs={12} md={12} lg={5}>
                    <StyledH2 marginBottom="9px">Menu</StyledH2>
                    <Line></Line>
                    <StyledText2Link>About company</StyledText2Link>
                    <StyledText2Link>Contact</StyledText2Link>
                    <StyledText2Link>Rules</StyledText2Link>
                    <StyledText2Link>FAQ</StyledText2Link>
                    <StyledText2Link>Reviews</StyledText2Link>
                    <StyledText2Link>Cargo transportation</StyledText2Link>
                    <StyledText2Link>Tariffs</StyledText2Link>
                </Col>
                <Col xs={12} md={12} lg={5}>
                    <StyledH2 marginBottom="9px">Services</StyledH2>
                    <Line></Line>
                    <StyledText2Link>Online stores</StyledText2Link>
                    <StyledText2Link>Legal entity</StyledText2Link>
                    <StyledText2Link>API Integration</StyledText2Link>
                    <StyledText2Link>Contract</StyledText2Link>
                    <StyledText2Link>Jobs</StyledText2Link>
                    <StyledText2Link>Courier job</StyledText2Link>
                    <StyledText2Link>The blog</StyledText2Link>
                </Col>
                <Col xs={24} md={12} lg={6}>
                    <StyledH2 marginBottom="9px">Contact us</StyledH2>
                    <Line></Line>
                    <StyledTextNumber>8 800 934 5959</StyledTextNumber>
                    <Row>
                        <IconLocation></IconLocation>
                        <StyledText2Address>
                            2545 W. Diversey Ave. 3rd Floor Chicago, IL 60647
                        </StyledText2Address>
                    </Row>
                    <StyledRowSocial>
                        <StyledColSocial xs={6}>
                            <SocialLink>
                                <SocialLinkIcon iconSrc="url(/images/icon-facebook.svg)"></SocialLinkIcon>
                            </SocialLink>
                        </StyledColSocial>
                        <StyledColSocial xs={6}>
                            <SocialLink>
                                <SocialLinkIcon iconSrc="url(/images/icon-vk.svg)"></SocialLinkIcon>
                            </SocialLink>
                        </StyledColSocial>
                        <StyledColSocial xs={6}>
                            <SocialLink>
                                <SocialLinkIcon iconSrc="url(/images/icon-youtube.svg)"></SocialLinkIcon>
                            </SocialLink>
                        </StyledColSocial>
                        <StyledColSocial xs={6}>
                            <SocialLink>
                                <SocialLinkIcon iconSrc="url(/images/icon-instagram.svg)"></SocialLinkIcon>
                            </SocialLink>
                        </StyledColSocial>
                    </StyledRowSocial>
                </Col>
            </StyledRow>

            <StyledRowBottom>
                <Col xs={{ span: 24, order: 3 }} md={{ span: 24, order: 1 }}>
                    <SepLine2>
                        <WrapperSepText>
                            <SepText>Made by</SepText>
                        </WrapperSepText>
                    </SepLine2>
                </Col>
                <Col xs={{ span: 24, order: 2 }} md={{ span: 8, order: 2 }}>
                    <StyledText2FooterRights>
                        © 2020. All right reserved.
                    </StyledText2FooterRights>
                </Col>
                <Col xs={{ span: 24, order: 4 }} md={{ span: 8, order: 3 }}>
                    <BottomLogo></BottomLogo>
                </Col>
                <Col xs={{ span: 24, order: 1 }} md={{ span: 8, order: 4 }}>
                    <RowPrivate>
                        <LogoPrivate></LogoPrivate>
                        <StyledText2Footer>Privacy policy</StyledText2Footer>
                    </RowPrivate>
                </Col>
            </StyledRowBottom>
        </>
    );
};

export default Footer;
