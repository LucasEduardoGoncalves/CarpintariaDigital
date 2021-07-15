import styled, { createGlobalStyle } from 'styled-components';

import heroImg from '../assets/background-home.jpg';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;   
    }

    body {
        background: #f8f8f8;
        color: #212529;
    }

    body, input, button, textarea {
        font: 400 16px 'Roboto', sans-serif;  
    }

    ul {
        list-style: none;
    }

    a, button {
        text-decoration: none;
        cursor: pointer;
        opacity: 0.8;
        transition: opacity 0.2s;

        &:hover {
            opacity: 1;
        }
    }

    ::-webkit-scrollbar {
        width: 0;
    }  
`;

export const Container = styled.div`
    margin-top: 5rem;
    padding: 3rem;

    background-image: url(${heroImg});
    background-size: cover;
    min-height: 100vh;
    min-width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;