import { Button, Col, Form, Input, Radio, Row } from 'antd';
import React, { useRef, useState } from 'react';
import H1 from '../../style/H1';
import H3 from '../../style/H3';
import H4 from '../../style/H4';
import H5 from '../../style/H5';
import Text from '../../style/Text';
import styled from 'styled-components';
import { colors } from '../../style/colors';
import Text2 from '../../style/Text2';

const StyledRow = styled(Row)`
    align-items: center;
    @media (max-width: 991.5px) {
        align-items: start;
        gap: 30px;
    }
`;

const StyledH1 = styled(H1)`
    margin-bottom: 34px;
    text-align: start;
    @media (max-width: 991.5px) {
        margin-top: 36px;
    }
`;

const StyledText = styled(Text)`
    margin-bottom: 20px;
    text-align: start;
`;

const StyledH5 = styled(H5)`
    text-align: start;
    color: ${colors.blue};
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;

const StyledH3 = styled(H3)`
    margin-top: 80px;
    text-align: start;
`;

const IconArrow = styled.div`
    width: 5px;
    height: 8px;
    display: inline-block;
    margin-left: 4px;
    margin-bottom: 1px;
    background-image: url(/images/icon-arrow-read.svg);
    background-size: cover;
    background-position: center;
`;

const Video = styled.div`
    max-width: 100%;
    width: 374px;
    height: 232px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 22px;
    background-image: url(/images/video.png);
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s all;
    &:hover {
        .video-button {
            transform: scale(1.1);
        }
    }
`;

const VideoButton = styled.div`
    width: 96px;
    height: 96px;
    background-image: url(/images/button-play.svg);
    background-size: cover;
    background-position: center;
    transition: 0.3s all;
`;

const Graphic = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: 657px;
    height: 712px;
    margin-top: 72px;
    background-image: url(/images/graphic.svg);
    background-size: cover;
    background-position: center;
    @media (max-width: 991.5px) {
        margin-top: 400px;
    }
    @media (max-width: 767.5px) {
        width: 328px;
        height: 190px;
        margin-top: -353px;
        background-image: url(/images/city.svg);
    }
`;

const WrapperOrder = styled.div`
    max-width: 360px;
    background: #f8faff;
    border: 2px solid ${colors.lightBlue};
    border-radius: 8px;
    margin-left: auto;
    margin-top: 36px;
    padding: 0 32px;
    @media (max-width: 991.5px) {
        max-width: 328px;
        padding: 0 16px;
    }
    @media (max-width: 767.5px) {
        margin: auto;
        margin-top: 36px;
        .order-data {
            display: none;
        }
    }
`;

const StyledH4 = styled(H4)`
    margin-top: 36px;
`;

const InfoLogo = styled.div`
    position: absolute;
    width: 24px;
    height: 24px;
    right: -40px;
    top: 2px;
    margin-top: 36px;
    background-image: url(/images/icon-info.svg);
    background-size: cover;
    background-position: center;
    cursor: pointer;
    transition: 0.3s all;
    &:hover {
        background-image: url(/images/icon-info-active.svg);
        .sign {
            display: block;
        }
    }
`;

const Sign = styled.div`
    position: absolute;
    display: none;
    right: 0;
    top: 31px;
    background: white;
    width: 252px;
    padding: 8px 16px;
    border: 1px solid ${colors.lightBlue};
    z-index: 2;
`;

const StyledCol = styled(Col)`
    width: 100%;
`;

const StyledRadioGroup = styled(Radio.Group)`
    width: 100%;
    .ant-radio-button-wrapper {
        width: 33.3333%;
        height: 84px;
        span {
            display: flex;
            justify-content: center;
        }
        @media (max-width: 767.5px) {
            height: 58px;
        }
    }
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {{
        border: 2px solid ${colors.blue}!important;
        .order-data {
            opacity: 1;
        }
    }
`;

const StyledRadioButton = styled(Radio.Button)`
    border-top-left-radius: ${(props) => props.borderTopLeft || '0'}!important;
    border-bottom-left-radius: ${(props) =>
        props.borderBottomLeft || '0'}!important;
    border-top-right-radius: ${(props) =>
        props.borderTopRight || '0'}!important;
    border-bottom-right-radius: ${(props) =>
        props.borderBottomRight || '0'}!important;
    transition: 0.3s all;
    &:hover {
        opacity: 0.7;
    }
`;

const OrderLogo = styled.div`
    width: ${(props) => props.logoWidth || '100px'};
    height: ${(props) => props.logoHeight || '84px'};
    position: absolute;
    left: ${(props) => props.logoLeft || '0'};
    top: 0;
    background-image: ${(props) => props.logoSrc};
    background-size: cover;
    background-position: center;
`;

const StyledText2 = styled(Text2)`
    position: absolute;
    bottom: 6px;
    font-size: 12px;
    line-height: 24px;
    opacity: 0.48;
`;

const StyledForm = styled(Form)`
    width: 100%;
    margin-top: 34px;
    .form-item-location {
        width: 84%;
        .ant-form-item-label {
            label {
                font-family: 'Intro Bold', Helvetica, Arial, sans-serif;
                font-weight: 700;
                font-size: 12px;
                line-height: 16px;
                text-transform: uppercase;
                color: #c4cee6;
            }
        }
    }
`;

const IconPickupLocation = styled.div`
    width: 24px;
    height: 24px;
    margin-top: 43px;
    margin-right: 20px;
    background-image: url(/images/icon-order-location.svg);
    background-size: cover;
    background-position: center;
`;

const IconDropLocation = styled.div`
    width: 24px;
    height: 24px;
    margin-top: 43px;
    margin-right: 20px;
    background-image: url(/images/icon-order-location2.svg);
    background-size: cover;
    background-position: center;
`;

const StyledButtonOrder = styled(Button)`
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

const StyledButtonReset = styled(Button)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    border: 0;
    font-family: 'Intro Book', Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #999999;
    &:hover {
        color: #999999;
        opacity: 0.7;
    }
    &:focus,
    :active {
        color: #999999;
    }
`;

const WrapperTrackPackage = styled.div`
    max-width: 360px;
    margin-top: 72px;
    margin-left: auto;
    background: ${colors.yellow};
    border: 0;
    border-radius: 8px;
    padding: 24px 32px;
    @media (max-width: 767.5px) {
        margin: auto;
        margin-top: 36px;
    }
`;

const InputStyled = styled(Input)`
    display: flex;
    border: 0 !important;
    border-bottom: 2px solid ${colors.lightBlue}!important;
    border-color: ${colors.lightBlue}!important;
    padding: 12.5px 16px;
    &::placeholder {
        color: ${colors.darkBlue}!important;
        opacity: 0.56;
        font-family: 'Intro Book', Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 24px;
    }
    &:hover {
        opacity: 0.7;
    }
    &:focus,
    :active {
        border-bottom: 2px solid ${colors.blue}!important;
        &::placeholder {
            opacity: 1;
        }
    }
`;

const StyledH3Package = styled(H3)`
    text-align: start;
`;

const InputStyledPackage = styled(Input)`
    min-width: 100%;
    height: 40px;
    display: flex;
    border: 1px solid ${colors.lightBlue};
    border-radius: 8px;
    padding: 12.5px 16px;
    &::placeholder {
        color: ${colors.darkBlue}!important;
        opacity: 0.56;
        font-family: 'Intro Book', Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 24px;
    }
`;

const SearchIcon = styled.div`
    position: absolute;
    right: 38px;
    width: 16px;
    height: 16px;
    background-image: url(/images/icon-search2.svg);
    background-size: cover;
    background-position: center;
    margin-top: -27px;
    cursor: pointer;
`;

const MainSection = () => {
    const [orderValue, setOrderValue] = useState('small');

    const formRef = useRef();

    const onChange = (e) => {
        setOrderValue(e.target.value);
    };

    const onFinish = (values) => {
        console.log(values);
    };

    const onReset = () => {
        formRef.current.resetFields();
    };

    return (
        <>
            <StyledRow>
                <Col
                    xs={{ span: 24, order: 2 }}
                    md={{ span: 11, order: 3 }}
                    lg={{ span: 8, order: 1 }}
                >
                    <StyledH1>Our service started work in New York</StyledH1>
                    <StyledText>
                        We make delivery exactly at the time you need - we can
                        start to fulfill the order a few minutes after it
                        arrives, or we can deliver on a specific day and hour.
                    </StyledText>
                    <StyledH5>
                        Read more <IconArrow className="icon-arrow"></IconArrow>
                    </StyledH5>
                    <StyledH3>How it works</StyledH3>
                    <Video>
                        <VideoButton className="video-button"></VideoButton>
                    </Video>
                </Col>
                <Col
                    xs={{ span: 24, order: 3 }}
                    md={{ span: 1, order: 2 }}
                    lg={{ span: 8, order: 2 }}
                >
                    <Graphic></Graphic>
                </Col>
                <Col
                    xs={{ span: 24, order: 1 }}
                    md={{ span: 10, order: 1 }}
                    lg={{ span: 8, order: 3 }}
                >
                    <WrapperOrder>
                        <Row>
                            <Col>
                                <StyledH4>Send a Parcel</StyledH4>
                                <InfoLogo>
                                    <Sign className="sign">
                                        <Text2>
                                            A commission is a piece of work that
                                            someone is asked to do and is paid
                                            for.
                                        </Text2>
                                    </Sign>
                                </InfoLogo>
                            </Col>
                            <StyledCol>
                                <StyledRadioGroup
                                    value={orderValue}
                                    onChange={onChange}
                                    size="large"
                                >
                                    <StyledRadioButton
                                        value="small"
                                        borderTopLeft="8px"
                                        borderBottomLeft="8px"
                                    >
                                        <OrderLogo logoSrc="url(/images/icon-onfoot.svg);"></OrderLogo>
                                        <StyledText2 className="order-data">
                                            up to 10lb
                                        </StyledText2>
                                    </StyledRadioButton>
                                    <StyledRadioButton value="middle">
                                        <OrderLogo
                                            logoSrc="url(/images/icon-car.svg);"
                                            logoHeight="56px"
                                            logoWidth="56px"
                                            logoLeft="23%"
                                        ></OrderLogo>
                                        <StyledText2 className="order-data">
                                            up to 130lb
                                        </StyledText2>
                                    </StyledRadioButton>
                                    <StyledRadioButton
                                        value="large"
                                        borderTopRight="8px"
                                        borderBottomRight="8px"
                                    >
                                        <OrderLogo
                                            logoSrc="url(/images/icon-truck.svg);"
                                            logoHeight="56px"
                                            logoWidth="56px"
                                            logoLeft="23%"
                                        ></OrderLogo>
                                        <StyledText2 className="order-data">
                                            over 130lb
                                        </StyledText2>
                                    </StyledRadioButton>
                                </StyledRadioGroup>
                            </StyledCol>

                            <StyledForm
                                ref={formRef}
                                name="order"
                                onFinish={onFinish}
                                layout="vertical"
                            >
                                <Row>
                                    <IconPickupLocation></IconPickupLocation>
                                    <Form.Item
                                        name="pick-location"
                                        label="Pickup location"
                                        className="form-item-location"
                                    >
                                        <InputStyled placeholder="location" />
                                    </Form.Item>
                                </Row>

                                <Row>
                                    <IconDropLocation></IconDropLocation>
                                    <Form.Item
                                        name="drop-location"
                                        label="Drop location"
                                        className="form-item-location"
                                    >
                                        <InputStyled placeholder="address" />
                                    </Form.Item>
                                </Row>
                                <Form.Item>
                                    <StyledButtonOrder htmlType="submit">
                                        Order
                                    </StyledButtonOrder>
                                </Form.Item>
                                <Form.Item>
                                    <StyledButtonReset onClick={onReset}>
                                        &#10006; Clear All
                                    </StyledButtonReset>
                                </Form.Item>
                            </StyledForm>
                        </Row>
                    </WrapperOrder>
                    <WrapperTrackPackage>
                        <StyledH3Package>Track your package</StyledH3Package>
                        <InputStyledPackage placeholder="Track a Package"></InputStyledPackage>
                        <SearchIcon></SearchIcon>
                    </WrapperTrackPackage>
                </Col>
            </StyledRow>
        </>
    );
};

export default MainSection;
