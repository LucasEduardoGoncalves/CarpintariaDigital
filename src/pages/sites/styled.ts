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
        flex-flow: row wrap;
        justify-content: center;


        section {
            display: flex;
            align-items: center;
            justify-content: space-around;

            width: 29rem;

            background-color: rgba(248, 248, 248, 0.9);
            border: 1px solid rgba(248, 248, 248, 0.9);

            padding: 1rem;
            gap: 1rem;

            border-radius: 0.5rem;

            transition: background-color 0.2s;
            transition: border-color 0.2s;

            &:hover{
                background-color: #f8f8f8;
                border-color: #ccc;
            }

            img {
                height: 4rem;
                margin: 1rem;
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