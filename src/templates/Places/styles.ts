import styled from 'styled-components';

export const Wrapper = styled.div`
    width: var(--container);
    margin: auto;
    display: flex;
    flex-direction: column;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Gallery = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--medium);
`;