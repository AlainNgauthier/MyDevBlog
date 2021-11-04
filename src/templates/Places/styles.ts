import styled from 'styled-components';

export const Wrapper = styled.div`
    width: var(--container);
    min-height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const BodyTitle = styled.h1`
    font-size: var(--medium);
`;

export const BodyDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: center;

    p { 
        font-size: var(--small);
    }
`;

export const Gallery = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 10px;
`;