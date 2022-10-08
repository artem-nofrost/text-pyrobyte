import React from 'react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { fade_in } from './style/animations';
import FontStyles from './fonts/fontStyles';
import 'antd/dist/antd.css';

const Global = createGlobalStyle`
    html {
        font-family: 'Intro Regular', Helvetica, Arial, sans-serif;
        font-size: 18px;
        line-height: 24px;
        animation: ${fade_in} 1.5s ease 1;
    }

    body {
        margin: 0;
        padding: auto 2rem;
        color: rgb(0, 0, 0);
        box-sizing: border-box;
        background-color: #F8FAFF;;
        overflow-x: hidden;
    }

    input {
        border-color: #c5c5c5 !important;
    }

    input:focus {
        border-color: #c5c5c5 !important;
        box-shadow: 0 0 0 #80bdff00 !important;
    }

    .ant-drawer-mask {
        background: rgb(0 0 0 / 0%)!important;
    }
`;

ReactDOM.render(
    <Router>
        <FontStyles />
        <Global />
        <App />
    </Router>,
    document.getElementById('site-wrap'),
);
