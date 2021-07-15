import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;

    background: #f8f8f8;

    align-items: center;
    padding: 1rem;

    width: 100%;
    height: 5rem;
    position: absolute;

    top: 0;
    left: 0;

    .title {
        display: flex;
        align-items: center;
    }

    img { 
        width: 5rem;
    }

    nav {
        display: flex;
        flex-flow: row nowrap;
        align-items: baseline;

        gap: 1rem;

        a {
            color: #16B7AD;
            padding: 0.2rem;
        }

        .barraLink {
            border-bottom: 0.2rem solid #16B7AD;
            opacity: 1;
        }
    }

    @media (max-width: 47rem) {
        flex-direction: column;
        padding: 3rem;
    }
`;