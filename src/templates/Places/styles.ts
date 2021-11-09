import styled from 'styled-components';

export const Wrapper = styled.main`
    max-width: var(--container);
    width: 100%;
    min-height: 100vh;
    margin: auto;
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(max-width: 999px) {
        margin-bottom: 20px;
        width: 100%;
        min-height: 100vh;
    }
`;

export const CloseIcon = styled.div`
    border-radius: 50%;
    background: rgba(245, 248, 246, 0.2);
`;

export const Body = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;

    @media(max-width: 999px) {
        height: 100%;
    }
`;

export const BodyTitle = styled.h1`
    font-size: var(--medium);

    @media(max-width: 999px) {
        font-size: 19px;
        text-align: center;
    }
`;

export const BodyDescription = styled.div`
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: center;

    @media(max-width: 999px) {
        padding: 10px;
    }

    p { 
        @media(max-width: 999px) {
            font-size: 16px;
            text-align: left;
        }
    }
    
`;

export const Gallery = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 10px;

    @media(max-width: 999px) {
        margin: 0 7px;
    }
`;