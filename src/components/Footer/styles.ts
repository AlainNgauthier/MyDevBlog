import styled from 'styled-components';

export const Main = styled.footer`
    width: 100%;
    color: #6e6e6e;
    display: flex;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
`;

export const MainWrapper = styled.section`
    max-width: var(--container);
    padding: 100px 0;
    display: flex;
    justify-content: center;
    gap: 15px;

    @media (max-width: 999px) {
        padding: 50px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
    }
`;

export const Item = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-size: var(--small);

    svg { 
        color: var(--white);
    }

    span {
        text-transform: uppercase;
        color: var(--highlight);
        font-weight: 700;
    }
`;