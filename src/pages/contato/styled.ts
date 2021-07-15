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
    min-width: 100%;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${appearFromLeft} 1s;

    h1 {
        font-size: 1.5rem;
        font-weight: 300;
        text-align: center;
    }

    main {
        min-width: 100%;
        gap: 2rem;
        margin-top: 2.5rem;
        
        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        section {
            display: flex;
            align-items: center;
            justify-content: space-around;

            width: 30rem;

            background-color: #f8f8f8;
            border: 1px solid #ccc;

            padding: 1rem;
            gap: 1rem;

            border-radius: 0.5rem;

            svg {
                font-size: 4rem;
            }

            div {
                display: flex;
                flex-direction: column;

                gap: 0.5rem;
                h3 {
                    font-size: 1rem;
                    font-weight: 500;
                }
            }
        }
    }
`;