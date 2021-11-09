import styled from 'styled-components';

export const MenuWrapper = styled.nav`
    position: fixed;
    top: 10px;
    margin-left: 10px;
    z-index: 1110;
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-weight: 700;
    color: var(--white);
    background: #000000;
    border-radius: 10px;
    border: 2px solid transparent;

    svg {
        color: var(--highlight);
    }

    &:hover {
        transition: all 0.7s ease;
        box-shadow: -1px 1px 4px rgba(245, 248, 246, 0.5);
        border: 2px solid var(--highlight);
    }

    @media (max-width: 999px) {
        width: 120px;
    }
`;

export const Header = styled.header`
    height: 50px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    font-size: var(--small);
    text-transform: uppercase;
    letter-spacing: 5px;
    cursor: pointer;

    @media (max-width: 999px) {
        gap: 7px;
        letter-spacing: 3px;
    }
`;

export const Body = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const BodyItem = styled.div`
    width: 100%;
    height: 50px;
    padding-left: 25px;
    display: flex;
    align-items: center;
    font-size: var(--small);

    span {
        &:hover {
            color: var(--highlight);
            transform: translateX(15%);
            transition: .3s all ease;
            cursor: pointer;
        }
    }

    @media (max-width: 999px) {
        padding-left: 15px;
    }
`;