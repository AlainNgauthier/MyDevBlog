import styled from 'styled-components';

export const Main = styled.main`
    width: var(--container);
    min-height: 100vh;
    margin: auto;
    padding: 20px;
    display: flex;
    font-family: var(--font-text);

    @media (max-width: 999px){
        width: 100%;
    }
`;

export const Wrapper = styled.section`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Typography = styled.h1`
    font-size: 22px;
    margin-bottom: 20px;
`;

export const List = styled.section`
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const TypographyTitle = styled.h2`
    font-size: 20px;
`;

export const Banner = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
`;

export const TypographyDescription = styled.p`
    margin-left: 15px;
    font-size: 16px;
    color: var(--color-footer);
`;