import styled from 'styled-components';

export const Main = styled.section`
    max-width: var(--container);
    height: 100vh;
    margin: auto;
    padding-bottom: var(--large);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const SecondLine = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    text-align: center;
`;

export const SecondLineSubtitle = styled.div`
    font-size: var(--medium);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 5px;
    color: var(--highlight);
`;

export const SecondLineTitle = styled.div`
    color: var(--white);
    font-size: var(--large);
    font-weight: 700;

    @media (max-width: 768px) {
        font-weight: 500;
        font-size: var(--medium);
    }
`;

export const SecondLineRole = styled.div`
    width: 280px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: var(--small);
    border-right: 1px solid var(--white);
    border-left: 1px solid var(--white);
`;


export const ThirdLine = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
`;

//background: url() no repeat center center fixed


