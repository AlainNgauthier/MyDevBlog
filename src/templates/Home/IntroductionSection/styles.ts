import styled from 'styled-components';

export const Main = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--white);
    color: var(--background);
    box-shadow: 0 -10px 10px var(--white);

    @media (max-width: 999px) {
        max-width: 100%;
    }
`;

export const Wrapper = styled.section`
    padding: 100px 0;
    width: var(--container);
    //height: 500px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    @media (max-width: 999px) {
        max-width: 100%;
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    font-family: 'Poppins', sans-serif;

    h2 {
        font-size: var(--medium);
    }
    span {
        color: var(--highlight);
        font-weight: 700;
        font-size: 16px;
    }
`;

export const Body = styled.section`
    width: 100%;
    display: flex;
    gap: 30px;
    justify-content: center;
    color: #888888;
    font-family: 'Lora', serif;
    line-height: 34px;

    @media (max-width: 999px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;

export const BodyProfile = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 100px;

    @media (max-width: 999px) {
        justify-content: center;
    }
`;

export const BodyDescription = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;