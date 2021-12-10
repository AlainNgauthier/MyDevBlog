import styled from 'styled-components';

export const Main = styled.section`
    width: var(--container);
    min-height: 100vh;
    margin: auto;
    padding: 10px;
    font-family: var(--font-text);

    p {
        font-size: 16px;
    }

    img {
            margin-left: 100px;

            @media (max-width: 600px) {
                max-width: 330px;
                height: 110px;
                margin-left: 0;
            }
    }

    @media (max-width: 600px) {
        max-width: 100%;
        padding: 3px;
    }
`;

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: space-evenly;
`;

export const Body = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h1 {
        font-size: var(--medium);
    }

    @media (max-width: 600px) {
        padding: 5px;
    }
`;

export const BodyContent = styled.div`
    margin-top: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    p {
        code {
            margin-left: 40px;
            padding: 15px;
            font-size: 15px;
            background: var(--white);
            color: var(--background);

            @media (max-width: 600px){
                margin-left: 10px;
                padding: 0;
                font-size: 12px;
                background: var(--background);
                color: var(--white);
            }
        }
    }

    @media (max-width: 600px) {
        padding: 5px;
    }
`;