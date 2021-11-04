import styled from 'styled-components';

export const Slider = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Images = styled.img`
    width: 700px;
    height: 500px;
    border-radius: 10px;
`;

export const ImagesWrapper = styled.div`

`;

export const ArrowLeft = styled.div`
    position: absolute;
    top: 50%;
    left: var(--large);
    z-index: 1100;
    color: var(--white);
    cursor: pointer;

    svg {
        transition: color 0.2s ease-in-out;
        opacity: 0.5;
    }

    &:hover {
        svg {
            opacity: 1;
        }
    }
`;

export const ArrowRight = styled.div`
    position: absolute;
    top: 50%;
    right: var(--medium);
    z-index: 1100;
    color: var(--white);
    cursor: pointer;

    svg {
        transition: color 0.2s ease-in-out;
        opacity: 0.5;
    }

    &:hover {
        svg {
            opacity: 1;
        }
    }
`;