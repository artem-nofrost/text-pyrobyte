import React from 'react';
import Container from '../../style/Container';
import Footer from '../footer';
import HeaderMenu from '../header';
import CompanyInfo from './CompnayInfo';
import Info from './Info';
import Intro from './Intro';
import MainSection from './MainSection';
import Partners from './Partners';
import PayMethods from './PayMethods';
const Main = () => {
    return (
        <>
            <HeaderMenu></HeaderMenu>
            <Container>
                <MainSection></MainSection>
                <Info></Info>
                <Partners></Partners>
                <Intro></Intro>
                <PayMethods></PayMethods>
                <CompanyInfo></CompanyInfo>
                <Footer></Footer>
            </Container>
        </>
    );
};

export default Main;
