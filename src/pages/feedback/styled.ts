import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-100px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
`;


export const Container = styled.div`
    min-height: 100%;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${appearFromLeft} 1s;

    h1 {
        font-size: 1.5rem;
        font-weight: 300;
        text-align: center;
    }

    svg {
        font-size: 6rem;
        margin: 1rem;
    }
`;