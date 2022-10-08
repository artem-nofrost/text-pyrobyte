import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Col, Drawer, Button, Input } from 'antd';
import LogoSrc from '../../images/logo.png';
import { useHistory } from 'react-router-dom';
import Text from '../../style/Text';
import { colors } from '../../style/colors';

const ProfileIconWrapper = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    border-radius: 50%;
    border: 2px solid ${colors.lightBlue};
    cursor: pointer;
    transition: 0.3s all;
    &:hover {
        opacity: 0.7;
    }
`;

const ProfileIcon = styled.div`
    width: 11px;
    height: 13px;
    background-image: url(/images/icon-profile.svg);
    background-size: cover;
    background-position: center;
`;
const ProfileOnlineWrapper = styled.div`
    width: 7px;
    height: 7px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: -18px;
    margin-top: -14px;
    border-radius: 50%;
    background: white;
`;

const ProfileOnline = styled.div`
    width: 5px;
    height: 5px;
    position: absolute;
    border-radius: 50%;
    background: #fd466e;
`;

const MenuBar = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    border-bottom: 1px solid #2b6bf329;
`;

const StyledRow = styled(Row)`
    align-items: center;
    width: 100%;
    max-width: 1300px;
    margin: auto;
`;

const Logo = styled.img`
    width: 192px;
    height: auto;
    margin: 8px auto;
    cursor: pointer;
    @media (max-width: 991.5px) {
        width: 120px;
    }
`;

const DesctopMenu = styled.div`
    display: block;
    @media (max-width: 991.5px) {
        display: none;
    }
`;

const IconLocation = styled.div`
    display: inline-block;
    content: url(/images/icon-location.svg);
    vertical-align: text-top;
    margin-right: 10px;
    pointer-events: all;
`;

const TextLocation = styled.div`
    color: #666666;
    font-family: 'Intro Book', Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    transition: 0.3s all;
    &:hover {
        opacity: 0.7;
    }
`;

const InputStyled = styled(Input)`
    max-width: 184px;
    display: inline-block;
    border: 1px solid ${colors.lightBlue};
    border-radius: 8px;
    padding: 12.5px 16px;
    transition: 0.3s all;
    &::placeholder {
        color: ${colors.darkBlue}!important;
        opacity: 0.56;
        font-family: 'Intro Book', Helvetica, Arial, sans-serif;
        font-size: 14px;
        line-height: 24px;
    }
    &:hover {
        background: #f1f5ff;
    }
    &:active,
    :focus {
        border: 1px solid ${colors.blue}!important;
        &::placeholder {
            opacity: 1;
        }
        + .container-icon-search {
            .icon-search {
                background-image: url(/images/icon-search-active.svg);
                @media (max-width: 991.5px) {
                    background-image: url(/images/icon-search-mobile-hover.svg);
                }
            }
        }
    }
    @media (max-width: 991.5px) {
        min-width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;

const ContainerSearchIcon = styled.div`
    display: inline-block;
`;

const IconSearch = styled.div`
    position: absolute;
    top: 16px;
    width: 16px;
    height: 16px;
    margin-left: -25px;
    background-image: url(/images/icon-search.svg);
    background-size: cover;
    background-position: center;
    @media (max-width: 991.5px) {
        top: 36px;
        background-image: url(/images/icon-search-mobile.svg);
    }
`;

const TextLink = styled(Text)`
    color: #666666;
    cursor: pointer;
    transition: 0.3s all;
    &:hover {
        opacity: 0.7;
    }
`;

const LockIconWrapper = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.blue};
    margin: auto;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s all;
    &:hover {
        opacity: 0.7;
    }
`;

const LockIcon = styled.div`
    width: 16px;
    height: 16px;
    background-image: url(/images/icon-lock.svg);
    background-size: cover;
    background-position: center;
`;

const BarsMenu = styled(Button)`
    display: none;
    justify-content: center;
    align-items: center;
    border: 0;
    height: 32px;
    padding: 13px;
    margin-top: 8px;
    margin-left: auto;
    outline: auto;
    background: none;
    transition: outline 0.6s linear;
    &:hover,
    :focus {
        opacity: 0.7;
        outline: auto;
        background: transparent;
    }
    &:active {
        outline: auto !important;
        background: transparent;
    }
    @media (max-width: 991.5px) {
        display: flex;
    }
`;

const BarsButton = styled.span`
    position: relative;
    display: block;
    width: 18px;
    height: 12px;
    content: url(/images/icon-butter.svg);
    &:before,
    :after {
        content: attr(x);
        width: 28px;
        position: absolute;
        top: -10px;
        left: 0;
        height: 2px;
        background: red;
    }
    &:after {
        top: auto;
        bottom: -10px;
    }
`;

const LocationUnderline = styled.span`
    background-image: linear-gradient(
        to right,
        ${colors.lightBlue} 50%,
        transparent 50%
    );
    background-position: 0 1.11em;
    background-repeat: repeat-x;
    background-size: 7px 2px;
`;

const StyledRowMobileMenu = styled(StyledRow)`
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
`;

const CloseMenu = styled.div`
    width: 24px;
    height: 24px;
    position: absolute;
    top: 20px;
    right: 12px;
    background-image: url(/images/icon-close-menu.svg);
    background-size: cover;
    background-position: center;
    transition: 0.3s all;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;

const StyledCol = styled(Col)`
    width: 100%;
    &:last-of-type {
        margin-top: auto;
    }
`;

const StyledDrawer = styled(Drawer)`
    .ant-drawer-content-wrapper {
        @media (max-width: 450.5px) {
            width: 250px !important;
        }

        ul {
            display: flex;
            flex-direction: column;

            li {
                color: black;
                &:hover {
                    color: #363636 !important;
                }
            }
        }
    }
`;

const StyledButton = styled(Button)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 16px;
    margin-top: 40px;
    background: ${colors.blue};
    border: 0;
    border-radius: 32px;
    font-family: 'Intro Regular', Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: white;
    &:hover {
        background: ${colors.blue};
        color: white;
        opacity: 0.7;
    }
    &:focus,
    :active {
        background: ${colors.blue};
        color: white;
    }
`;

const HeaderMenu = () => {
    const [visible, setVisible] = useState(false);
    const history = useHistory();
    return (
        <>
            <MenuBar>
                <StyledRow>
                    <Col xs={{ span: 8, order: 1 }} lg={{ span: 0, order: 1 }}>
                        <ProfileIconWrapper>
                            <ProfileIcon></ProfileIcon>
                            <ProfileOnlineWrapper>
                                <ProfileOnline></ProfileOnline>
                            </ProfileOnlineWrapper>
                        </ProfileIconWrapper>
                    </Col>

                    <Col xs={{ span: 8, order: 2 }} lg={{ span: 5, order: 1 }}>
                        <Logo src={LogoSrc} onClick={() => history.push('/')} />
                    </Col>

                    <Col xs={{ span: 8, order: 3 }} lg={{ span: 0, order: 1 }}>
                        <BarsMenu
                            className="barsMenu"
                            type="primary"
                            onClick={() => setVisible(true)}
                        >
                            <BarsButton />
                        </BarsMenu>
                    </Col>

                    <Col
                        xl={{ span: 19, order: 1 }}
                        lg={{ span: 18, order: 1 }}
                    >
                        <DesctopMenu>
                            <StyledRow>
                                <Col
                                    xl={{ span: 5, order: 2 }}
                                    lg={{ span: 6, order: 1 }}
                                >
                                    <TextLocation>
                                        <IconLocation></IconLocation>
                                        NY, Manhattan
                                    </TextLocation>
                                </Col>
                                <Col
                                    xl={{ span: 7, order: 3 }}
                                    lg={{ span: 6, order: 1 }}
                                >
                                    <InputStyled placeholder="Track a Package"></InputStyled>
                                    <ContainerSearchIcon className="container-icon-search">
                                        <IconSearch className="icon-search"></IconSearch>
                                    </ContainerSearchIcon>
                                </Col>
                                <Col
                                    xl={{ span: 4, order: 4 }}
                                    lg={{ span: 4, order: 1 }}
                                >
                                    <TextLink>Send a Parcel</TextLink>
                                </Col>
                                <Col
                                    xl={{ span: 5, order: 5 }}
                                    lg={{ span: 4, order: 1 }}
                                >
                                    <TextLink>Become a Courier</TextLink>
                                </Col>
                                <Col
                                    xl={{ span: 3, order: 6 }}
                                    lg={{ span: 3, order: 1 }}
                                >
                                    <LockIconWrapper>
                                        <LockIcon></LockIcon>
                                    </LockIconWrapper>
                                </Col>
                            </StyledRow>
                        </DesctopMenu>
                        <StyledDrawer
                            placement="right"
                            closable={false}
                            onClose={() => setVisible(false)}
                            open={visible}
                        >
                            <StyledRowMobileMenu>
                                <CloseMenu
                                    onClick={() => setVisible(false)}
                                ></CloseMenu>
                                <Col>
                                    <TextLocation>
                                        <IconLocation></IconLocation>
                                        <LocationUnderline>
                                            NY, Manhattan
                                        </LocationUnderline>
                                    </TextLocation>
                                </Col>
                                <StyledCol>
                                    <InputStyled placeholder="Track a Package"></InputStyled>
                                    <ContainerSearchIcon className="container-icon-search">
                                        <IconSearch className="icon-search"></IconSearch>
                                    </ContainerSearchIcon>
                                </StyledCol>
                                <Col>
                                    <TextLink>Send a Parcel</TextLink>
                                </Col>
                                <Col>
                                    <TextLink>Become a Courier</TextLink>
                                </Col>
                                <Col>
                                    <TextLink>Affiliate Program</TextLink>
                                </Col>
                                <Col>
                                    <TextLink>Help & Support</TextLink>
                                </Col>
                                <StyledCol>
                                    <StyledButton>
                                        Take a complex order
                                    </StyledButton>
                                </StyledCol>
                            </StyledRowMobileMenu>
                        </StyledDrawer>
                    </Col>
                </StyledRow>
            </MenuBar>
        </>
    );
};

export default HeaderMenu;
