import React from 'react';
import H1 from '../../style/H1';
import Slider from 'react-slick';
import styled from 'styled-components';
import { colors } from '../../style/colors';

const StyledH1 = styled(H1)`
    margin-top: 170px;
`;

const StyledSlider = styled(Slider)`
    margin-top: 46px;

    .slick-next,
    .slick-prev {
        top: 45%;
    }

    .slick-prev:before {
        content: url(/images/left-arrow.svg);
    }
    [dir='rtl'] .slick-prev:before {
        content: url(/images/right-arrow.svg);
    }

    .slick-next:before {
        content: url(/images/right-arrow.svg);
    }
    [dir='rtl'] .slick-next:before {
        content: url(/images/left-arrow.svg);
    }
`;

const CurrentPay = styled.div`
    width: 84px;
    height: 56px;
    background-image: ${(props) => props.partnerSrc};
    background-size: cover;
    background-position: center;
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

const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
};

const PayMethods = () => {
    return (
        <>
            <StyledH1>Payment methods</StyledH1>
            <StyledSlider {...settings}>
                <div>
                    <CurrentPay partnerSrc="url(/images/icon-googlepay.svg)"></CurrentPay>
                </div>
                <div>
                    <CurrentPay partnerSrc="url(/images/icon-sofort.svg)"></CurrentPay>
                </div>
                <div>
                    <CurrentPay partnerSrc="url(/images/icon-unionpay.svg)"></CurrentPay>
                </div>
                <div>
                    <CurrentPay partnerSrc="url(/images/icon-visa.svg)"></CurrentPay>
                </div>
                <div>
                    <CurrentPay partnerSrc="url(/images/icon-mastercard.svg)"></CurrentPay>
                </div>
                <div>
                    <CurrentPay partnerSrc="url(/images/icon-amex.svg)"></CurrentPay>
                </div>
                <div>
                    <CurrentPay partnerSrc="url(/images/icon-amex.svg)"></CurrentPay>
                </div>
            </StyledSlider>
            <SepLine>
                <WrapperSepLogo>
                    <SepLogo></SepLogo>
                </WrapperSepLogo>
            </SepLine>
        </>
    );
};

export default PayMethods;
