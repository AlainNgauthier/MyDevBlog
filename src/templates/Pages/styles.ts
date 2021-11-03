import styled from 'styled-components';

export const Main = styled.section`
    max-width: var(--container);
    height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const Title = styled.h1`
    font-size: var(--large);
    margin-bottom: var(--large);
`;

export const Text = styled.div`
    padding: 10px;
`;
