import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    z-index: 1100;
    top: var(--small);
    right: var(--medium); 
    color: var(--white);
    cursor: pointer;

    svg {
        transition: color 0.2s ease-in-out;
    }

    &:hover {
        svg {
            color: var(--highlight);
        }
    }
`;