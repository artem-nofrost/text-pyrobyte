import { createGlobalStyle } from 'styled-components';
import IntroBoldWoff from './intro/introbold.woff';
import IntroBoldTtf from './intro/introbold.ttf';
import IntroBookWoff from './intro/introbook.woff';
import IntroBookTtf from './intro/introbook.ttf';
import IntroBookItalicEot from './intro/introbookitalic.eot';
import IntroBookItalicWoff from './intro/introbookitalic.woff';
import IntroBookItalicTtf from './intro/introbookitalic.ttf';
import IntroLightWoff from './intro/introlight.woff';
import IntroLightTtf from './intro/introlight.ttf';
import IntroRegularWoff from './intro/introregular.woff';
import IntroRegularTtf from './intro/introregular.ttf';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Intro Bold';
        src: local('Intro Bold'), local('Intro-Bold'), url(${IntroBoldWoff}) format('woff'), url(${IntroBoldTtf}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'Intro Book';
        src: local('Intro Book'), local('Intro-Book'), url(${IntroBookWoff}) format('woff'), url(${IntroBookTtf}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Intro Book Italic';
        src: local('Intro Book Italic'), local('Intro-BookItalic'), url(${IntroBookItalicEot}) format('embedded-opentype'), url(${IntroBookItalicWoff}) format('woff'), url(${IntroBookItalicTtf}) format('truetype');
        font-weight: 400;
        font-style: italic;
    }
    @font-face {
        font-family: 'Intro Light';
        src: local('Intro Light'), local('Intro-Light'), url(${IntroLightWoff}) format('woff'), url(${IntroLightTtf}) format('truetype');
        font-weight: 200;
        font-style: normal;
    }
    @font-face {
        font-family: 'Intro Regular';
        src: local('Intro Regular'), local('Intro-Regular'), url(${IntroRegularWoff}) format('woff'), url(${IntroRegularTtf}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
`;

export default FontStyles;
