import styled from 'styled-components';

export const Wrapper = styled.div`
    width: var(--container);
    //min-height: 100vh;
    margin: auto;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(max-width: 600px) {
        top: 50px;
    }
`;

export const Body = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    @media(max-width: 600px) {
        //height: 100%;
    }
`;

export const BodyTitle = styled.h1`
    font-size: var(--medium);

    @media(max-width: 600px) {
        //height: 100%;
    }
`;

export const BodyDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: center;

    p { 
        font-size: var(--small);
    }

    @media(max-width: 600px) {
        //height: 100%;
    }
`;

export const Gallery = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 10px;

    @media(max-width: 600px) {
        //height: 100%;
    }
`;