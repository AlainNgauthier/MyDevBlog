import styled from 'styled-components';

export const MenuWrapper = styled.div`
    position: fixed;
    top: 0;
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

    svg {
        color: var(--highlight);
    }
`;

export const Header = styled.div`
    height: 50px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    font-size: var(--small);
    text-transform: uppercase;
    letter-spacing: 5px;
    cursor: pointer;
`;

export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    // transition-property: height;
    // transition-duration: 4s;
    // transition-timing-function: linear;
    // transition-delay: 1s;
`;

export const BodyItem = styled.div`
    width: 100%;
    height: 50px;
    padding-left: 20px;
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

`;