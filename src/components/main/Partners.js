import { Button, Col, Row } from 'antd';
import Icon from '@ant-design/icons';
import React from 'react';
import H1 from '../../style/H1';
import styled from 'styled-components';
import Slider from 'react-slick';
import { colors } from '../../style/colors';

const SuitCaseSvg = () => (
    <svg
        width="17"
        height="16"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M28 31H20V28L6 25V37.5266C6 39.448 7.59158 41 9.56211 41H38.4379C40.4084 41 42 39.448 42 37.5266V25L28 28V31Z"
            fill="#FD466E"
        />
        <path
            d="M38.4379 13.9999H32V12.0208C32 8.97284 29.9179 7 27 7H21C18.0821 7 16 8.97292 16 12.0208V14H9.5718C7.60128 14 6.0097 15.6625 6.0097 17.7208L6 23L20 26V23H28V26L42 23V17.6812C42 15.6624 40.4084 13.9999 38.4379 13.9999ZM19 12.5C19 11.5 19.5 11 20.5 11H27.5C28.5 11 29 11.5 29 12.5V14H19V12.5Z"
            fill="#FD466E"
        />
        <path d="M27 24H21V30H27V24Z" fill="#FD466E" />
    </svg>
);

const StyledH1 = styled(H1)`
    margin-top: 194px;
`;

const StyledButton = styled(Button)`
    height: 40px;
    margin-top: 194px;
    border: 1px solid #dde7fd;
    border-radius: 24px;
    font-family: 'Intro Book', Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.darkBlue};
    &:hover {
        border: 1px solid #dde7fd;
        color: ${colors.darkBlue};
        opacity: 0.7;
    }
    @media (max-width: 991.5px) {
        display: block;
        margin: auto;
        margin-top: 50px;
    }
`;

const StyledSlider = styled(Slider)`
    margin-top: 56px;
`;

const CurrentPartner = styled.div`
    width: ${(props) => props.partnerWidth};
    height: ${(props) => props.partnerHeight};
    background-image: ${(props) => props.partnerSrc};
    background-size: cover;
    background-position: center;
    margin: auto;
    transition: 0.3s all;
    cursor: pointer;
    &:hover {
        background-image: ${(props) => props.partnerHoverSrc};
    }
`;

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const Partners = () => {
    return (
        <>
            <Row>
                <Col xs={0} lg={5}></Col>
                <Col xs={24} lg={14}>
                    <StyledH1>Our Partners</StyledH1>
                </Col>
                <Col xs={0} lg={5}>
                    <StyledButton icon={<Icon component={SuitCaseSvg} />}>
                        Let's collaborate
                    </StyledButton>
                </Col>
            </Row>
            <StyledSlider {...settings}>
                <div>
                    <CurrentPartner
                        partnerSrc="url(/images/partner1.svg)"
                        partnerHeight="38px"
                        partnerWidth="157px"
                        partnerHoverSrc="url(/images/partner1-hover.svg)"
                    ></CurrentPartner>
                </div>
                <div>
                    <CurrentPartner
                        partnerSrc="url(/images/partner2.svg)"
                        partnerHeight="54px"
                        partnerWidth="188px"
                        partnerHoverSrc="url(/images/partner2-hover.svg)"
                    ></CurrentPartner>
                </div>
                <div>
                    <CurrentPartner
                        partnerSrc="url(/images/partner3.svg)"
                        partnerHeight="42px"
                        partnerWidth="131px"
                        partnerHoverSrc="url(/images/partner3-hover.svg)"
                    ></CurrentPartner>
                </div>
                <div>
                    <CurrentPartner
                        partnerSrc="url(/images/partner4.svg)"
                        partnerHeight="40px"
                        partnerWidth="176px"
                        partnerHoverSrc="url(/images/partner4-hover.svg)"
                    ></CurrentPartner>
                </div>
                <div>
                    <CurrentPartner
                        partnerSrc="url(/images/partner5.svg)"
                        partnerHeight="57px"
                        partnerWidth="105px"
                        partnerHoverSrc="url(/images/partner5-hover.svg)"
                    ></CurrentPartner>
                </div>
                <div>
                    <CurrentPartner
                        partnerSrc="url(/images/partner5.svg)"
                        partnerHeight="57px"
                        partnerWidth="105px"
                        partnerHoverSrc="url(/images/partner5-hover.svg)"
                    ></CurrentPartner>
                </div>
            </StyledSlider>

            <Row>
                <Col xs={24} lg={0}>
                    <StyledButton icon={<Icon component={SuitCaseSvg} />}>
                        Let's collaborate
                    </StyledButton>
                </Col>
            </Row>
        </>
    );
};

export default Partners;
